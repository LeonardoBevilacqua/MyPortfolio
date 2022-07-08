<script lang="ts">
	export let label: string;
</script>

<div class="flex">
	<strong class="font-semibold text-light-10 dark:text-dark-10">{label}:</strong>
	<span class="ml-auto"><slot /></span>
</div>
