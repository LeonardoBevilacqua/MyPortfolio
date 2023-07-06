import type { Config } from 'sveltekit-i18n';
import i18n from 'sveltekit-i18n';

export const defaultLocale = 'pt';

const config: Config = {
	initLocale: defaultLocale,
	fallbackLocale: defaultLocale,
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
		},
		{
			locale: 'pt',
			key: 'experience',
			loader: async () => (await import('$lib/data/pt/Experiences.json')).default
		},
		{
			locale: 'en',
			key: 'experience',
			loader: async () => (await import('$lib/data/en/Experiences.json')).default
		},
		{
			locale: 'pt',
			key: 'project',
			loader: async () => (await import('$lib/data/pt/Projects.json')).default
		},
		{
			locale: 'en',
			key: 'project',
			loader: async () => (await import('$lib/data/en/Projects.json')).default
		},
		{
			locale: 'pt',
			key: 'profile',
			loader: async () => (await import('$lib/data/pt/Profile.json')).default
		},
		{
			locale: 'en',
			key: 'profile',
			loader: async () => (await import('$lib/data/en/Profile.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
