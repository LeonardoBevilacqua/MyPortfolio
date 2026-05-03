<script lang="ts">
	import './layout.css';
	import Footer from '$lib/templates/Footer.svelte';
	import LeftPanel from '$lib/templates/LeftPanel.svelte';
	import MainPanel from '$lib/templates/MainPanel.svelte';
	import Navbar from '$lib/templates/Navbar.svelte';
	import type { LayoutProps } from './$types';

	let props: LayoutProps = $props();
	let { children } = props;
</script>

<LeftPanel {...props} />
<Navbar {...props} />
<MainPanel>
	{@render children()}
</MainPanel>
<Footer {...props} />
