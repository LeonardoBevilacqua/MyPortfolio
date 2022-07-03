<script lang="ts">
    export let title: string
</script>

<div>
	<h3 class="font-bold text-lg text-black dark:text-white">{title}</h3>
	<slot />
</div>
