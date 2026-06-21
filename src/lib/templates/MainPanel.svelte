<script lang="ts">
	let { children } = $props();
</script>

<main
	style="grid-area: rightPanelBody;"
	class="rounded-lg p-2 dark:bg-dark-30 bg-light-30 border-8 border-solid dark:border-dark-30 border-light-30 overflow-auto"
>
	{@render children()}
</main>
