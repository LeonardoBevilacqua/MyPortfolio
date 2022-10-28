<script>
	import { page } from '$app/stores';
</script>

<div class="flex">
	<nav
		class="p-5 bg-light-30 dark:bg-dark-30 text-dark-default dark:text-dark-default inline-flex gap-5 m-auto justify-center rounded-3xl text-xl md:text-2xl"
	>
		<a sveltekit:noscroll sveltekit:prefetch class:hidden={$page.url.pathname === '/'} href="/#main">Competências</a>
		<a
			sveltekit:noscroll sveltekit:prefetch
			class:hidden={$page.url.pathname === '/experience'}
			href="/experience#main">Experiências</a
		>
		<a sveltekit:noscroll sveltekit:prefetch class:hidden={$page.url.pathname === '/portfolio'} href="/portfolio#main"
			>Portfólio</a
		>
	</nav>
</div>
