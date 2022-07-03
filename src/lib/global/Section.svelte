<script lang="ts">
	export let title: string;
</script>

<section class="flex flex-col">
	<h2
		class="text-light-10 dark:text-dark-10 uppercase font-semibold text-2xl tracking-wide border-b-2 border-light-10 dark:border-dark-10"
	>
		{title}
	</h2>
	<slot />
</section>
