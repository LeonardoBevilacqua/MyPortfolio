<script lang="ts">
	import { page } from '$app/stores';
	import Section from '$lib/components/global/Section.svelte';
	import { ProjectStore } from '$lib/store/Project.store';

	const id = $page.params.id;

	let project = $ProjectStore.find((project) => project.id === id);
</script>

{#if project}
	<Section title={project.name}>
		<!-- header -->
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
	</Section>
{/if}
