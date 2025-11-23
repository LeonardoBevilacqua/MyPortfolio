<script lang="ts">
	import './layout.css';
	import Footer from '$lib/templates/Footer.svelte';
	import LeftPanel from '$lib/templates/LeftPanel.svelte';
	import MainPanel from '$lib/templates/MainPanel.svelte';
	import Navbar from '$lib/templates/Navbar.svelte';

	// let { children } = $props();
</script>

<LeftPanel />
<Navbar />
<MainPanel />
<Footer />
<!-- {@render children()} -->
