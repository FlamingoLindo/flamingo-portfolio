<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import portraitFrame from '$lib/assets/images/portraitframe.png';
	import dialogFrame from '$lib/assets/images/dialog_panel.png';
	import portraitShivers from '$lib/assets/images/dialogs/portrait_shivers.png';
	import portraitConcept from '$lib/assets/images/dialogs/portrait_conceptualization.png';
	import portraitKim from '$lib/assets/images/dialogs/portrait_kitsuragi.png';
	import portraitAlain from '$lib/assets/images/dialogs/portrait_alain.png';
	import portraitEugene from '$lib/assets/images/dialogs/portrait_eugene.png';
	import portraitFatAngus from '$lib/assets/images/dialogs/portrait_fat-angus.png';
	import portraitGlen from '$lib/assets/images/dialogs/portrait_glen.png';
	import portraitRuby from '$lib/assets/images/dialogs/portrait_ruby.png';
	import portraitShanky from '$lib/assets/images/dialogs/portrait_shanky.png';
	import portraitTheo from '$lib/assets/images/dialogs/portrait_theo.png';
	import portraitTitus from '$lib/assets/images/dialogs/portrait_titus.png';
	import portraitManana from '$lib/assets/images/dialogs/portrait_manana.png';
	import portraitGardner from '$lib/assets/images/dialogs/portrait_gardener.png';
	import portraitEvrart from '$lib/assets/images/dialogs/portrait_evrart.png';
	import portraitMeasurehead from '$lib/assets/images/dialogs/portrait_measurehead.png';
	import portraitJoyce from '$lib/assets/images/dialogs/portrait_joyce.png';
	import portraitSoona from '$lib/assets/images/dialogs/portrait_soona.png';
	import portraitTiago from '$lib/assets/images/dialogs/portrait_tiago.png';
	import portraitAcele from '$lib/assets/images/dialogs/portrait_acele.png';
	import portraitAndre from '$lib/assets/images/dialogs/portrait_andre.png';
	import portraitEggHead from '$lib/assets/images/dialogs/portrait_egg-head.png';
	import portraitNoid from '$lib/assets/images/dialogs/portrait_noid.png';
	import portraitNoveltyDicemaker from '$lib/assets/images/dialogs/portrait_dicemaker.png';
	import portraitCuno from '$lib/assets/images/dialogs/portrait_cuno.png';
	import portraitCunoesse from '$lib/assets/images/dialogs/portrait_cunoesse.png';
	import portraitFuckTheWorld from '$lib/assets/images/dialogs/portrait_fuck_the_world.png';
	import portraitKlaasje from '$lib/assets/images/dialogs/portrait_klaasje.png';
	import portraitPissfart from '$lib/assets/images/dialogs/portrait_pissfart.png';
	import portraitDoloresDei from '$lib/assets/images/dialogs/portrait_dolores_dei.png';
	import portraitYouObscured from '$lib/assets/images/dialogs/portrait_you_obscured.png';
	import portraitHorrificNecktie from '$lib/assets/images/dialogs/portrait_horrific_necktie.png';
	import portraitLogic from '$lib/assets/images/dialogs/portrait_logic.png';
	import portraitEncyclopedia from '$lib/assets/images/dialogs/portrait_encyclopedia.png';
	import portraitRhetoric from '$lib/assets/images/dialogs/portrait_rhetoric.png';
	import portraitDrama from '$lib/assets/images/dialogs/portrait_drama_rank1.png';
	import portraitVisualCalculus from '$lib/assets/images/dialogs/portrait_visual_calculus.png';
	import portraitVolition from '$lib/assets/images/dialogs/portrait_volition.png';
	import portraitInlandEmpire from '$lib/assets/images/dialogs/portrait_inland-empire.png';
	import portraitEmpathy from '$lib/assets/images/dialogs/portrait_empathy.png';
	import portraitAuthority from '$lib/assets/images/dialogs/portrait_authority.png';
	import portraitEspritDeCorps from '$lib/assets/images/dialogs/portrait_esprit-de-Corps.png';
	import portraitSuggestion from '$lib/assets/images/dialogs/portrait_suggestion.png';
	import portraitEndurance from '$lib/assets/images/dialogs/portrait_endurance.png';
	import portraitPainThreshold from '$lib/assets/images/dialogs/portrait_pain_threshold.png';
	import portraitPhysicalInstrument from '$lib/assets/images/dialogs/portrait_physical_instrument.png';
	import portraitElectrochemistry from '$lib/assets/images/dialogs/portrait_electrochemistry.png';
	import portraitHalfLight from '$lib/assets/images/dialogs/portrait_half_light.png';
	import portraitHandEyeCoordination from '$lib/assets/images/dialogs/portrait_hand_eye_coordination.png';
	import portraitPerception from '$lib/assets/images/dialogs/portrait_perception.png';
	import portraitReactionSpeed from '$lib/assets/images/dialogs/portrait_reaction_speed.png';
	import portraitSavoirFaire from '$lib/assets/images/dialogs/portrait_savoir_faire.png';
	import portraitInterfacing from '$lib/assets/images/dialogs/portrait_interfacing.png';
	import portraitComposure from '$lib/assets/images/dialogs/portrait_composure.png';

	import internalizeBtnENG from '$lib/assets/images/dialogs/button_internalize.png';
	import internalizeBtnBR from '$lib/assets/images/dialogs/button_internalize-pt-BR.png';
	import clickSFX from '$lib/assets/audios/sfx/click.wav';
	import type { TDialog } from './dialogs';
	import { getLocale } from '$lib/paraglide/runtime';

	const lang = getLocale();

	let { showing, dialog }: { showing: boolean; dialog: TDialog } = $props();

	const portraitMap: Record<string, string> = {
		SHIVER: portraitShivers,
		CONCEPTUALIZATION: portraitConcept,
		'KIM KITSURAGI': portraitKim,
		ALAIN: portraitAlain,
		EUGENE: portraitEugene,
		'FAT ANGUS': portraitFatAngus,
		GLEN: portraitGlen,
		RUBY: portraitRuby,
		SHANKY: portraitShanky,
		THEO: portraitTheo,
		'TITUS HARDIE': portraitTitus,
		'CALL ME MAÑANA': portraitManana,
		'THE GARDENER': portraitGardner,
		'EVRART CLAIRE': portraitEvrart,
		MEASUREHEAD: portraitMeasurehead,
		'JOYCE MESSIER': portraitJoyce,
		SOONA: portraitSoona,
		TIAGO: portraitTiago,
		ACELE: portraitAcele,
		ANDRE: portraitAndre,
		'EGG HEAD': portraitEggHead,
		NOID: portraitNoid,
		'NOVELTY DICEMAKER': portraitNoveltyDicemaker,
		CUNO: portraitCuno,
		CUNOESSE: portraitCunoesse,
		'FUCK THE WORLD': portraitFuckTheWorld,
		KLAASJE: portraitKlaasje,
		'PISSF****T': portraitPissfart,
		'DOLORES DEI': portraitDoloresDei,
		'ANCIENT REPTILIAN BRAIN': portraitYouObscured,
		'LIMBIC SYSTEM': portraitYouObscured,
		'SPINAL CORD': portraitYouObscured,
		'HORRIFIC NECKTIE': portraitHorrificNecktie,
		LOGIC: portraitLogic,
		ENCYCLOPEDIA: portraitEncyclopedia,
		RHETORIC: portraitRhetoric,
		DRAMA: portraitDrama,
		'VISUAL CALCULUS': portraitVisualCalculus,
		VOLITION: portraitVolition,
		'INLAND EMPIRE': portraitInlandEmpire,
		EMPATHY: portraitEmpathy,
		AUTHORITY: portraitAuthority,
		'ESPRIT DE CORPS': portraitEspritDeCorps,
		SUGGESTION: portraitSuggestion,
		ENDURANCE: portraitEndurance,
		'PAIN THRESHOLD': portraitPainThreshold,
		'PHYSICAL INSTRUMENT': portraitPhysicalInstrument,
		ELECTROCHEMISTRY: portraitElectrochemistry,
		'HALF LIGHT': portraitHalfLight,
		'HAND/EYE COORDINATION': portraitHandEyeCoordination,
		PERCEPTION: portraitPerception,
		'REACTION SPEED': portraitReactionSpeed,
		'SAVOIR FAIRE': portraitSavoirFaire,
		INTERFACING: portraitInterfacing,
		COMPOSURE: portraitComposure
	};

	let currentPortrait = $derived(portraitMap[dialog?.portraitSpeaker] ?? portraitShivers);

	let audio: HTMLAudioElement | null = null;
	let audioEl = $state<HTMLAudioElement | null>(null);

	$effect(() => {
		if (!showing && audio) {
			audio.pause();
			audio.currentTime = 0;
			audio = null;
		}
	});

	function handleInternalize() {
		audioEl?.play();
		if (audio && !audio.paused) {
			audio.pause();
			audio.currentTime = 0;
			return;
		}
		if (audio) {
			audio.pause();
			audio.currentTime = 0;
		}
		audio = new Audio(dialog.audio);
		audio.play();
	}

	onMount(() => {
		for (const url of Object.values(portraitMap)) {
			const img = new Image();
			img.src = url;
		}
	});

	onDestroy(() => {
		if (audio) {
			audio.pause();
			audio = null;
		}
	});
