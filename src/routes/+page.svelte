<script lang="ts">
	import Section from '$lib/components/global/Section.svelte';
	import SkillCard from '$lib/components/skill/SkillCard.svelte';
	import Skills from '$lib/data/Skills.json';
	import { t } from '$lib/i18n/Translation';
</script>

<Section title={$t('interface.skillTitle')}>
	<div class="grid grid-cols-2 md:grid-cols-4 gap-3 m-auto mt-3 w-full">
		{#each Skills as skill, index (index)}
			<SkillCard {skill} />
		{/each}
	</div>
</Section>
