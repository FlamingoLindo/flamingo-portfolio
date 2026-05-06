<script lang="ts">
	import { getLocale } from '$lib/paraglide/runtime';
	let lang = getLocale();
</script>

<div class="content">
	<div class="body">
		<div class="title-block">
			<span class="title-label"
				>{lang === 'pt-br' ? 'CRÉDITOS & AGRADECIMENTOS' : 'CREDITS & ACKNOWLEDGEMENTS'}</span
			>
			<div class="title-line"></div>
		</div>

		{#if lang === 'pt-br'}
			<p class="lead">
				Antes de tudo, a maioria das imagens e assets foram retirados do jogo
				<em>Disco Elysium</em> — todos os créditos vão para a <strong>ZA/UM</strong> e os desenvolvedores
				que criaram esta obra-prima.
			</p>
			<div class="divider"></div>
			<h3>Intenção</h3>
			<p>
				Não tenho nenhum interesse em obter benefício financeiro com esta página. Eu só queria criar
				um <strong>site de portfólio</strong> baseado em um dos meus jogos favoritos — e que alegria
				foi fazê-lo, revisitando alguns dos diálogos, personagens e a <strong>ARTE</strong>.
			</p>
			<div class="divider"></div>
			<h3>Assets</h3>
			<p>
				Como mencionado, retirei alguns assets do jogo, mas outros eu mesmo criei usando uma
				combinação dos assets do jogo. E sim — usei <strong>IA</strong> para criar o retrato meu na
				aba <em>SOBRE MIM</em>.
			</p>
			<p>
				Felizmente, o resultado não ficou parecido com o estilo de retrato de <em>Disco Elysium</em>
				— o que é bom, pois significa que todo o trabalho dos artistas do jogo continua seguro e distintamente
				deles.
			</p>
			<p>
				Para finalizar: usei IA apenas para esse retrato e para <strong>código CSS</strong>, já que
				não é meu forte.
			</p>
			<div class="divider"></div>
			<blockquote>
				Après la vie, la mort. Après la mort, la vie de nouveau.<br />
				Après le monde, le gris. Après le gris, le monde encore!
			</blockquote>
		{:else}
			<p class="lead">
				First and foremost, most of the images and assets were taken from the game
				<em>Disco Elysium</em> — all credits go to <strong>ZA/UM</strong> and the developers who made
				this masterpiece.
			</p>
			<div class="divider"></div>
			<h3>Intent</h3>
			<p>
				I do not wish to get any monetary benefit from this page. I just wanted to make a
				<strong>portfolio website</strong> based on one of my favorite games — and what a joy it was
				making this, from revisiting some of the dialogues, characters, and the
				<strong>ART</strong>.
			</p>
			<div class="divider"></div>
			<h3>Assets</h3>
			<p>
				As mentioned, I did take some assets from the game, but some I made myself using a
				combination of the game's assets. And yes — I did use <strong>AI</strong> to create the
				portrait of me in the <em>ABOUT ME</em> tab.
			</p>
			<p>
				Thankfully it did not come out looking like a <em>Disco Elysium</em> portrait style — which is
				good, because it means that all of the artists' work from this game is still safe and distinctly
				their own.
			</p>
			<p>
				To end it all: I only used AI for that portrait and for <strong>CSS-related code</strong>,
				since it's not my forte.
			</p>
			<div class="divider"></div>
			<blockquote>
				Après la vie, la mort. Après la mort, la vie de nouveau.<br />
				Après le monde, le gris. Après le gris, le monde encore!
			</blockquote>
		{/if}
	</div>
</div>

<style>
	.content {
		width: 100%;
		color: #e8e2d4;
		font-family: 'Courier New', Courier, monospace;
		font-size: 1rem;
		line-height: 1.75;
		letter-spacing: 0.04em;
	}

	.body {
		padding: 1.25rem 1.5rem 1rem;
	}

	.title-block {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.title-label {
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.3em;
		text-transform: uppercase;
		color: #c8a96e;
		white-space: nowrap;
	}

	.title-line {
		flex: 1;
		height: 1px;
		background: #c8a96e44;
	}

	.lead {
		font-style: italic;
		color: #c8b990;
		margin: 0 0 1.25rem;
		border-left: 2px solid #c8a96e88;
		padding-left: 0.9rem;
		font-size: 1rem;
		line-height: 1.7;
	}

	h3 {
		font-family: 'Courier New', Courier, monospace;
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.28em;
		text-transform: uppercase;
		color: #c8a96e;
		margin: 0 0 0.75rem;
	}

	p {
		margin: 0 0 1rem;
		color: #b8ad99;
	}

	strong {
		color: #e8e2d4;
		font-weight: 700;
	}

	em {
		color: #c8a96e;
		font-style: italic;
	}

	.divider {
		width: 100%;
		height: 1px;
		background: #c8a96e22;
		margin: 1.1rem 0;
	}

	blockquote {
		margin: 1.5rem 0 0.5rem;
		padding: 1.2rem 1.4rem;
		border: 1px solid #c8a96e33;
		background: #c8a96e08;
		color: #c8b990;
		font-style: italic;
		font-size: 1rem;
		line-height: 1.8;
		letter-spacing: 0.06em;
		text-align: center;
	}
</style>
