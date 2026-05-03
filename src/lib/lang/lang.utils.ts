export type Lang = '' | '/en';
export type LangKey = 'pt' | 'en';

export function getLangRoute(langProp: string | undefined): Lang {
	let lang: Lang = '';

	if (langProp === 'en') {
		lang = '/en';
	}

	return lang;
}

export function getLangKey(langProp: string | undefined): LangKey {
	let key: LangKey = 'pt';

	if (langProp === 'en') {
		key = 'en';
	}

	return key;
}
