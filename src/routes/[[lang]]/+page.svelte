<script lang="ts">
	import SectionHeader from '$lib/atoms/SectionHeader.svelte';
	import { interfaceData } from '$lib/lang/interface-data';
	import { type LangKey, getLangKey } from '$lib/lang/lang.utils';
	import Animate from '$lib/templates/Animate.svelte';
	import type { LayoutProps } from '../$types';

	type Skill = { src: string; title: string };
	type SkillType = { label: string; skills: Skill[] };

	let { params }: LayoutProps = $props();
	const langKey: LangKey = $state(getLangKey(params.lang));
	const { skillTitle, backend, frontend, database, games, design } = interfaceData[langKey];

	const skillTypes: SkillType[] = [
		{
			label: backend,
			skills: [
				{ src: 'node-js', title: 'Node JS' },
				{ src: 'spring-boot', title: 'Spring Framework' }
			]
		},
		{
			label: frontend,
			skills: [
				{ src: 'angular', title: 'Angular' },
				{ src: 'svelte', title: 'Svelte' },
				{ src: 'tailwind-css', title: 'Tailwind CSS' },
				{ src: 'bootstrap-logo', title: 'Bootstrap CSS' }
			]
		},
		{
			label: database,
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
			label: games,
			skills: [{ src: 'godot', title: 'Godot engine' }]
		},
		{
			label: design,
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

<Animate>
	<SectionHeader class="mb-4">{skillTitle}</SectionHeader>
	{#each skillTypes as skill (skill.label)}
		<SectionHeader header="h3" class="mb-4">{skill.label}</SectionHeader>
		<div class="grid @tablet:grid-cols-2 gap-4 mb-4">
			{#each skill.skills as skillInfo (skillInfo.src)}
				{@render skillCard(skillInfo.src, skillInfo.title)}
			{/each}
		</div>
	{/each}
</Animate>
