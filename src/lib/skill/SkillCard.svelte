<script type="ts">
	export let skill: { title: string; src: string };
</script>

<div
	class="bg-purple-800 dark:bg-yellow-100 rounded-3xl text-center shadow-lg text-white dark:text-black p-3 grid grid-rows-1"
>
	<img
		class="h-36 w-3/4 m-auto object-contain"
		src={skill.src}
		alt={skill.title}
		title={skill.title}
	/>
	<span>{skill.title}</span>
</div>
