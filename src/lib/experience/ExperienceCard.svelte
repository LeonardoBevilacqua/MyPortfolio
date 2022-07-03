<script lang="ts">
	export let experience: {
		title: string;
		subtitle: string;
		start: number;
		end: number | null;
		descriptions: string[];
	};
</script>

<div class="bg-slate-300 dark:bg-slate-900 text-black dark:text-white p-3 shadow-lg">
    <h3 class="font-bold text-lg">{experience.title}</h3>
    <h4 class="font-semibold text-sm">{experience.subtitle}, {experience.start} - {experience.end ? experience.end : 'Atualmente'}</h4>
    {#each experience.descriptions as description, index (index)}
        <p class="my-3">{description}</p>
    {/each}
</div>
