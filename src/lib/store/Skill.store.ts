import { writable } from 'svelte/store';

export type SkillType = {
	title: string;
	src: string;
};

export const SkillStore = writable<SkillType[]>([
	{ title: 'Spring Framework', src: '/imgs/skills/spring-framework.png' },
	{ title: 'Node JS', src: '/imgs/skills/node-js.webp' },
	{ title: 'Angular', src: '/imgs/skills/angular.png' },
	{ title: 'Svelte', src: '/imgs/skills/svelte.webp' },
	{ title: 'Tailwind CSS', src: '/imgs/skills/tailwind-css.webp' },
	{ title: 'Bootstrap CSS', src: '/imgs/skills/bootstrap-5-logo.webp' },
	{ title: 'PostgreSql', src: '/imgs/skills/postgresql.png' },
	{ title: 'MongoDB', src: '/imgs/skills/mongodb.webp' },
	{ title: 'Amazon Web Services', src: '/imgs/skills/aws.png' },
	{ title: 'Godot Engine', src: '/imgs/skills/godot.png' },
	{ title: 'Figma', src: '/imgs/skills/figma.webp' },
	{ title: 'Docker', src: '/imgs/skills/docker.webp' },
]);
