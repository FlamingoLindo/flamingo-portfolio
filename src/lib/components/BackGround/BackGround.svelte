<script lang="ts">
	import LanguageOption from '../LanguageOption/LanguageOption.svelte';
	import MusicBox from '../MusicBox/MusicBox.svelte';

	let videoLoaded = $state(false);
</script>

<img class="bg-fallback" src="/fallback_bg.png" alt="" aria-hidden="true" />

<video
    class="bg-parallax"
    class:loaded={videoLoaded}
    autoplay
    loop
    muted
    playsinline
    preload="none"
    oncanplay={() => (videoLoaded = true)}
>
    <source src="/bg_test.mp4" type="video/mp4" />
</video>

<div class="music-box-wrapper">
	<LanguageOption />
	<MusicBox />
</div>

<style lang="scss">
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

	.music-box-wrapper {
		position: fixed;
		top: 1rem;
		right: 1rem;
		z-index: 10;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
