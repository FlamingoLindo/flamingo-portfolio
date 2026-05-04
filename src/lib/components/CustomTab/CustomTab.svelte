<script lang="ts">
	import tapeBG from '$lib/assets/images/socials/black tapelet.png';
	import titleBanner from '$lib/assets/images/thc/thc-tittle-banner.png';
	import tabBG from '$lib/assets/images/socials/tabBG.png';
	import { getLocale } from '$lib/paraglide/runtime';
	import contBtnEng from '$lib/assets/images/socials/button-cont.png';
	import contBtnBr from '$lib/assets/images/socials/button-cont-pt-BR.png';
	let lang = getLocale();
	let {
		tabName,
		showing,
		children,
		onclose
	}: {
		tabName: string;
		showing: boolean;
		children?: import('svelte').Snippet;
		onclose: () => void;
	} = $props();

	function handleClose() {
		onclose?.();
	}
</script>

{#if showing}
	<div class="panel-wrapper">
		<div class="panel-header">
			<div class="title-block">
				<span class="tab-name">{tabName}</span>
				<img class="title-banner" src={titleBanner} alt="title-banner" />
			</div>
			<img class="tape-bg" src={tapeBG} alt="tape-bg" />
		</div>
		<div class="panel-body">
			{@render children?.()}
		</div>
		<button class="cont-btn" onclick={handleClose}>
			{#if lang === 'en'}
				<img src={contBtnEng} alt="cont-btn" />
			{:else}
				<img src={contBtnBr} alt="cont-btn" />
			{/if}
		</button>
		<img class="tab-bg" src={tabBG} alt="tab-bg" />
	</div>
{/if}

<style>
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
	.panel-wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		width: 700px;
		height: 100vh;
		min-height: unset;
		overflow: hidden;
		font-family: 'Courier New', Courier, monospace;
		color: #e8e2d4;
		letter-spacing: 0.06em;
		animation: jiggle 0.5s ease-out;
	}

	.tab-bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: fill;
		z-index: 0;
		pointer-events: none;
	}

	.panel-header {
		position: relative;
		width: 100%;
		z-index: 1;
		margin-top: 45px;
		min-height: 120px;
	}

	.tape-bg {
		position: absolute;
		top: 0;
		left: 48%;
		width: 100%;
		height: 100%;
		transform: translateX(-50%);
		object-fit: cover;
		z-index: 1;
		pointer-events: none;
	}

	.title-block {
		position: absolute;
		inset: 0;
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.title-banner {
		display: block;
		width: 30%;
		max-width: 360px;
		height: auto;
		object-fit: cover;
	}

	.tab-name {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 3;
		font-size: 1.65rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: #111111;
		white-space: nowrap;
		pointer-events: none;
		user-select: none;
	}

	.panel-body {
		position: relative;
		z-index: 1;
		width: 100%;
		flex: 1;
	}

	.cont-btn {
		position: relative;
		z-index: 1;
		margin-top: auto;
		margin-bottom: 36px;
		padding: 0;
		background: none;
		border: none;
		cursor: pointer;
		width: 50%;
	}

	.cont-btn img {
		display: block;
		width: 100%;
		height: auto;
	}
</style>
