<script lang="ts">
	import BackGround from '$lib/components/BackGround/BackGround.svelte';
	import MenuOptions from '$lib/components/MenuOptions/MenuOptions.svelte';
	import MyDialog from '$lib/components/MyDialog/MyDialog.svelte';
	import startDialogSFX from '$lib/assets/audios/sfx/start_dialog.wav';
	import endDialogSFX from '$lib/assets/audios/sfx/end_dialog.wav';
	import thcOpenSFX from '$lib/assets/audios/sfx/thc_open.wav';
	import thcCloseSFX from '$lib/assets/audios/sfx/thc_close.wav';
	import ProjectsCabinet from '$lib/components/ProjectsCabinet/ProjectsCabinet.svelte';
	import CustomTab from '$lib/components/CustomTab/CustomTab.svelte';
	import Socials from '$lib/components/Socials/Socials.svelte';

	let activeId = $state<number | null>(null);
	let currentAudio = $state<string | null>(null);

	function handleActiveId(newId: number | null) {
		const prev = activeId;
		activeId = newId;
		if (newId === 1) {
			currentAudio = startDialogSFX;
		} else if (prev === 1) {
			currentAudio = endDialogSFX;
		} else if (newId === 2) {
			currentAudio = thcOpenSFX;
		} else if (prev === 2) {
			currentAudio = thcCloseSFX;
		} else if (newId === 3) {
			currentAudio = startDialogSFX;
		} else if (prev === 3) {
			currentAudio = endDialogSFX;
		} else {
			currentAudio = null;
		}
	}
</script>

{#if currentAudio}
	{#key currentAudio}
		<audio autoplay src={currentAudio}></audio>
	{/key}
{/if}

<div class="menu-container">
	<MenuOptions {activeId} onActiveIdChange={handleActiveId} />
</div>

<div class="my-dialog-container">
	<MyDialog showing={activeId === 1} />
</div>

<div class="projects-cabinet-container">
	<ProjectsCabinet showing={activeId === 2} />
</div>

<div class="socials-container">
	<CustomTab tabName="Socials" showing={activeId === 3} onclose={() => handleActiveId(null)}>
		<Socials />
	</CustomTab>
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

	.projects-cabinet-container {
		position: fixed;
		top: 0;
		left: 430px;
		right: 0;
		height: 100vh;
		display: flex;
		align-items: center;
		z-index: 5;
	}

	.socials-container {
		position: fixed;
		top: 0;
		left: 427px;
		height: 100vh;
		display: flex;
		align-items: center;
		z-index: 5;
		/* no right: 0 — container is only as wide as the 500px panel */
	}
</style>
