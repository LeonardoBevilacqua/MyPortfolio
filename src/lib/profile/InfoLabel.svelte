<script lang="ts">
	export let label: string;
</script>

<div class="flex">
	<strong class="font-semibold">{label}:</strong>
	<span class="ml-auto"><slot /></span>
</div>
