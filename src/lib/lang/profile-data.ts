export type ProfileInfo = {
	jobRole: string;
	personalInfo: string;
	birth: string;
	birthdate: string;
	years: string;
	location: string;
	contact: string;
	cellphone: string;
};

const pt: ProfileInfo = {
	jobRole: 'Análista de Software',
	personalInfo: 'Informações pessoais',
	birth: 'Nascimento',
	birthdate: '01/10/1997',
	years: 'anos',
	location: 'Localidade',
	contact: 'Contato',
	cellphone: 'Celular'
};
const en = {
	jobRole: 'Software Analyst',
	personalInfo: 'Personal information',
	birth: 'Birth',
	birthdate: '1997-10-01',
	years: 'years old',
	location: 'Location',
	contact: 'Contact',
	cellphone: 'Cell phone'
};

export const profile = {
	pt,
	en
};
