<script>
	import Footer from '$lib/components/global/Footer.svelte';
	import LoadingPanel from '$lib/components/global/LoadingPanel.svelte';
	import Nav from '$lib/components/global/Nav.svelte';
	import ProfilePanel from '$lib/components/profile/ProfilePanel.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	import { page } from '$app/stores';
	import { loadTranslations, locale, defaultLocale } from '$lib/i18n/Translation';

	const { pathname } = $page.url;
	let loading = true;

	onMount(async () => {
		let initLocale = locale.get() || defaultLocale;
		await loadTranslations(initLocale, pathname);
		document.documentElement.setAttribute("lang", initLocale);
		loading = false;
	});
</script>

{#if loading}
	<LoadingPanel />
{/if}
<main
	class="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-6 min-h-screen font-Oswald bg-light-60 dark:bg-dark-60 text-dark-60 dark:text-light-60"
>
	<ProfilePanel />
	<div class="col-span-2 2xl:col-span-5 p-3 flex flex-col gap-3" id="main">
		<Nav />
		<slot />
		<Footer />
	</div>
</main>
