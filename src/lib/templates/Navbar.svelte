<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	type Routes = '/' | '/experiences' | '/portfolio';

	function isActive(route: Routes): boolean {
		if (route === '/') return page.url.pathname === route;
		return page.url.pathname.replace('/', '').includes(route.replace('/', ''));
	}
</script>

{#snippet link(route: Routes, label: string)}
	<a
		href={resolve(route)}
		class={[
			'text-2xl p-2 border border-solid border-transparent rounded-lg hover:text-dark-10 hover:border-dark-10',
			isActive(route) && 'bg-dark-10 hover:text-white hover:border-white'
		]}>{label}</a
	>
{/snippet}

<nav
	id="right-panel-header"
	class="rounded-lg p-5 bg-dark-30 text-white flex gap-3 justify-center items-center flex-wrap"
>
	{@render link('/', 'Competências')}
	{@render link('/experiences', 'Experiências')}
	{@render link('/portfolio', 'Portfólio')}
</nav>

<style>
	#right-panel-header {
		grid-area: rightPanelHeader;
	}
</style>
