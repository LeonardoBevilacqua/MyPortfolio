<script lang="ts">
	import ExperienceSection from '$lib/components/experience/ExperienceSection.svelte';
	import PortfolioSection from '$lib/components/portfolio/PortfolioSection.svelte';
	import SkillSection from '$lib/components/skill/SkillSection.svelte';
	import { fly } from 'svelte/transition';
</script>

<div
	transition:fly={{ x: 200 }}
	class="flex flex-col gap-3 col-span-2 2xl:col-span-5 bg-light-60 dark:bg-dark-60 p-3"
>
	<SkillSection />
	<ExperienceSection />
	<PortfolioSection />
</div>
