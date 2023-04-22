<script lang="ts">
	import type { SkillType } from "$lib/store/Skill.store";

	export let skill: SkillType;
</script>

<div
	class="bg-light-30 dark:bg-dark-30 rounded-3xl text-center shadow-lg text-light-default dark:text-dark-default p-3 grid grid-rows-1"
>
	<img
		class="h-36 xl:h-64 w-3/4 m-auto object-contain"
		src={skill.src}
		alt={skill.title}
		title={skill.title}
	/>
	<span class="text-lg">{skill.title}</span>
</div>
