<script lang="ts">
	import ExperienceCard from '$lib/components/experience/ExperienceCard.svelte';
	import Section from '$lib/components/global/Section.svelte';
	import Experiences from '$lib/data/Experiences.json';
	import { t } from '$lib/i18n/Translation';

	const isOdd = (value: number) => !!(value % 2);
</script>

<Section title={$t('interface.experience')}>
	<div class="pt-3 grid xl:block gap-3">
		{#each Experiences as experience, index (index)}
			<div class="grid grid-cols-1 xl:grid-cols-3">
				<div class={isOdd(index + 1) ? 'order-1' : 'order-3'}><ExperienceCard {experience} /></div>
				<div
					class="hidden xl:flex order-2 relative lines {isOdd(index + 1)
						? 'before:left-0'
						: 'col-end-3'} {index === 0
						? 'after:h-1/2 after:top-1/2'
						: index + 1 === Experiences.length
						? 'after:h-1/2'
						: 'after:h-full'}"
				>
					<div class="bg-light-30 dark:bg-dark-30 h-12 w-12 rounded-full m-auto z-10 shadow-md" />
				</div>
			</div>
		{/each}
	</div>
</Section>

<style>
	.lines {
		@apply before:absolute
		before:bg-light-30
		before:dark:bg-dark-30
		before:h-1
		before:w-1/2
		before:top-1/2
		before:right-0
		before:-translate-y-0.5
		after:absolute
		after:bg-light-30
		after:dark:bg-dark-30
		after:w-1
		after:left-1/2
		after:-translate-x-0.5;
	}
</style>
