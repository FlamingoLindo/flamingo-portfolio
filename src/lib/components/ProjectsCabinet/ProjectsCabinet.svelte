<script lang="ts">
	import thcBG from '$lib/assets/images/thc/thc-bg.png';
	import { fade } from 'svelte/transition';
	import Project from './Project/Project.svelte';
	import ProjectDescription from './ProjectDescription/ProjectDescription.svelte';

	const ITEM_SIZE = 140;
	const HALF = 110;
	const STEP_Y = 110;
	const gridW = HALF * 2 + ITEM_SIZE;

	export interface IProjects {
		id: number;
		title: string;
		data?: {
			mainLanguage: string;
			stack: string;
			problem: string;
			solution: string;
		};
		x: number;
		y: number;
		image?: {
			icon: string;
			full: string;
		};
	}

	// FIXME load all when user enters the site?
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

	const projectDefs = [
		{
			id: 1,
			title: 'PROJECT 1',
			x: HALF,
			y: 0,
			data: {
				mainLanguage: 'TypeScript',
				stack: 'TypeScript, SCSS, HTML',
				problem:
					'Users had no central place to track their daily habits, leading to inconsistent routines and lack of accountability.',
				solution:
					'Built a habit tracker with streaks, reminders, and visual progress charts that kept users engaged and consistent.'
			}
		},
		{
			id: 2,
			title: 'PROJECT 2',
			x: 0,
			y: STEP_Y,
			data: {
				mainLanguage: 'Rust',
				stack: 'Rust, WebAssembly, JavaScript',
				problem:
					'A legacy image processing pipeline was too slow for real-time use, causing delays in a production workflow.',
				solution:
					'Rewrote the core processing logic in Rust compiled to WASM, achieving a 12x speed improvement in the browser.'
			}
		},
		{
			id: 3,
			title: 'PROJECT 3',
			x: HALF * 2,
			y: STEP_Y,
			data: {
				mainLanguage: 'Python',
				stack: 'Python, FastAPI, PostgreSQL',
				problem:
					'A small business was managing inventory through spreadsheets, causing stock errors and lost sales.',
				solution:
					'Developed a REST API with real-time stock tracking, low-stock alerts, and a simple dashboard for managers.'
			}
		},
		{
			id: 4,
			title: 'PROJECT 4',
			x: HALF,
			y: STEP_Y * 2,
			data: {
				mainLanguage: 'Svelte',
				stack: 'Svelte, TypeScript, Tailwind',
				problem:
					"A portfolio site felt generic and failed to communicate the developer's unique personality and skill set.",
				solution:
					'Designed an interactive portfolio with custom animations, a themed UI inspired by video games, and dynamic project cards.'
			}
		},
		{
			id: 5,
			title: 'PROJECT 5',
			x: 0,
			y: STEP_Y * 3,
			data: {
				mainLanguage: 'Go',
				stack: 'Go, Redis, Docker',
				problem:
					'A chat application struggled under high load, with message delivery delays of up to 4 seconds.',
				solution:
					'Replaced the synchronous queue with a Redis pub/sub system and containerized the service for horizontal scaling.'
			}
		},
		{
			id: 6,
			title: 'PROJECT 6',
			x: HALF * 2,
			y: STEP_Y * 3,
			data: {
				mainLanguage: 'React',
				stack: 'React, Node.js, MongoDB',
				problem:
					'A freelance team had no shared tool to track project status, deadlines, and client feedback in one place.',
				solution:
					'Created a lightweight project management app with kanban boards, comment threads, and deadline notifications.'
			}
		},
		{
			id: 7,
			title: 'PROJECT 7',
			x: HALF,
			y: STEP_Y * 4,
			data: {
				mainLanguage: 'C#',
				stack: 'C#, Unity, HLSL',
				problem:
					'A 2D mobile game suffered from inconsistent frame rates due to inefficient sprite batching and shader calls.',
				solution:
					'Profiled and optimized the render pipeline by merging draw calls and writing custom HLSL shaders, stabilizing the frame rate at 60fps.'
			}
		},
		{
			id: 8,
			title: 'PROJECT 8',
			x: 0,
			y: STEP_Y * 5,
			data: {
				mainLanguage: 'Kotlin',
				stack: 'Kotlin, Jetpack Compose, Firebase',
				problem:
					'A local events app had poor discoverability, with users missing events happening near them.',
				solution:
					'Added geolocation-based filtering, push notifications for nearby events, and a map view that improved engagement by 40%.'
			}
		},
		{
			id: 9,
			title: 'PROJECT 9',
			x: HALF * 2,
			y: STEP_Y * 5,
			data: {
				mainLanguage: 'Vue',
				stack: 'Vue, GraphQL, Prisma',
				problem:
					'An e-commerce storefront had a confusing checkout flow causing a high cart abandonment rate.',
				solution:
					'Redesigned the checkout as a single streamlined page with inline validation and guest checkout, reducing abandonment by 28%.'
			}
		},
		{
			id: 10,
			title: 'PROJECT 10',
			x: HALF,
			y: STEP_Y * 6,
			data: {
				mainLanguage: 'Swift',
				stack: 'Swift, SwiftUI, CoreData',
				problem:
					'iOS users lacked an offline-capable notes app that could sync seamlessly when reconnecting to the internet.',
				solution:
					'Built a notes app with CoreData for offline storage and a custom conflict resolution sync system using CloudKit.'
			}
		},
		{
			id: 11,
			title: 'PROJECT 11',
			x: 0,
			y: STEP_Y * 7,
			data: {
				mainLanguage: 'Elixir',
				stack: 'Elixir, Phoenix, LiveView',
				problem:
					'A collaborative whiteboard tool suffered from lag and state drift between users editing simultaneously.',
				solution:
					'Leveraged Phoenix LiveView and OTP processes to broadcast real-time updates with sub-100ms latency across all clients.'
			}
		},
		{
			id: 12,
			title: 'PROJECT 12',
			x: HALF * 2,
			y: STEP_Y * 7,
			data: {
				mainLanguage: 'JavaScript',
				stack: 'JavaScript, Three.js, GSAP',
				problem:
					'A product landing page failed to communicate the depth of a 3D physical product through flat images alone.',
				solution:
					'Integrated an interactive Three.js 3D model viewer with GSAP scroll animations, increasing time on page by 65%.'
			}
		},
		{
			id: 13,
			title: 'PROJECT 13',
			x: HALF,
			y: STEP_Y * 8,
			data: {
				mainLanguage: 'Dart',
				stack: 'Dart, Flutter, Supabase',
				problem:
					'A fitness coaching business was manually sending workout plans via email, which was time-consuming and error-prone.',
				solution:
					'Developed a Flutter app where coaches build and assign plans from a library, with clients receiving and logging workouts in real time.'
			}
		},
		{
			id: 14,
			title: 'PROJECT 14',
			x: 0,
			y: STEP_Y * 9,
			data: {
				mainLanguage: 'Ruby',
				stack: 'Ruby, Rails, Sidekiq',
				problem:
					'A SaaS platform sent transactional emails synchronously, causing request timeouts during peak traffic.',
				solution:
					'Offloaded all email delivery to Sidekiq background jobs with retry logic, eliminating timeouts and improving reliability.'
			}
		},
		{
			id: 15,
			title: 'PROJECT 15',
			x: HALF * 2,
			y: STEP_Y * 9,
			data: {
				mainLanguage: 'Haskell',
				stack: 'Haskell, Servant, SQLite',
				problem:
					'A data pipeline for financial reports had subtle logic bugs that were hard to trace due to mutable state.',
				solution:
					'Rewrote the pipeline in Haskell using pure functions and strong typing, eliminating a whole class of runtime errors.'
			}
		}
	];

	const projects: IProjects[] = projectDefs.map((p, i) => ({
		...p,
		image: shuffledPairs[i % shuffledPairs.length]
	}));

	const gridH = Math.max(...projects.map((p) => p.y)) + ITEM_SIZE;

	let { showing }: { showing: boolean } = $props();
	let selectedProject = $state<IProjects | null>(null);
</script>

{#if showing}
	<div class="cabinet-wrapper" transition:fade={{ duration: 400 }}>
		<img src={thcBG} alt="thcBG" class="thc-bg" />

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
