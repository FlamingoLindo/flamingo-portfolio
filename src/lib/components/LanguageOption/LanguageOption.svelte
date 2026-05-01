<script lang="ts">
	import brFlag from '$lib/assets/images/flags/br.webp';
	import usFlag from '$lib/assets/images/flags/us.webp';
	import { getLocale, setLocale } from '$lib/paraglide/runtime.js';

	let currentFlag = $derived(getLocale() === 'pt-br' ? brFlag : usFlag);

	function toggleLocale() {
		setLocale(getLocale() === 'pt-br' ? 'en' : 'pt-br');
	}
</script>

<button title="language" class="flag-btn" onclick={toggleLocale}>
	<img alt="language-flag" src={currentFlag} class="flag-img" />
</button>

<style lang="scss">
	.flag-btn {
		border: none;
		background: none;
		padding: 0;
		cursor: pointer;
		width: 45px;
		height: 45px;
	}

	.flag-img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		border-radius: 4px;
	}
</style>
