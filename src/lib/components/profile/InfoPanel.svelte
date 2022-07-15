<script lang="ts">
    export let title: string
</script>

<div>
	<h3 class="font-bold text-lg text-light-default dark:text-dark-default">{title}</h3>
	<slot />
</div>
