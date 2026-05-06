<script lang="ts">
	import thcTbg from '$lib/assets/images/thc/thc-thought-bg.png';
	import closeBtnEng from '$lib/assets/images/thc/button_forget.png';
	import closeBtnBr from '$lib/assets/images/thc/button_forget-pt-BR.png';
	import clickSFX from '$lib/assets/audios/sfx/click.wav';
	import type { IProjects } from '../ProjectsCabinet.svelte';
	import { getLocale } from '$lib/paraglide/runtime';

	let lang = getLocale();

	let {
		showingProject,
		project,
		onclose
	}: {
		showingProject: boolean;
		project: IProjects;
		onclose?: () => void;
	} = $props();

	type TSolution = 'problem' | 'solution';
	let desc: TSolution = $state('problem');

	let audioEl = $state<HTMLAudioElement | null>(null);

	function handleClose() {
		audioEl?.play();
		onclose?.();
	}
</script>

{#if showingProject}
	<div class="card">
		<audio bind:this={audioEl} src={clickSFX}></audio>
		<img loading="lazy" decoding="async" src={thcTbg} alt="thc-t-bg" class="card-bg" />

		<div class="card-content">
			<div class="project-image-wrapper">
				{#if project.image?.full}
					<img loading="lazy" decoding="async" src={project.image.full} alt="project" class="project-image" />
				{:else}
					<div class="project-image placeholder"></div>
				{/if}
			</div>

			<div class="title-wrapper">
				<h1 class="project-title">{project.title}</h1>
			</div>

			<div class="stats">
				<p>Main language: <span class="highlight">{project.data?.mainLanguage}</span></p>
				<p>Stack: <span class="highlight-alt">{project.data?.stack}</span></p>
			</div>

			<div class="tabs">
				<button class="tab" class:active={desc === 'problem'} onclick={() => (desc = 'problem')}>
					PROBLEM
				</button>
				<span class="tab-divider">/</span>
				<button class="tab" class:active={desc === 'solution'} onclick={() => (desc = 'solution')}>
					SOLUTION
				</button>
			</div>

			<div class="body-text">
				{#if desc === 'problem'}
					<p>{project.data?.problem}</p>
				{:else}
					<p>{project.data?.solution}</p>
				{/if}
			</div>

			<button class="forget-btn" onclick={handleClose}>
				{#if lang === 'en'}
					<img loading="lazy" decoding="async" src={closeBtnEng} alt="close-btn" />
				{:else}
					<img loading="lazy" decoding="async" src={closeBtnBr} alt="close-btn" />
				{/if}
			</button>
		</div>
	</div>
{/if}

<style lang="scss">
	@font-face {
		font-family: 'Dobra-Bold';
		src: url('/fonts/Dobra-Bold.otf') format('opentype');
	}
	@font-face {
		font-family: 'Dobra-Light';
		src: url('/fonts/Dobra-Light.otf') format('opentype');
	}

	@keyframes jiggle {
		0% {
			transform: translateX(0);
		}
		15% {
			transform: translateX(-8px);
		}
		30% {
			transform: translateX(7px);
		}
		45% {
			transform: translateX(-5px);
		}
		60% {
			transform: translateX(4px);
		}
		75% {
			transform: translateX(-2px);
		}
		90% {
			transform: translateX(1px);
		}
		100% {
			transform: translateX(0);
		}
	}

	.card {
		position: relative;
		width: 500px;
		height: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
        animation: jiggle 0.5s ease-out;
	}

	.card-bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: fill;
		z-index: 0;
	}

	.card-content {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.project-image-wrapper {
		width: 100%;
		height: 350px;
		overflow: hidden;
		flex-shrink: 0;
		padding: 0 13px;
		box-sizing: border-box;
	}

	.project-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
		display: block;
	}

	.title-wrapper {
		padding: 6px 12px 10px;
		margin-top: -2px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.project-title {
		font-family: 'Dobra-Bold', sans-serif;
		font-size: 2rem;
		font-weight: 900;
		color: white;
		text-transform: uppercase;
		line-height: 1.1;
		margin: 0;
		text-align: right;
	}

	.stats {
		padding: 10px 14px 6px;
		font-family: 'Dobra-Light', sans-serif;
		font-size: 1.5rem;
		color: #ccc;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		p {
			margin: 2px 0;
		}
	}

	.highlight {
		color: #7ec8e3;
	}

	.highlight-alt {
		color: #c89fe3;
	}

	.tabs {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 8px 14px;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.tab-divider {
		color: #888;
		font-size: 1.5rem;
	}

	.tab {
		background: none;
		border: none;
		font-family: 'Dobra-Light', sans-serif;
		font-size: 1.2rem;
		color: #888;
		padding: 2px 6px;
		text-transform: uppercase;
		letter-spacing: 0.05em;

		&.active {
			color: white;
			border: 1px solid white;
		}
	}

	.body-text {
		padding: 32px 34px;
		font-family: 'Dobra-Light', sans-serif;
		font-size: 1.5rem;
		color: #bbb;
		line-height: 1.55;
		flex: 1;
		p {
			margin: 0;
		}
	}

	.forget-btn {
		background: none;
		border: none;
		padding: 12px 14px;
		display: flex;
		justify-content: center;

		img {
			width: 300px;
			object-fit: contain;
			filter: drop-shadow(0 0 8px #101c25);
			transition: filter 0.2s ease;
		}

		&:hover img {
			filter: drop-shadow(0 0 14px #254850);
		}
	}
</style>
