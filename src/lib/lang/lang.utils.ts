export type Lang = '' | '/en';

export function getLangRoute(langProp: string | undefined): Lang {
	let lang: Lang = '';

	if (langProp === 'en') {
		lang = '/en';
	}

	return lang;
}
