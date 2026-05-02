<script lang="ts">
	import thcThoughtContainer from '$lib/assets/images/thc/thc-thought-container.png';
	import thcTitleBanner from '$lib/assets/images/thc/thc-tittle-banner.png';
	import clickSFX from '$lib/assets/audios/sfx/click.wav';

	let {
		title,
		image,
		onclick
	}: {
		title: string;
		image?: { icon: string; full: string };
		onclick?: () => void;
	} = $props();

	let audioEl = $state<HTMLAudioElement | null>(null);

	function handleClick() {
		audioEl?.play();
		onclick?.();
	}
</script>

<div
	class="thought-wrapper"
	role="button"
	tabindex="0"
	onclick={handleClick}
	onkeydown={(e) => e.key === 'Enter' && handleClick()}
>
	<audio bind:this={audioEl} src={clickSFX}></audio>
	<div class="image-wrapper">
		{#if image?.icon}
			<img src={image.icon} alt={title} class="project-icon" />
		{/if}
		<img src={thcThoughtContainer} alt="thc-t-c" class="thc-t-c" />
	</div>
	<div class="banner-wrapper">
		<img src={thcTitleBanner} alt="thc-t-b" class="thc-t-b" />
		<span class="banner-title">{title}</span>
	</div>
</div>

<style lang="scss">
	@font-face {
		font-family: 'Dobra-Light';
		src: url('/fonts/Dobra-Light.otf') format('opentype');
	}
	@keyframes bounce {
		0% {
			transform: scale(1);
		}
		30% {
			transform: scale(1.18);
		}
		50% {
			transform: scale(0.95);
		}
		70% {
			transform: scale(1.08);
		}
		85% {
			transform: scale(0.98);
		}
		100% {
			transform: scale(1);
		}
	}
	.thought-wrapper {
		position: relative;
		display: inline-block;
		width: 100%;
		transition: transform 0.1s ease-out;
	}

	.thought-wrapper:hover {
		animation: bounce 0.4s ease-out;
	}
	.thc-t-c {
		display: block;
		width: 100%;
	}
	.banner-wrapper {
		position: absolute;
		bottom: 10%;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
	}
	.thc-t-b {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: fill;
	}
	.banner-title {
		position: relative;
		z-index: 1;
		font-family: 'Dobra-Light';
		color: black;
		font-size: 1rem;
		font-weight: bold;
		text-transform: uppercase;
		text-align: center;
		padding: 3px 8px;
		white-space: nowrap;
	}

	.image-wrapper {
		position: relative;
		width: 100%;
	}

	.project-icon {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
		z-index: 0;
		clip-path: polygon(50% 5%, 95% 50%, 50% 95%, 5% 50%);
	}

	.thc-t-c {
		position: relative;
		display: block;
		width: 100%;
		z-index: 1;
	}
</style>
