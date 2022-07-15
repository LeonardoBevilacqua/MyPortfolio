<script lang="ts">
	import { page } from '$app/stores';
    import { base } from '$app/paths';
	import Section from '$lib/components/global/Section.svelte';
	import { ProjectStore } from '$lib/store/Project.store';

	const id = $page.params.id;

	let project = $ProjectStore.find((project) => project.id === id);
</script>

{#if project}
	<Section title={project.name}>
		<div class="pt-3 project">
			{#each project.content as content, index (index)}
				{#if content.text}
					<p class="text-lg leading-7 mb-3">{@html content.text}</p>
				{:else if content.image}
					<img
						class="mb-3 rounded-md"
						src={base + content.image}
						alt={content.description}
					/>
				{:else if content.video}
					<iframe
						class="mb-3 w-full h-96 rounded-md"
						src={content.video}
						alt={content.description}
						title={content.description}
						frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
				{/if}
				{#if content.description}
					<i class="mb-3 text-center block">{content.description}</i>
				{/if}
			{/each}
		</div>
	</Section>
{/if}

<style global>
	.project > p > i,
    .project > p > a,
    .project > p > b {
		@apply text-light-10 dark:text-dark-10
	}

    .project > p > b {
        @apply font-bold
    }
</style>
