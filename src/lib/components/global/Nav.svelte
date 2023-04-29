<script lang="ts">
	import { page } from '$app/stores';
	import { t, locale } from '$lib/i18n/Translation';

	let selectedLanguage: string;

	const languageOnChange = async () => {
		locale.set(selectedLanguage);
		document.documentElement.setAttribute('lang', selectedLanguage);
	};
</script>

<div class="flex">
	<nav
		class="p-5 bg-light-30 dark:bg-dark-30 text-dark-default dark:text-dark-default inline-flex flex-wrap gap-5 m-auto justify-center rounded-3xl text-xl md:text-2xl"
	>
		<a data-sveltekit-preload-data class:hidden={$page.url.pathname === '/'} href="/#main"
			>{$t('interface.skillTitle')}</a
		>
		<a
			data-sveltekit-preload-data
			class:hidden={$page.url.pathname === '/experience'}
			href="/experience#main">{$t('interface.experience')}</a
		>
		<a
			data-sveltekit-preload-data
			class:hidden={$page.url.pathname === '/portfolio'}
			href="/portfolio#main">{$t('interface.portfolio')}</a
		>
		<!-- <button on:click={generateCurriculum}>Currículo</button> -->
		<select class="bg-transparent" bind:value={selectedLanguage} on:change={languageOnChange}>
			<option value="pt">Português (Brasil)</option>
			<option value="en">English</option>
		</select>
	</nav>
</div>
