<script lang="ts">
	let { children } = $props();
</script>

<main
	style="grid-area: rightPanelBody;"
	class="rounded-lg p-2 bg-yellow-300 border-[0.5rem] border-solid border-yellow-300 overflow-auto"
>
	{@render children()}
</main>
