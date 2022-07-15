<script>
	import { page } from '$app/stores';
</script>

<div class="flex">
	<nav
		class="mb-3 p-5 bg-light-30 dark:bg-dark-30 inline-flex gap-5 m-auto justify-center rounded-3xl text-2xl"
	>
		<a sveltekit:noscroll class:hidden={$page.url.pathname === '/'} href="/#main">Competências</a>
		<a
			sveltekit:noscroll
			class:hidden={$page.url.pathname === '/experience'}
			href="/experience#main">Experiências</a
		>
		<a sveltekit:noscroll class:hidden={$page.url.pathname === '/portfolio'} href="/portfolio#main"
			>Portfólio</a
		>
	</nav>
</div>
