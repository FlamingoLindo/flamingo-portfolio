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

		// <img src>
		for (const img of Array.from(document.images || [])) {
			add(img.src);
			try {
				add((img as HTMLImageElement).currentSrc);
			} catch (e) { void e; }
		}

		// <source srcset>
		for (const src of Array.from(document.querySelectorAll('source[srcset]')) as HTMLSourceElement[]) {
			const ss = src.getAttribute('srcset') || '';
			ss.split(',').map(s => s.trim().split(' ')[0]).filter(Boolean).forEach(u => add(u));
		}

		// background-image from computed styles
		const all = Array.from(document.querySelectorAll<HTMLElement>('*'));
		const urlRegex = /url\(["']?([^"')]+)["']?\)/g;
		for (const el of all) {
			try {
				const style = getComputedStyle(el).backgroundImage || '';
				let m;
				while ((m = urlRegex.exec(style)) !== null) {
					if (m[1]) add(m[1]);
				}
			} catch (e) { void e; }
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
				img.onload = () => { loaded += 1; update(); if (loaded === total) resolvePromise(); };
				img.onerror = () => { loaded += 1; update(); if (loaded === total) resolvePromise(); };
				// add cache-busting protection? not needed
				img.src = url;
			}
		});
	}

	onMount(async () => {
		// Wait one microtask to let children mount and register images
		await Promise.resolve();
		const urls = getImageUrls();
		if (!urls.length) {
			loading = false;
			return;
		}
		await preloadImages(urls);
		loading = false;
	});
</script>

<!-- <link rel="icon" href={favicon} /> -->
<svelte:head><title>Flamingo Portfolio</title></svelte:head>
{@render children()}

<LoadingModal show={loading} {progress} {total} />

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
	{/each}
</div>

<style>
	:global(html) {
		cursor: url('/cursor.png'), auto;
	}
</style>
