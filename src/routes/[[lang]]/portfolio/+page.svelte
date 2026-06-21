<script lang="ts">
	import { resolve } from '$app/paths';
	import SectionHeader from '$lib/atoms/SectionHeader.svelte';
	import { interfaceData } from '$lib/lang/interface-data';
	import { getLangKey, getLangRoute, type LangKey } from '$lib/lang/lang.utils';
	import { projectSummaryData, type ProjectSummary } from '$lib/lang/project-data';
	import Animate from '$lib/templates/Animate.svelte';
	import type { PageProps } from '../$types';

	let { params }: PageProps = $props();
	const langRoute = getLangRoute(params.lang);
	const langKey: LangKey = $state(getLangKey(params.lang));
	const { portfolio, seeMore } = interfaceData[langKey];
	const projects: ProjectSummary[] = projectSummaryData[langKey];
</script>

{#snippet projectCard(
	{ title, subtitle, descriptions, resource }: ProjectSummary,
	reverse: boolean
)}
	{@const { link, imgLink } = resource}
	<section
		class="dark:bg-dark-60 bg-light-60 dark:text-white text-white rounded-lg p-2 gap-2 grid @min-[720px]:grid-cols-2 @min-[720px]:grid-rows-[auto_1fr] @min-desktop:grid-cols-1 @min-desktop:grid-rows-[repeat(3,auto)]"
	>
		<div class="row-auto {reverse && '@min-[720px]:col-start-2 @min-desktop:col-start-1'}">
			<h3 class="dark:text-dark-10 text-light-10 text-lg font-bold">{title}</h3>
			<h4 class="font-medium mb-2">{subtitle}</h4>
		</div>
		<div
			class="hidden @min-[720px]:block @min-[720px]:row-span-2 @min-desktop:row-span-1 {reverse &&
				'@min-[720px]:col-start-1 @min-[720px]:row-start-1 @min-desktop:row-start-2'}"
		>
			<img src={imgLink} class="max-w-full h-auto rounded-lg" alt={title} />
		</div>
		<div class="flex flex-col">
			{#each descriptions as description, index (index)}
				<p>{description}</p>
			{/each}
			<a
				href={resolve(langRoute + link)}
				class="dark:bg-dark-30 dark:hover:bg-dark-10 bg-light-30 text-white hover:bg-light-10 transition-colors duration-300 rounded-lg p-3 inline-block m-auto @min-[720px]:mb-0 @min-desktop:mt-2 @max-[720px]:mt-2"
				>{seeMore}</a
			>
		</div>
	</section>
{/snippet}

<Animate>
	<SectionHeader class="mb-4">{portfolio}</SectionHeader>
	<article class="flex flex-col gap-4">
		{#each projects as project, index (index)}
			{@const reverse = !(index % 2)}
			{@render projectCard(project, reverse)}
		{/each}
	</article>
</Animate>
