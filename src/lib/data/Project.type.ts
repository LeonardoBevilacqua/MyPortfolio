export type ProjectType = {
	id: string;
	cardTitle: string;
	cardDescription: string;
	cardSrc: string;
	name: string;
	content: { text?: string; image?: string; description?: string; video?: string }[];
};
