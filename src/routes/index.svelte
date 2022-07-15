<script lang="ts">
	import Section from '$lib/components/global/Section.svelte';
	import SkillCard from '$lib/components/skill/SkillCard.svelte';

	const skills = [
		{ title: 'Spring Framework', src: '/imgs/skills/spring-framework.png' },
		{ title: 'Angular', src: '/imgs/skills/angular.png' },
		{ title: 'PostgreSql', src: '/imgs/skills/postgresql.png' },
		{ title: 'Amazon Web Services', src: '/imgs/skills/aws.png' }
	];
</script>

<Section title="Competências">
	<div class="grid grid-cols-2 md:grid-cols-4 gap-3 m-auto mt-3 w-full">
		{#each skills as skill, index (index)}
			<SkillCard {skill} />
		{/each}
	</div>
</Section>
