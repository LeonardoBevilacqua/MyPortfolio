<script lang="ts">
	import { page } from '$app/stores';
	import Section from '$lib/components/global/Section.svelte';
	import type { ProjectType } from '$lib/data/Project.type';
	import Projects from '$lib/data/Projects.json';
	import { t } from '$lib/i18n/Translation';

	const id = $page.params.id;

	let project: ProjectType | undefined = Projects.find((project: ProjectType) => project.id === id);
</script>

{#if project}
	<Section title={$t(`project.${project.id}.name`)}>
		<div class="pt-3 project">
			{#each project.content as content, index (index)}
				{#if content.text}
					<p class="text-lg leading-7 mb-3 mx-auto">
						{@html $t(`project.${project.id}.paragraph-${index}`)}
					</p>
				{:else if content.image}
					<img
						class="mb-3 rounded-md mx-auto"
						src={content.image}
						alt={$t(`project.${project.id}.paragraph-${index}`)}
					/>
				{:else if content.video}
					<iframe
						class="mb-3 w-full lg:w-9/12 h-96 rounded-md mx-auto"
						src={content.video}
						title={$t(`project.${project.id}.paragraph-${index}`)}
						frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
				{/if}
				{#if content.description}
					<i class="mb-3 text-center block mx-auto"
						>{$t(`project.${project.id}.paragraph-${index}`)}</i
					>
				{/if}
			{/each}
		</div>
	</Section>
{/if}

<style global>
	.project > p > i,
	.project > p > a,
	.project > p > b {
		@apply text-light-10 dark:text-dark-10;
	}

	.project > p > b {
		@apply font-bold;
	}
</style>
