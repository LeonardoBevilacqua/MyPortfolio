<script lang="ts">
	import type { ExperienceType } from '$lib/data/Experience.type';

	export let experience: ExperienceType;
</script>

<div class="bg-light-30 dark:bg-dark-30 text-light-default dark:text-dark-default p-3 shadow-lg">
	<h3 class="font-bold text-xl md:text-2xl text-light-10 dark:text-dark-10">{experience.title}</h3>
	<h4 class="font-semibold text-lg md:text-xl">
		{experience.subtitle}, {experience.start} - {experience.end ? experience.end : 'Atualmente'}
	</h4>
	{#each experience.descriptions as description, index (index)}
		<p class="my-3 md:text-lg">{description}</p>
	{/each}
</div>
