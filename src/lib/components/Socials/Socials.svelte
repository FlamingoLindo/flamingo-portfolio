<script lang="ts">
	import Twitch from 'virtual:icons/ph/twitch-logo-duotone';
	import Reddit from 'virtual:icons/ph/reddit-logo-duotone';
	import Linkedin from 'virtual:icons/ph/linkedin-logo-duotone';
	import Instagram from 'virtual:icons/ph/instagram-logo-duotone';
	import Steam from 'virtual:icons/ph/steam-logo-duotone';
	import Email from 'virtual:icons/ph/envelope-open-duotone';

	const socials = [
		{ id: 1, label: 'Twitch', Icon: Twitch, href: 'https://www.twitch.tv/flamingo_lindo/' },
		{ id: 2, label: 'Reddit', Icon: Reddit, href: 'https://www.reddit.com/user/whiterubiks/' },
		{
			id: 3,
			label: 'LinkedIn',
			Icon: Linkedin,
			href: 'https://www.linkedin.com/in/vitor-antunes-ferreira/'
		},
		{ id: 4, label: 'Instagram', Icon: Instagram, href: 'https://www.instagram.com/vitor.antfer/' },
		{ id: 5, label: 'Steam', Icon: Steam, href: 'https://steamcommunity.com/id/flamingo_lindo/' },
		{ id: 6, label: 'Email', Icon: Email, href: 'mailto:vitorantunes2003@gmail.com' }
	];
</script>

<div class="socials-list">
	{#each socials as { id, label, Icon, href }, i (id)}
		<a
			class="social-row"
			{href}
			target="_blank"
			rel="external noopener noreferrer"
			style="animation-delay: {i * 60}ms"
		>
			<span class="row-index">{String(i + 1).padStart(2, '0')}</span>
			<span class="row-icon"><Icon /></span>
			<span class="row-label">{label}</span>
			<span class="row-arrow">›</span>
		</a>
	{/each}
</div>

<style>
	.socials-list {
		display: flex;
		flex-direction: column;
		width: 95%;
		padding: 200px 0;
		margin: 0 auto;
	}

	.social-row {
		display: flex;
		align-items: center;
		gap: 14px;

		padding: 10px 20px 10px 4px;
		text-decoration: none;
		color: #d6d0c4;
		font-family: 'Courier New', Courier, monospace;
		font-size: 1rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;

		border-bottom: 1px solid #2a2826;
		background: transparent;

		opacity: 0;
		transform: translateX(-6px);
		animation: row-in 0.2s ease forwards;

		transition:
			background 0.1s ease,
			color 0.1s ease;
	}

	.social-row:first-child {
		border-top: 1px solid #2a2826;
	}

	.social-row:hover {
		background: #1e1c19;
		color: #f0ebe0;
	}

	.social-row:hover .row-arrow {
		opacity: 1;
		transform: translateX(3px);
	}

	.row-index {
		font-size: 0.7rem;
		color: #cac5be;
		min-width: 20px;
		user-select: none;
	}

	.row-icon {
		display: flex;
		align-items: center;
		font-size: 1.5rem;
		color: #a09890;
		flex-shrink: 0;
		transition: color 0.1s ease;
	}

	.social-row:hover .row-icon {
		color: #e8e2d4;
	}

	.row-label {
		flex: 1;
	}

	.row-arrow {
		font-size: 1rem;
		opacity: 0;
		color: #8a8480;
		transform: translateX(0);
		transition:
			opacity 0.1s ease,
			transform 0.1s ease;
		user-select: none;
	}

	@keyframes row-in {
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
