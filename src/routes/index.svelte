<script lang="ts">
	import Section from '$lib/components/global/Section.svelte';
	import SkillCard from '$lib/components/skill/SkillCard.svelte';
    import { SkillStore } from '$lib/store/Skill.store';

</script>

<Section title="Competências">
	<div class="grid grid-cols-2 md:grid-cols-4 gap-3 m-auto mt-3 w-full">
		{#each $SkillStore as skill, index (index)}
			<SkillCard {skill} />
		{/each}
	</div>
</Section>
