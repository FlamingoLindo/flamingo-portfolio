<script lang="ts">
	import { randomDC, randomDiceValue } from './dice';
	import rollDiceImg from '$lib/assets/images/dice/check_dice noplus.png';
	import dice1Img from '$lib/assets/images/dice/notif-dice 1.png';
	import dice2Img from '$lib/assets/images/dice/notif-dice 2.png';
	import dice3Img from '$lib/assets/images/dice/notif-dice 3.png';
	import dice4Img from '$lib/assets/images/dice/notif-dice 4.png';
	import dice5Img from '$lib/assets/images/dice/notif-dice 5.png';
	import dice6Img from '$lib/assets/images/dice/notif-dice 6.png';
	import successImg from '$lib/assets/images/dice/feld-flash-flare-gr.png';
	import failureImg from '$lib/assets/images/dice/feld-flash-flare.png';
	import successSFX from '$lib/assets/audios/sfx/dice_success.wav';
	import failSFX from '$lib/assets/audios/sfx/dice_fail.wav';
	import { browser } from '$app/environment';

	const diceImgs = [dice1Img, dice2Img, dice3Img, dice4Img, dice5Img, dice6Img];
	let dc = $state<number | null>(null);
	let rolled = $state(false);
	let rolling = $state(false);
	let dice1 = $state(0);
	let dice2 = $state(0);
	let total = $state(0);
	let success = $state(false);
	let dice1Path = $state('');
	let dice2Path = $state('');

	function rollDices() {
		dc = randomDC();
		const rollDC = dc;
		rolled = false;
		rolling = true;

		[dice1, dice2, total] = randomDiceValue();
		success = total >= rollDC;
		dice1Path = diceImgs[dice1 - 1];
		dice2Path = diceImgs[dice2 - 1];

		if (browser) {
			const audio = new Audio(success ? successSFX : failSFX);
			audio.volume = 0.3;
			audio.play();
		}

		setTimeout(() => {
			rolling = false;
			rolled = true;
		}, 1000);
	}
</script>

<div class="container">
	<p class="label">Test your luck</p>

	{#if dc !== null}
		<p class="dc-display">DC <span class="dc-num">{dc}</span></p>
	{/if}

	{#if rolling}
		<div class="placeholder rolling">
			<span>Rolling...</span>
		</div>
	{:else if rolled}
		<div class="result-block">
			<img class="flare" alt="" src={success ? successImg : failureImg} />
			<span class="outcome-text" class:success class:failure={!success}>
				{success ? 'CHECK SUCCESS' : 'CHECK FAILURE'}
			</span>
			<div class="dice-row">
				<img class="die" alt="dice1" src={dice1Path} />
				<img class="die" alt="dice2" src={dice2Path} />
			</div>
			<p class="totals">
				<span class="total-num">{total}</span>
			</p>
		</div>
	{:else}
		<div class="placeholder">
			<span>Click the dices to roll... </span>
		</div>
	{/if}

	<button class="roll-btn" onclick={rollDices} disabled={rolling}>
		<img src={rollDiceImg} alt="roll" />
	</button>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		padding: 24px;
		font-family: 'Courier New', Courier, monospace;
		color: #e8e2d4;
	}

	.label {
		font-size: 1.5rem;
		letter-spacing: 0.25em;
		text-transform: uppercase;
		margin: 0;
	}

	.dc-display {
		margin: 0;
		font-size: 2rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
	}

	.dc-display .dc-num {
		font-size: 2rem;
		font-weight: 700;
		color: #e8e2d4;
	}

	.result-block {
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		padding: 90px 24px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		background: rgba(0, 0, 0, 0.25);
		min-width: 500px;
		animation: pop 0.25s ease-out;
	}

	.outcome-text {
		font-size: 1rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		font-weight: 700;
		position: relative;
		z-index: 1;
		text-shadow:
			0 0 8px rgba(0, 0, 0, 0.8),
			0 2px 4px rgba(0, 0, 0, 0.9);
	}

	.outcome-text.success {
		color: #7fff7f;
	}

	.outcome-text.failure {
		color: #ff7f7f;
	}

	.flare {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.9;
		z-index: 0;
		animation: fadeIn 0.6s ease-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 0.9;
		}
	}

	.dice-row {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
		position: relative;
		z-index: 1;
	}

	.die {
		width: 80px;
		height: 80px;
		object-fit: contain;
	}

	.totals {
		margin: 0;
		position: relative;
		z-index: 1;
	}

	.total-num {
		font-size: 2rem;
		font-weight: 700;
		color: #ffffff;
		text-shadow:
			0 0 8px rgba(0, 0, 0, 0.8),
			0 2px 4px rgba(0, 0, 0, 0.9);
	}

	.placeholder {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 200px;
		padding: 16px 24px;
		border: 1px dashed rgba(255, 255, 255, 0.15);
		border-radius: 8px;
		font-size: 1.5rem;
		letter-spacing: 0.1em;
	}

	.placeholder.rolling {
		animation: pulse 0.8s ease-in-out infinite;
		opacity: 0.6;
	}

	.roll-btn {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		width: 80px;
		transition:
			transform 0.15s ease,
			filter 0.15s ease;
	}

	.roll-btn:disabled {
		cursor: not-allowed;
		filter: brightness(0.5);
	}

	.roll-btn:not(:disabled):hover {
		transform: scale(1.08);
		filter: brightness(1.2);
	}

	.roll-btn:not(:disabled):active {
		transform: scale(0.95);
	}

	.roll-btn img {
		width: 100%;
		height: auto;
		display: block;
	}

	@keyframes pop {
		0% {
			transform: scale(0.92);
			opacity: 0;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 0.4;
		}
		50% {
			opacity: 0.8;
		}
	}
</style>
