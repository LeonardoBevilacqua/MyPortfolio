<script lang="ts">
	import PortfolioSection from '$lib/PortfolioSection.svelte';
	import ProfilePanel from '$lib/profile/ProfilePanel.svelte';
	import SkillSection from '$lib/SkillSection.svelte';
	import ExperienceSection from '$lib/ExperienceSection.svelte';
</script>

<main class="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-6 h-screen font-Oswald">
	<ProfilePanel />
	<div class="grid grid-rows-3 col-span-2 2xl:col-span-5 bg-gray-200 dark:bg-gray-500">
		<SkillSection />
		<ExperienceSection />
		<PortfolioSection />
	</div>
</main>
