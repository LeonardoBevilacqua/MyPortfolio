<script lang="ts">
	import type { ExperienceType } from '$lib/data/Experience.type';
	import { t } from '$lib/i18n/Translation';

	export let experience: ExperienceType;
</script>

<div class="bg-light-30 dark:bg-dark-30 text-light-default dark:text-dark-default p-3 shadow-lg">
	<h3 class="font-bold text-xl md:text-2xl text-light-10 dark:text-dark-10">{$t(`experience.${experience.id}.title`)}</h3>
	<h4 class="font-semibold text-lg md:text-xl">
		{$t(`experience.${experience.id}.subtitle`)}, {experience.start} - {experience.end ? experience.end : $t('interface.currently')}
	</h4>
	{#each {length: experience.descriptionLength} as _, index (index)}
		<p class="my-3 md:text-lg">{$t(`experience.${experience.id}.description-${index}`)}</p>
	{/each}
</div>
