<script lang="ts">
	import Section from '$lib/components/global/Section.svelte';
	import ProjectCard from '$lib/components/portfolio/ProjectCard.svelte';
	import Projects from '$lib/data/Projects.json';
	import { t } from '$lib/i18n/Translation';
</script>

<Section title={$t('interface.portfolio')}>
	<div class="pt-3 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
		{#each Projects as project, index (index)}
			<ProjectCard {project} />
		{/each}
	</div>
</Section>
