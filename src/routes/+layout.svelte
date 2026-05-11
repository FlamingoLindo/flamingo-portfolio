<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import LoadingModal from '$lib/components/LoadingModal/LoadingModal.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();
	let loading = $state(true);
	let progress = $state(0);
	let total = $state(0);

	function getImageUrls(): string[] {
		const urls: string[] = [];
		const seen: Record<string, 1> = Object.create(null);
		function add(u: string | undefined) {
			if (!u) return;
			if (u.startsWith('data:')) return;
			if (seen[u]) return;
			seen[u] = 1;
			urls.push(u);
		}
		for (const img of Array.from(document.images || [])) {
			add(img.src);
			try {
				add((img as HTMLImageElement).currentSrc);
			} catch (e) {
				void e;
			}
		}
		for (const src of Array.from(
			document.querySelectorAll('source[srcset]')
		) as HTMLSourceElement[]) {
			const ss = src.getAttribute('srcset') || '';
			ss.split(',')
				.map((s) => s.trim().split(' ')[0])
				.filter(Boolean)
				.forEach((u) => add(u));
		}
		const all = Array.from(document.querySelectorAll<HTMLElement>('*'));
		const urlRegex = /url\(["']?([^"')]+)["']?\)/g;
		for (const el of all) {
			try {
				const style = getComputedStyle(el).backgroundImage || '';
				let m;
				while ((m = urlRegex.exec(style)) !== null) {
					if (m[1]) add(m[1]);
				}
			} catch (e) {
				void e;
			}
		}
		return urls;
	}

	function preloadImages(urls: string[]) {
		return new Promise<void>((resolvePromise) => {
			if (!urls.length) return resolvePromise();
			let loaded = 0;
			total = urls.length;
			const update = () => {
				progress = Math.round((loaded / total) * 100);
			};
			for (const url of urls) {
				const img = new Image();
				img.onload = () => {
					loaded += 1;
					update();
					if (loaded === total) resolvePromise();
				};
				img.onerror = () => {
					loaded += 1;
					update();
					if (loaded === total) resolvePromise();
				};
				img.src = url;
			}
		});
	}

	onMount(async () => {
		await Promise.resolve();
		const urls = getImageUrls();
		await Promise.all([preloadImages(urls)]);
		loading = false;
	});

	let videoEl = $state<HTMLVideoElement | null>(null);
	let videoLoaded = $state(false);

	onMount(() => {
		if (!videoEl) return;

		const onReady = () => {
			videoLoaded = true;
		};

		videoEl.addEventListener('canplay', onReady, { once: true });
		videoEl.addEventListener('playing', onReady, { once: true });

		if (videoEl.readyState >= 3) onReady();

		return () => {
			videoEl?.removeEventListener('canplay', onReady);
			videoEl?.removeEventListener('playing', onReady);
		};
	});
</script>

<svelte:head><title>Flamingo Portfolio</title></svelte:head>

{@render children()}
<LoadingModal show={loading} {progress} {total} />

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
	{/each}
</div>

<img class="bg-fallback" src="/fallback_bg.png" alt="" aria-hidden="true" />
<video
	bind:this={videoEl}
	class="bg-parallax"
	class:loaded={videoLoaded}
	autoplay
	loop
	muted
	playsinline
	preload="auto"
>
	<source src="/bg_video.mp4" type="video/mp4" />
</video>

<style>
	:global(html) {
		cursor: url('/cursor.png'), auto;
	}
	.bg-fallback,
	.bg-parallax {
		position: fixed;
		inset: 0;
		width: 100vw;
		height: 100vh;
		object-fit: cover;
		pointer-events: none;
	}
	.bg-fallback {
		z-index: -2;
	}
	.bg-parallax {
		z-index: -1;
		opacity: 0;
		transition: opacity 0.5s ease;
		&.loaded {
			opacity: 1;
		}
	}
</style>
