<script lang="ts">
	import { onMount } from 'svelte';
	import thcTbg from '$lib/assets/images/thc/thc-thought-bg.png';
	import closeBtnEng from '$lib/assets/images/thc/button_forget.png';
	import closeBtnBr from '$lib/assets/images/thc/button_forget-pt-BR.png';
	import thcBG from '$lib/assets/images/thc/thc-bg.png';
	import { fade } from 'svelte/transition';
	import Project from './Project/Project.svelte';
	import ProjectDescription from './ProjectDescription/ProjectDescription.svelte';
	import { gridW, ITEM_SIZE, projectDefs, type IProjects } from './projects';

	const fullImages = import.meta.glob<{ default: string }>('$lib/assets/images/thc/full/*.png', {
		eager: true
	});
	const iconImages = import.meta.glob<{ default: string }>('$lib/assets/images/thc/icon/*.png', {
		eager: true
	});

	type ImagePair = { full: string; icon: string };

	const imagePairs: ImagePair[] = [];

	for (const fullPath in fullImages) {
		const baseName = fullPath.split('/').pop()?.replace('.png', '') ?? '';
		const iconKey = Object.keys(iconImages).find((p) => p.includes(`/${baseName}_icon.png`));
		if (iconKey) {
			imagePairs.push({
				full: fullImages[fullPath].default,
				icon: iconImages[iconKey].default
			});
		}
	}

	function shuffled<T>(arr: T[]): T[] {
		return [...arr].sort(() => Math.random() - 0.5);
	}
	const shuffledPairs = shuffled(imagePairs);

	const projects: IProjects[] = projectDefs.map((p, i) => ({
		...p,
		image: shuffledPairs[i % shuffledPairs.length]
	}));

	const gridH = Math.max(...projects.map((p) => p.y)) + ITEM_SIZE;

	let { showing }: { showing: boolean } = $props();
	let selectedProject = $state<IProjects | null>(null);

	onMount(() => {
		// UI images
		[thcBG, thcTbg, closeBtnEng, closeBtnBr].forEach((src) => {
			new Image().src = src;
		});

		// Project images
		for (const pair of shuffledPairs) {
			new Image().src = pair.full;
			new Image().src = pair.icon;
		}
	});
</script>

{#if showing}
	<div class="cabinet-wrapper" transition:fade={{ duration: 400 }}>
		<img loading="lazy" decoding="async" src={thcBG} alt="thcBG" class="thc-bg" />

		<div class="projects-overlay">
			<div class="projects-grid" style="width: {gridW}px; height: {gridH}px;">
				{#each projects as project (project.id)}
					<div
						class="project-slot"
						style="left: {project.x}px; top: {project.y}px; width: {ITEM_SIZE}px;"
					>
						<Project
							title={project.title}
							image={project.image}
							onclick={() => (selectedProject = project)}
						/>
					</div>
				{/each}
			</div>
		</div>

		{#if selectedProject}
			<div class="detail-panel" transition:fade={{ duration: 200 }}>
				<ProjectDescription
					showingProject={true}
					project={selectedProject}
					onclose={() => (selectedProject = null)}
				/>
			</div>
		{/if}
	</div>
{/if}

<style>
	.cabinet-wrapper {
		position: relative;
		width: 100%;
		height: 100vh;
	}

	.thc-bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100vh;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	.projects-overlay {
		position: absolute;
		inset: 0;
		height: 100%;
		z-index: 1;
		display: flex;
		align-items: flex-start;
		justify-content: left;
		margin-left: 90px;
		overflow-y: auto;
		padding-top: 20px;
	}

	.projects-overlay::-webkit-scrollbar {
		width: 4px;
	}

	.projects-overlay::-webkit-scrollbar-track {
		background: transparent;
	}

	.projects-overlay::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.2);
		border-radius: 2px;
	}

	.projects-grid {
		position: relative;
		flex-shrink: 0;
		margin-bottom: 40px;
	}

	.project-slot {
		position: absolute;
	}

	.detail-panel {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 10rem;
		height: 100vh;
		z-index: 10;
		display: flex;
		flex-direction: column;
	}
</style>
