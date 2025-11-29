<script lang="ts">
	import SectionHeader from '$lib/atoms/SectionHeader.svelte';
	type Skill = { src: string; title: string };
	type SkillType = { label: string; skills: Skill[] };

	const skillTypes: SkillType[] = [
		{
			label: 'Desenvolvimento Backend',
			skills: [
				{ src: 'node-js', title: 'Node JS' },
				{ src: 'spring-boot', title: 'Spring Framework' }
			]
		},
		{
			label: 'Desenvolvimento Frontend',
			skills: [
				{ src: 'angular', title: 'Angular' },
				{ src: 'svelte', title: 'Svelte' },
				{ src: 'tailwind-css', title: 'Tailwind CSS' },
				{ src: 'bootstrap-logo', title: 'Bootstrap CSS' }
			]
		},
		{
			label: 'Banco de dados',
			skills: [
				{ src: 'postgres', title: 'PostgreSQL' },
				{ src: 'mongodb', title: 'MongoDB' }
			]
		},
		{
			label: 'Cloud & Devops',
			skills: [
				{ src: 'aws', title: 'Amazon Web Services' },
				{ src: 'docker', title: 'Docker' }
			]
		},
		{
			label: 'Desenvolvimento de jogos',
			skills: [{ src: 'godot', title: 'Godot engine' }]
		},
		{
			label: 'Design & Prototipagem',
			skills: [{ src: 'figma', title: 'Figma' }]
		}
	];
</script>

{#snippet skillCard(src: string, title: string)}
	<div class="bg-dark-60 inline-flex flex-col p-3 text-center rounded-3xl text-white grow">
		<img src={`logos/${src}.svg`} alt={`${title} logo`} class="m-auto" />
		<span class="mt-1 inline-block text-lg">{title}</span>
	</div>
{/snippet}

<SectionHeader class="mb-4">Competências</SectionHeader>
{#each skillTypes as skill (skill.label)}
	<SectionHeader header="h3" class="mb-4">{skill.label}</SectionHeader>
	<div class="grid @tablet:grid-cols-2 gap-4 mb-4">
		{#each skill.skills as skillInfo (skillInfo.src)}
			{@render skillCard(skillInfo.src, skillInfo.title)}
		{/each}
	</div>
{/each}
