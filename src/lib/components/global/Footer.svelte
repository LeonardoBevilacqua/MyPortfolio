<script>
	import { t } from '$lib/i18n/Translation';
</script>

<footer
	class="bg-light-30 dark:bg-dark-30 text-light-default dark:text-dark-default rounded-3xl mt-auto body-font"
>
	<div class="container px-5 py-8 mx-auto flex items-center justify-center sm:flex-row flex-col">
		<span
			class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
		>
			<img src="/imgs/icon/android-icon-48x48.png" alt="Leonardo Bevilacqua ícone" />
			<span class="ml-3 text-xl text-light-10 dark:text-dark-10">Leonardo Bevilacqua</span>
		</span>
		<p
			class="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
		>
			© 2022 {$t('interface.developedBy')}: Leonardo Bevilacqua —
			<a
				href="https://kit.svelte.dev/"
				class="text-gray-200 ml-1"
				rel="noopener noreferrer"
				target="_blank">SvelteKit</a
			>
		</p>
	</div>
</footer>
