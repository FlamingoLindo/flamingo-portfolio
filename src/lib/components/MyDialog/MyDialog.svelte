<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import myDialog from '$lib/assets/images/dialog_me.png';

	let { showing }: { showing: boolean } = $props();

	const name: string = 'Vitor (Flamingo) Ferreira';
	const description: string = m['Description']();
</script>

{#if showing}
	<div class="dialog-wrapper">
		<img loading="lazy" decoding="async" src={myDialog} alt="my-dialog" class="my-dialog" />
		<div class="dialog-text">
			<p>
				<em class="dialog-name">{name}</em> - <span class="dialog-description">{description}</span>
			</p>
		</div>
	</div>
{/if}

<style lang="scss">
	@font-face {
		font-family: 'SinaNova-Medium';
		src: url('/fonts/SinaNova-Medium.otf') format('opentype');
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

	.dialog-wrapper {
		position: relative;
		height: 100vh;
		width: fit-content;
		animation: jiggle 0.5s ease-out;
	}

	.my-dialog {
		height: 100%;
		display: block;
	}

	.dialog-text {
		position: absolute;
		top: 20%;
		left: 32%;
		width: 55%;
		padding: 1rem;
	}

	p {
		color: white;
		font-size: 1.5rem;
		line-height: 1.6;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}

	.dialog-name {
		font-family: 'SinaNova-Medium';
		font-style: normal;
		text-transform: uppercase;
		color: #faf9f7;
		font-size: 1.3rem;
	}

	.dialog-description {
		font-family: 'SinaNova-Medium';
		color: #d4d6ca;
	}
</style>
