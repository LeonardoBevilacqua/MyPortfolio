<script>
	import LoadingPanel from '$lib/components/global/LoadingPanel.svelte';
	import { onMount } from 'svelte';
	import '../../app.css';

	let loading = true;

	onMount(() => (loading = false));
</script>

{#if loading}
	<LoadingPanel />
{/if}
<main class="grid grid-cols-3 h-screen">
    <slot />
</main>
