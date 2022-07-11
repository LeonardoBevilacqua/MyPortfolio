<script lang="ts">
	import { ProjectStore } from '$lib/store/Project.store';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';

	const id = $page.params.id;

	let project = $ProjectStore.find((project) => project.id === id);
</script>

<div
	transition:fly={{ x: 200 }}
	class="col-span-2 2xl:col-span-5 bg-light-60 dark:bg-dark-60 text-dark-60 dark:text-light-60 p-3"
>
	{#if project}
		<!-- header -->
		<h2>{project.name}</h2>
		<a href="/#portfolio">Return</a>
		<!-- body -->
		{#each project.content as content, index (index)}
			{#if content.text}
				<p>{@html content.text}</p>
			{:else if content.image}
				<img src={'http://localhost:3000/' + content.image} alt={content.description} />
			{:else if content.video}
				<iframe
					src={content.video}
					alt={content.description}
					title={content.description}
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			{/if}
			{#if content.description}
				<i>{content.description}</i>
			{/if}
		{/each}
	{/if}
</div>
