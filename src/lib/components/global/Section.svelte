<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	export let title: string;
</script>

<section>
	<h2
		in:fly={{ delay: 150 }}
		out:fade={{ duration: 150 }}
		class="text-light-10 dark:text-dark-10 uppercase font-semibold text-2xl tracking-wide border-b-2 border-light-10 dark:border-dark-10"
	>
		{title}
	</h2>
	<div in:fly={{ x: 200, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</div>
</section>
