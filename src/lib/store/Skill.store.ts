import { writable } from 'svelte/store';

export type SkillType = {
	title: string;
	src: string;
};

export const SkillStore = writable<SkillType[]>([
	{ title: 'Spring Framework', src: '/imgs/skills/spring-framework.png' },
	{ title: 'Angular', src: '/imgs/skills/angular.png' },
	{ title: 'PostgreSql', src: '/imgs/skills/postgresql.png' },
	{ title: 'Amazon Web Services', src: '/imgs/skills/aws.png' },
]);
