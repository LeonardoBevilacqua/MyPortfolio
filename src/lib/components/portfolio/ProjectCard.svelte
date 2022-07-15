<script lang="ts">
	import type { ProjectType } from '$lib/store/Project.store';
    import { base } from '$app/paths';

	export let project: ProjectType;
</script>

<div
	class="flex flex-col bg-light-30 dark:bg-dark-30 rounded-3xl text-center shadow-lg text-light-default dark:text-dark-default"
>
	<img
		class="h-52 w-full object-cover rounded-t-3xl"
		src={base + project.cardSrc}
		alt={project.cardTitle}
	/>
	<div class="m-3">
		<h3 class="font-bold text-lg text-light-10 dark:text-dark-10">{project.cardTitle}</h3>
		<h4>{project.cardDescription}</h4>
	</div>
    <a class="mb-3 p-3 mt-auto self-center rounded-lg shadow-lg bg-light-60 dark:bg-dark-60 hover:bg-light-10 hover:dark:bg-dark-10 text-black dark:text-white transition-colors duration-200" href="{base}/project/{project.id}"
        >Ver mais sobre</a>
</div>
