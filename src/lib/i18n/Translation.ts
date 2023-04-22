import type { Config } from 'sveltekit-i18n';
import i18n from 'sveltekit-i18n';

const config: Config = {
	loaders: [
		{
			locale: 'pt',
			key: 'interface',
			loader: async () => (await import('$lib/data/pt/Interface.json')).default
		},
		{
			locale: 'en',
			key: 'interface',
			loader: async () => (await import('$lib/data/en/Interface.json')).default
		}
	]
};

export const defaultLocale = 'pt';

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
