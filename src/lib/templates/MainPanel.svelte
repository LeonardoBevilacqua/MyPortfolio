<script lang="ts">
	let { children } = $props();
</script>

<main
	style="grid-area: rightPanelBody;"
	class="rounded-lg p-2 bg-dark-30 border-8 border-solid border-dark-30 overflow-auto"
>
	{@render children()}
</main>
