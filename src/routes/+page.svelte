<script>
	import BackGround from '$lib/components/BackGround/BackGround.svelte';
	import MenuOptions from '$lib/components/MenuOptions/MenuOptions.svelte';
</script>

<div class="menu-container">
	<MenuOptions />
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
</style>
