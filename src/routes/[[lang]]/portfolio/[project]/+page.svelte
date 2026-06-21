<script lang="ts">
	import SectionHeader from '$lib/atoms/SectionHeader.svelte';
	import { type LangKey, getLangKey } from '$lib/lang/lang.utils';
	import {
		projectDetailsData,
		type ProjectContent,
		type ProjectDetails
	} from '$lib/lang/project-data';
	import Animate from '$lib/templates/Animate.svelte';
	import type { PageProps } from './$types';

	let { params }: PageProps = $props();
	const langKey: LangKey = $state(getLangKey(params.lang));
	const project: ProjectDetails = projectDetailsData[langKey][params.project];
</script>

{#snippet textContent({ text }: ProjectContent)}
	{#if text}
		<!-- eslint-disable svelte/no-at-html-tags - disbled because I control the data -->
		<p class="text-content text-lg leading-7 mb-2 mx-auto">{@html text}</p>
	{/if}
{/snippet}

{#snippet imageContent({ image, description }: ProjectContent)}
	{#if image}
		<img class="mb-2 rounded-md mx-auto" src={image} alt={description} />
	{/if}
{/snippet}

{#snippet videoContent({ video, description }: ProjectContent)}
	{#if video}
		<iframe
			class="mb-2 w-full lg:w-9/12 h-96 rounded-md mx-auto"
			src={video}
			title={description}
			frameborder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	{/if}
{/snippet}

{#snippet descriptionContent({ description }: ProjectContent)}
	{#if description}
		<i class="mb-2 text-center block mx-auto">{description}</i>
	{/if}
{/snippet}

{#snippet contentBody(contentList: ProjectContent[])}
	{#each contentList as content, index (index)}
		{@render textContent(content)}
		{@render imageContent(content)}
		{@render videoContent(content)}
		{@render descriptionContent(content)}
	{/each}
{/snippet}

<Animate>
	<SectionHeader class="mb-4">{project.title}</SectionHeader>

	<article class="bg-dark-60 text-white p-2 rounded-lg">
		{@render contentBody(project.content)}
	</article>
</Animate>
