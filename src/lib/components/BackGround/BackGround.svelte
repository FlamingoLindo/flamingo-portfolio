<script lang="ts">
	import LanguageOption from '../LanguageOption/LanguageOption.svelte';
	import MusicBox from '../MusicBox/MusicBox.svelte';
</script>

<video class="bg-parallax" autoplay loop muted playsinline preload="auto">
	<source src="/bg_parallax.mp4" type="video/mp4" />
</video>

<div class="music-box-wrapper">
	<LanguageOption />
	<MusicBox />
</div>

<style lang="scss">
	.bg-parallax {
		position: fixed;
		inset: 0;
		width: 100vw;
		height: 100vh;
		object-fit: cover;
		z-index: -1;
		pointer-events: none;
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
