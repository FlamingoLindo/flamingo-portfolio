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
	import AboutDisco from '$lib/components/AboutDisco/AboutDisco.svelte';
	import Dice from '$lib/components/Dice/Dice.svelte';
	import Dialog from '$lib/components/Dialog/Dialog.svelte';
	import { dialogs } from '$lib/components/Dialog/dialogs';
	import Credits from '$lib/components/Credits/Credits.svelte';

	let activeId = $state<number | null>(null);
	let currentAudio = $state<string | null>(null);
	let currentDialog = $state(dialogs[0]);
	let audioVolume = 0.3;

	function handleActiveId(newId: number | null) {
		const prev = activeId;
		activeId = newId;

		if (newId === 5) {
			currentDialog = dialogs[Math.floor(Math.random() * dialogs.length)];
		}

		if (newId === 1 || newId === 3 || newId === 4 || newId === 5 || newId === 6 || newId === 7) {
			currentAudio = startDialogSFX;
		} else if (prev === 1 || prev === 3 || prev === 4 || prev === 5 || prev === 6 || prev === 7) {
			currentAudio = endDialogSFX;
		} else if (newId === 2) {
			currentAudio = thcOpenSFX;
		} else if (prev === 2) {
			currentAudio = thcCloseSFX;
		} else {
			currentAudio = null;
		}
	}
</script>

{#if currentAudio}
	{#key currentAudio}
		<audio
			autoplay
			src={currentAudio}
			oncanplay={(e) => {
				(e.target as HTMLAudioElement).volume = audioVolume;
			}}
		></audio>
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

<div class="about-disco-container">
	<CustomTab tabName="DISCO ELYSIUM" showing={activeId === 4} onclose={() => handleActiveId(null)}>
		<AboutDisco />
	</CustomTab>
</div>

<div class="my-dialog-container">
	<Dialog showing={activeId === 5} dialog={currentDialog} />
</div>

<div class="dice-roll-container">
	<CustomTab tabName="DICE ROLL" showing={activeId === 6} onclose={() => handleActiveId(null)}>
		<Dice />
	</CustomTab>
</div>

<div class="dice-roll-container">
	<CustomTab tabName="CREDITS" showing={activeId === 7} onclose={() => handleActiveId(null)}>
		<Credits />
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
	}

	.about-disco-container {
		position: fixed;
		top: 0;
		left: 427px;
		height: 100vh;
		display: flex;
		align-items: center;
		z-index: 5;
	}

	.dice-roll-container {
		position: fixed;
		top: 0;
		left: 427px;
		height: 100vh;
		display: flex;
		align-items: center;
		z-index: 5;
	}

	.dice-roll-container {
		position: fixed;
		top: 0;
		left: 427px;
		height: 100vh;
		display: flex;
		align-items: center;
		z-index: 5;
	}
</style>
