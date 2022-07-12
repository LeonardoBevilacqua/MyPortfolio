<script>
	import Nav from '$lib/components/global/Nav.svelte';

	import ProfilePanel from '$lib/components/profile/ProfilePanel.svelte';
	import '../app.css';
</script>

<main
	class="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-6 min-h-screen font-Oswald bg-light-60 dark:bg-dark-60 text-dark-60 dark:text-light-60"
>
	<ProfilePanel />
	<div class="col-span-2 2xl:col-span-5 p-3" id="main">
		<Nav />
		<slot />
	</div>
</main>
