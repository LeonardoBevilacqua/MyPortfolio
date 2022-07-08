<script>
	import ProfilePanel from '$lib/components/profile/ProfilePanel.svelte';
	import '../app.css';
</script>

<main class="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-6 h-screen font-Oswald">
	<ProfilePanel />
	<slot />
</main>
