<script lang="ts">
    export let className = '';
	export let h2 = false;
	export let h3 = false;
</script>

{#if h2}
	<h2 class="{className} text-2xl"><slot /></h2>
{:else if h3}
	<h3 class="{className} font-bold text-xl"><slot /></h3>
{:else}
	<h1 class="{className} font-bold text-5xl"><slot /></h1>
{/if}
