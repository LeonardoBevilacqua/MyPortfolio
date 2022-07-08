<script lang="ts">
	export let project: {
		id: string;
		cardTitle: string;
		cardDescription: string;
        cardSrc: string;
		name: string;
		content: { text?: string; image?: string; description?: string }[];
	};
</script>

<div
	class="bg-light-30 dark:bg-dark-30 rounded-3xl text-center shadow-lg text-light-default dark:text-dark-default"
>
    <img class="h-52 w-full object-cover rounded-t-3xl" src={project.cardSrc} alt={project.cardTitle}>
    <div class="m-3">
        <h3 class="font-bold text-lg text-light-10 dark:text-dark-10">{project.cardTitle}</h3>
        <h4>{project.cardDescription}</h4>
    </div>
</div>