</script>

{#if showing}
	<div class="frame-wrapper">
		<div class="dialog-wrapper">
			<div class="text-scroll">
				{#each dialog.dialog as line (line.id)}
					<p class="line">
						<span class="speaker" style="color: {line.color}">{line.speaker}</span> — {line.paragraph}
					</p>
				{/each}
			</div>
			<img
				loading="lazy"
				decoding="async"
				src={dialogFrame}
				alt="dialog-frame"
				class="dialog-img"
			/>
		</div>

		<div class="internalize-btn">
			<audio bind:this={audioEl} src={clickSFX}></audio>
			{#if lang === 'en'}
				<button onclick={handleInternalize}>
					<img loading="lazy" decoding="async" src={internalizeBtnENG} alt="internalize" />
				</button>
			{:else}
				<button onclick={handleInternalize}>
					<img loading="lazy" decoding="async" src={internalizeBtnBR} alt="internalize" />
				</button>
			{/if}
		</div>

		<div class="portrait-wrapper">
			<div class="portrait-animator">
				<img decoding="async" src={portraitFrame} alt="por-frame" class="portrait" />
				<img decoding="async" src={currentPortrait} alt="portrait" class="portrait-inner" />
			</div>
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

	@keyframes jiggle-btn {
		0% {
			transform: translateX(-50%);
		}
		15% {
			transform: translateX(calc(-50% - 8px));
		}
		30% {
			transform: translateX(calc(-50% + 7px));
		}
		45% {
			transform: translateX(calc(-50% - 5px));
		}
		60% {
			transform: translateX(calc(-50% + 4px));
		}
		75% {
			transform: translateX(calc(-50% - 2px));
		}
		90% {
			transform: translateX(calc(-50% + 1px));
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.frame-wrapper {
		position: relative;
		width: fit-content;
		height: 100vh;
	}

	.dialog-wrapper {
		position: relative;
		height: 100%;
		width: fit-content;
		animation: jiggle 0.5s ease-out;
	}

	.dialog-img {
		height: 100%;
		display: block;
	}

	.text-scroll {
		font-family: 'SinaNova-Medium';
		position: absolute;
		top: 10%;
		left: 7%;
		right: 5%;
		bottom: 10%;
		overflow-y: auto;
		z-index: 2;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-right: 0.5rem;
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	.line {
		font-size: 1.2rem;
		line-height: 1.5;
		margin: 0;
		color: white;
	}

	.speaker {
		font-weight: bold;
		letter-spacing: 0.05em;
	}

	.internalize-btn {
		position: absolute;
		bottom: 3%;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
		animation: jiggle-btn 0.5s ease-out;

		button {
			background: none;
			border: none;
			padding: 0;

			img {
				display: block;
				width: 250px;
			}
		}
	}

	.portrait-wrapper {
		position: absolute;
		top: 38%;
		left: -200px;
		transform: translateY(-50%);
		z-index: 1;
	}

	.portrait-animator {
		position: relative;
		animation: jiggle 0.5s ease-out;
	}

	.portrait {
		display: block;
		width: 230px;
		height: auto;
	}

	.portrait-inner {
		position: absolute;
		top: 48%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 80%;
		height: 80%;
		z-index: 2;
	}
</style>
