<script lang="ts">
	import PortfolioSection from '$lib/portfolio/PortfolioSection.svelte';
	import ProfilePanel from '$lib/profile/ProfilePanel.svelte';
	import SkillSection from '$lib/skill/SkillSection.svelte';
	import ExperienceSection from '$lib/experience/ExperienceSection.svelte';
</script>

<main class="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-6 h-screen font-Oswald">
	<ProfilePanel />
	<div class="grid grid-rows-3 col-span-2 2xl:col-span-5 bg-slate-100 dark:bg-slate-800 p-3">
		<SkillSection />
		<ExperienceSection />
		<PortfolioSection />
	</div>
</main>
