export type ProjectContent = {
	text?: string;
	image?: string;
	description?: string;
	video?: string;
};
export type ProjectSummary = {
	title: string;
	subtitle: string;
	descriptions: string[];
	link: `/portfolio/${string}`;
	imgLink: string;
};
export type ProjectDetails = ProjectSummary & {
	content: ProjectContent[];
};
