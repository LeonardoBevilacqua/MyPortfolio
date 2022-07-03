<script lang="ts">
	export let title: string;
</script>

<section class="flex flex-col">
	<h2
		class="text-purple-800 dark:text-yellow-100 uppercase font-semibold text-2xl tracking-wide border-b-2 border-black"
	>
		{title}
	</h2>
	<slot />
</section>
