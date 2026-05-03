type ProjectResource = {
	link: `/portfolio/${string}`;
	imgLink: string;
};
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
	resource: ProjectResource;
};
export type ProjectDetails = {
	title: string;
	content: ProjectContent[];
};

const mazeBank: ProjectResource = {
	link: '/portfolio/maze-bank',
	imgLink: '/images/portfolio/maze-bank/maze-bank-02.png'
};
const ptSummary: ProjectSummary[] = [
	{
		title: 'Clone do Maze-Bank',
		subtitle: '',
		descriptions: ['Clone do site Maze-Bank do jogo GTA V'],
		resource: mazeBank
	}
];
const enSummary: ProjectSummary[] = [
	{
		title: 'Maze-Bank clone',
		subtitle: '',
		descriptions: ['Clone of the Maze-Bank website from the game GTA V'],
		resource: mazeBank
	}
];

const ptDetails: { [key: string]: ProjectDetails } = {
	'maze-bank': {
		title: 'Réplica do site Maze-Bank | GTA V',

		content: [
			{
				text: 'Projeto criado para praticar criação de <i>web pages</i> utilizando html e pré-processador de css, utilizando scss. A página se trata de uma réplica de um site dentro do jogo <i>grand theft auto V</i>, se tratando de uma página de banco onde o jogador tivesse a possibilidade de verificar seu saldo, sacar e depositar dinheiro dentro do jogo. O projeto se encontra disponível para navegação neste link: <a href="https://leonardobevilacqua.github.io/Maze-Bank">https://leonardobevilacqua.github.io/Maze-Bank</a>.'
			},
			{
				image: '/images/portfolio/maze-bank/maze-bank-01.png',
				description: 'Maze bank | página principal'
			},
			{
				image: '/images/portfolio/maze-bank/maze-bank-02.png',
				description: 'Maze bank | histórico de transações'
			}
		]
	}
};
const enDetails: { [key: string]: ProjectDetails } = {
	'maze-bank': {
		title: 'Maze-Bank website replica | GTA V',

		content: [
			{
				text: 'Project created to practice creating <i>web pages</i> using html and css pre-processor, using scss. The page is a replica of a website within the game <i>grand theft auto V</i>, being a bank page where the player has the possibility to check his balance, withdraw and deposit money within the game . The project is available for browsing at this link: <a href="https://leonardobevilacqua.github.io/Maze-Bank">https://leonardobevilacqua.github.io/Maze-Bank</a>.'
			},
			{
				image: '/images/portfolio/maze-bank/maze-bank-01.png',
				description: 'Maze bank | main page'
			},
			{
				image: '/images/portfolio/maze-bank/maze-bank-02.png',
				description: 'Maze bank | transaction history'
			}
		]
	}
};
export const projectSummaryData = { pt: ptSummary, en: enSummary };
export const projectDetailsData = { pt: ptDetails, en: enDetails };
