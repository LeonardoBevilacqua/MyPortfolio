<script lang="ts">
	import SectionHeader from '$lib/atoms/SectionHeader.svelte';
	import { experienceData, type Experience } from '$lib/lang/experience-data';
	import { interfaceData } from '$lib/lang/interface-data';
	import { type LangKey, getLangKey } from '$lib/lang/lang.utils';
	import Animate from '$lib/templates/Animate.svelte';
	import type { LayoutProps } from '../$types';

	let { params }: LayoutProps = $props();
	const langKey: LangKey = $state(getLangKey(params.lang));
	const { experience } = interfaceData[langKey];
	const experiences = experienceData[langKey];
</script>

{#snippet experienceCard({ experience, period, descriptions }: Experience, row: number)}
	<section
		class="dark:bg-dark-60 bg-light-60 rounded-3xl p-3 col-span-3 {row % 2
			? 'col-start-1'
			: 'col-start-5'}"
		style:grid-row={row}
	>
		<h3 class="dark:text-dark-10 text-light-10 text-xl font-bold">{experience}</h3>
		<h4 class="dark:text-white text-white text-lg font-bold border-b-2">{period}</h4>
		<div class="flex flex-col gap-3 mt-3">
			{#each descriptions as description, index (index)}
				<p class="dark:text-white text-white">{description}</p>
			{/each}
		</div>
	</section>
{/snippet}

<Animate>
	<SectionHeader class="mb-4">{experience}</SectionHeader>
	<article class="@tablet:grid grid-cols-7">
		{#each experiences as experience, index (index)}
			{@const row = index + 1}
			{@const right = !(row % 2)}
			{@const isFirst = index === 0}
			{@const isLast = row === experiences.length}
			{@render experienceCard(experience, row)}
			<div class="relative content-center col-4">
				<div
					class="dark:bg-dark-10 bg-light-10 h-12 w-12 rounded-full mx-auto my-12 line lines lines-h {right &&
						'lines-h-r'} lines-v after:top-0 after:h-full {isFirst &&
						'tablet:after:top-1/2 tablet:after:h-1/2'} {isLast &&
						'hidden tablet:block lines-v-t'} dark:before:bg-dark-10 before:bg-dark-10 tablet:before:w-1/2 dark:after:bg-dark-10 after:bg-dark-10"
				></div>
			</div>
		{/each}
	</article>
</Animate>

<style>
	.lines::before,
	.lines::after {
		content: '';
		position: absolute;
	}
	.lines-h::before {
		height: 0.25rem;
		left: 0;
		translate: 0 -50%;
		top: 50%;
	}
	.lines-h-r::before {
		right: 0;
		left: auto;
	}
	.lines-v::after {
		width: 0.25rem;
		left: 50%;
		translate: -50%;
	}
	.lines-v-t::after {
		top: 0;
		height: 50%;
	}
</style>
