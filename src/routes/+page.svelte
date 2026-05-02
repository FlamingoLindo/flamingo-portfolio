<script lang="ts">
	import BackGround from '$lib/components/BackGround/BackGround.svelte';
	import MenuOptions from '$lib/components/MenuOptions/MenuOptions.svelte';
	import MyDialog from '$lib/components/MyDialog/MyDialog.svelte';
	import startDialogSFX from '$lib/assets/audios/sfx/start_dialog.wav';
	import endDialogSFX from '$lib/assets/audios/sfx/end_dialog.wav';

	const audioMap: Record<number, string> = {
		1: startDialogSFX,
		2: endDialogSFX
	};

	let activeId = $state<number | null>(null);
	let currentAudio: string | null = $derived(
		activeId !== null ? (audioMap[activeId] ?? null) : null
	);
</script>

{#if currentAudio}
	{#key currentAudio}
		<audio autoplay src={currentAudio}></audio>
	{/key}
{/if}

<div class="menu-container">
	<MenuOptions bind:activeId />
</div>

<div class="my-dialog-container">
	<MyDialog showing={activeId === 1} />
</div>

<BackGround />

<style>
	.menu-container {
		position: fixed;
		top: 0;
		left: 5rem;
		height: 100vh;
		display: flex;
		align-items: center;
		z-index: 5;
	}
	.my-dialog-container {
		position: fixed;
		top: 0;
		right: 9rem;
		height: 100vh;
		display: flex;
		align-items: center;
		z-index: 5;
	}
</style>
