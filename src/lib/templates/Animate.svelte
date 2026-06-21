<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	let { children } = $props();
</script>

<div in:fly={{ x: 720, delay: 150 }} out:fade={{ duration: 150 }}>
	{@render children()}
</div>
