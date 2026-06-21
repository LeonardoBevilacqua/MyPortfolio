<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		header?: 'h2' | 'h3';
		class?: string;
	}
	let { children, header = 'h2', class: className }: Props = $props();
	const defaultClass =
		'dark:text-dark-10 text-light-10 uppercase border-b-2 border-solid dark:border-b-dark-10 border-b-light-10';
</script>

{#if header === 'h2'}
	<h2 class={[defaultClass, 'text-2xl font-semibold', className]}>
		{@render children()}
	</h2>
{:else}
	<h3 class={[defaultClass, 'text-lg font-bold', className]}>
		{@render children()}
	</h3>
{/if}
