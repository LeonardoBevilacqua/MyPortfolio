<script lang="ts">
	import PortfolioSection from '$lib/portfolio/PortfolioSection.svelte';
	import ProfilePanel from '$lib/profile/ProfilePanel.svelte';
	import SkillSection from '$lib/skill/SkillSection.svelte';
	import ExperienceSection from '$lib/experience/ExperienceSection.svelte';
</script>

<main class="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-6 h-screen font-Oswald">
	<ProfilePanel />
	<div class="flex flex-col gap-3 col-span-2 2xl:col-span-5 bg-light-60 dark:bg-dark-60 p-3">
		<SkillSection />
		<ExperienceSection />
		<PortfolioSection />
	</div>
</main>
