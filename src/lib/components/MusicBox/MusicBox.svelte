<script lang="ts">
	import { onMount } from 'svelte';
	import SpeakerHigh from 'virtual:icons/ph/speaker-high-duotone';
	import SpeakerX from 'virtual:icons/ph/speaker-x-duotone';
	import { getRandomOST } from './getRandomOST';

	const ost = getRandomOST();
	let isMuted: boolean = $state(false);
	let audio: HTMLAudioElement;

	onMount(() => {
		audio.volume = 0.05;
	});

	function toggleMute() {
		isMuted = !isMuted;
		audio.muted = isMuted;
	}
</script>

<button class="music-box" onclick={toggleMute}>
	{#if isMuted}
		<SpeakerX style="font-size:2em; color: white" />
	{:else}
		<SpeakerHigh style="font-size:2em; color: white" />
	{/if}
</button>

<audio bind:this={audio} autoplay id="ost">
	<source src={ost} />
	{$inspect(ost)}
</audio>

<style lang="scss">
	.music-box {
		background: none;
		border: none;
	}
</style>
