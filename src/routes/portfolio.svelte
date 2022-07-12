<script lang="ts">
	import Section from '$lib/components/global/Section.svelte';
	import ProjectCard from '$lib/components/portfolio/ProjectCard.svelte';
	import { ProjectStore } from '$lib/store/Project.store';
</script>

<Section title="Portfólio">
	<div class="pt-3 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
		{#each $ProjectStore as project, index (index)}
			<ProjectCard {project} />
		{/each}
	</div>
</Section>
