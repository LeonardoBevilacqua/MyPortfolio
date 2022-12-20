<script>
	import { page } from '$app/stores';
</script>

<div class="flex">
	<nav
		class="p-5 bg-light-30 dark:bg-dark-30 text-dark-default dark:text-dark-default inline-flex gap-5 m-auto justify-center rounded-3xl text-xl md:text-2xl"
	>
		<a data-sveltekit-preload-data class:hidden={$page.url.pathname === '/'} href="/#main">Competências</a>
		<a
			data-sveltekit-preload-data
			class:hidden={$page.url.pathname === '/experience'}
			href="/experience#main">Experiências</a
		>
		<a data-sveltekit-preload-data class:hidden={$page.url.pathname === '/portfolio'} href="/portfolio#main"
			>Portfólio</a
		>
        <!-- <button on:click={generateCurriculum}>Currículo</button> -->
	</nav>
</div>
