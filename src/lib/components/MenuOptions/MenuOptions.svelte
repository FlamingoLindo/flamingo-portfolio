<script lang="ts">
	import menuButton from '$lib/assets/images/main-menu-button 2.png';
	import customFeld from '$lib/assets/images/custom-feld.png';
	import * as m from '$lib/paraglide/messages';
	const options = [
		{ id: 1, text: m['About me']() },
		{ id: 2, text: m['Projects']() },
		{ id: 3, text: m['Socials']() },
		{ id: 4, text: 'Disco Elysium' },
		{ id: 5, text: m['Random Quote']() },
		{ id: 6, text: m['Dice Roll']() },
		{ id: 7, text: m['Credits']() }
	];

	let activeId: number = $state(options[0].id);
</script>

<div class="menu-wrapper">
	{#each options as option (option.id)}
		<button
			class="option-row"
			class:active={activeId === option.id}
			onclick={() => (activeId = option.id)}
		>
			{#if activeId === option.id}
				<img src={menuButton} alt="" class="option-bg" />
			{/if}
			<span class="option-text">{option.text}</span>
		</button>
	{/each}
	<img src={customFeld} alt="" class="custom-feld" />
</div>

<style lang="scss">
	@font-face {
		font-family: 'Dobra-Light';
		src: url('/fonts/Dobra-Light.otf') format('opentype');
	}
	.menu-wrapper {
		display: flex;
		flex-direction: column;
		gap: 4px;
		width: auto;
		position: relative;
		height: 100vh;
		padding-left: 1.2rem;
		justify-content: center;
	}

	.option-row {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 307px;
		height: 85px;
		background: none;
		border: none;
		padding: 0;
		z-index: 1;
		overflow: visible;
	}

	.option-bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: fill;
		z-index: 0;
	}

	.option-text {
		position: relative;
		z-index: 1;
		font-family: 'Dobra-Light';
		font-size: 40px;
		color: white;
		text-align: right;
		padding: 8px 16px;
		text-transform: uppercase;
		user-select: none;
		white-space: nowrap;
	}

	.custom-feld {
		position: absolute;
		inset: 0;
		width: 350px;
		height: 100%;
		object-fit: fill;
		object-position: left center;
		z-index: 0;
		pointer-events: none;
	}
</style>
