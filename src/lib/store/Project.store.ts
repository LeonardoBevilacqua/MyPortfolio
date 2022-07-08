import { writable } from 'svelte/store';

export type ProjectType = {
	id: string;
	cardTitle: string;
	cardDescription: string;
	cardSrc: string;
	name: string;
	content: { text?: string; image?: string; description?: string; video?: string }[];
};

export const ProjectStore = writable<ProjectType[]>([
	{
		id: 'maze-bank',
		cardTitle: 'Maze-Bank clone',
		cardDescription: 'Clone do site Maze-Bank do jogo GTA V',
		cardSrc: 'imgs/portfolio/maze-bank/maze-bank-02.png',
		name: 'Replica do site Maze-Bank | GTA V',
		content: [
			{
				text: 'Projeto criado para praticar criação de <i>web pages</i> utilizando html e pré-processador de css, utilizando scss. A página se trata de uma réplica de um site dentro do jogo <i>grand theft auto V</i>, se tratando de uma página de banco onde o jogador tivesse a possibilidade de verificar seu saldo, sacar e depositar dinheiro dentro do jogo. O projeto se encontra disponível para navegação neste link: <a href="https: //leonardobevilacqua.github.io/Maze-Bank">https: //leonardobevilacqua.github.io/Maze-Bank</a>.'
			},
			{
				image: 'imgs/portfolio/maze-bank/maze-bank-01.png',
				description: 'Maze bank | página principal'
			},
			{
				image: 'imgs/portfolio/maze-bank/maze-bank-02.png',
				description: 'Maze bank | histórico de transações'
			}
		]
	},
	{
		id: 'lista-interativa',
		cardTitle: 'Lista interativa',
		cardDescription: 'Mini projeto CSS',
		cardSrc: 'imgs/portfolio/lista-interativa/lista-interativa.png',
		name: 'Lista interativa | Mini projeto CSS',
		content: [
			{
				text: 'Este projeto pequeno se trata de uma lista de itens, na qual existe a possibilidade de editar e excluir de forma fácil e minimalista, utilizando apenas ícones, e adicionar itens sem atualizar a pagina atual. O projeto se encontra disponível para navegação neste link: <a href="https://leonardobevilacqua.github.io/Lista-interativa/index.html">https://leonardobevilacqua.github.io/Lista-interativa/index.html</a>'
			},
			{
				image: 'imgs/portfolio/lista-interativa/lista-interativa.png',
				description: 'Lista interativa'
			}
		]
	},
	{
		id: 'choose-your-game',
		cardTitle: 'Choose Your Game',
		cardDescription: 'Uma rede social para gamers',
		cardSrc: 'imgs/portfolio/choose-your-game/choose_your_game_02.PNG',
		name: 'Choose Your Game | Uma rede social para gamers',
		content: [
			{ text: 'Projeto do 5º semestre de CCO, com foco de criar uma aplicação web.' },
			{
				text: 'O projeto se trata de uma Rede social com foco em games, voltado para discussão sobre o assunto, analises e outros. Foi realizado todo o planejamento como funcionaria o site usando a ferramenta "Trello", logo após foi criado todo o front-end, disponível para visualização e interação no seguinte link: <a href="https://leonardobevilacqua.github.io/Metrocamp-Web-projeto/Template/pages">https://leonardobevilacqua.github.io/Metrocamp-Web-projeto/Template/pages</a>, podendo clicar em "ENTRAR" e navegar nas páginas. Logo após, foi iniciado o processo de desenvolvimento, utilizando o <i>.net core</i>.'
			},
			{
				image: 'imgs/portfolio/choose-your-game/choose_your_game_01.PNG',
				description: 'Choose your game | página principal'
			},
			{
				image: 'imgs/portfolio/choose-your-game/choose_your_game_02.PNG',
				description: 'Choose your game | página de perfil'
			}
		]
	},
	{
		id: 'java-engine',
		cardTitle: 'Java 2D Engine',
		cardDescription: 'Estudo sobre desenvolvimento de jogos',
		cardSrc: 'imgs/portfolio/java-engine/java-engine.png',
		name: 'Java 2D Engine | Game development',
		content: [
			{
				text: 'Projeto criado para entender o funcionamento básico de uma engine, renderizando em 2D com suporte a multi jogador. A engine possui elementos baseados nas playlists do youtube de <a href="https://www.youtube.com/playlist?list=PL8CAB66181A502179"><i>Ryan van Zeben</i></a>, e <a href="https://www.youtube.com/playlist?list=PLah6faXAgguMnTBs3JnEJY0shAc18XYQZ"><i>CodeNMore</i></a>.'
			},
			{
				text: 'Uma <a href="https://youtube.com/playlist?list=PL-OBuwg5uiFJSVfHHk-YSgj0VZdtk95FK">playlist</a> foi criada criada para demonstrar o progresso do desenvolvimento.'
			},
			{
				video: 'https://www.youtube.com/embed/rSEbEGXkw3E',
				description: 'Teste com multi jogador'
			},
			{
				video: 'https://www.youtube.com/embed/rDvPbmYpiJ4',
				description: 'Teste com interação com cenário'
			},
			{ video: 'https://www.youtube.com/embed/0USSEYA7gwI', description: 'Alteração da arte' }
		]
	},
	{
		id: 'blood-clicker',
		cardTitle: 'Blood-clicker',
		cardDescription: 'Jogo educativo sobre doação de sangue',
		cardSrc: 'imgs/portfolio/blood-clicker/blood-clicker.png',
		name: 'Blood-clicker | Jogo educativo',
		content: [
			{
				text: 'Em 2019, ocorreu na faculdade UniMetrocamp a <b>"mostra de responsabilidade social"</b>, na qual fomos incentivados a realizar a criação de um jogo para conscientizar a doação de sangue. O meu jogo foi inspirado no jogo <i>"cookie clicker"</i>, no qual seu objetivo é juntar pontos e comprar melhorias. No jogo, a cada melhoria comprada, uma mensagem é exibida dando informações sobre doação de sangue. O jogo foi criado utilizando a <i>Godot Engine</i> e se encontra disponível no link: <a href="https://leonardobevilacqua.github.io/Blood-clicker/build/html/blood-clicker.html">https://leonardobevilacqua.github.io/Blood-clicker/build/html/blood-clicker.html</a>.'
			},
			{
				image: 'imgs/portfolio/blood-clicker/blood-clicker.png',
				description: 'Jogo blood clicker'
			}
		]
	},
	{
		id: '3jobs',
		cardTitle: '3Jobs',
		cardDescription: 'Trabalho de conclusão de curso',
		cardSrc: 'imgs/portfolio/3jobs/3jobs-01.png',
		name: '3Jobs | Trabalho de conclusão de curso',
		content: [
			{
				text: '3Jobs é um projeto com a intenção de ser um facilitador para candidatos e vagas de emprego.  Permitindo que os headhunters encontrem, avaliem e indiquem com facilidade, ao Departamento de  Recursos Humanos (RH), os candidatos que melhor se adequam à determinada vaga.'
			},
			{
				text: 'O projeto foi organizado utilizando Kaban, no qual eu fiquei responsavel em gerenciar as tarefas dos outros membros do grupo e também da criação do frontend do sistema.'
			},
			{ image: 'imgs/portfolio/3jobs/3jobs-01.png', description: '3Jobs | página inicial' },
			{
				image: 'imgs/portfolio/3jobs/3jobs-02.png',
				description: '3Jobs | página principal após login'
			},
			{ image: 'imgs/portfolio/3jobs/3jobs-03.png', description: '3Jobs | página de perfil' }
		]
	},
	{
		id: 'prop-hunt',
		cardTitle: 'Prop Hunt 2D',
		cardDescription: 'Jogo multiplayer',
		cardSrc: 'imgs/portfolio/prop-hunt/prop-hunt.png',
		name: 'Prop Hunt 2D | Jogo multiplayer',
		content: [
			{
				text: 'No inicio de 2020 iniciei um estudo e criação de um jogo simples em 2D, utilizando a <i>engine Godot</i>'
			},
			{
				text: 'O projeto teve como foco permitir o aprendizado da <i>engine</i> e o entendimento sobre o funcionamento básico de jogos multi jogador, sendo realizado o registro de cada evolução obtida durante o desenvolvimento. O projeto foi finalizado no fim de 2020.'
			},
			{
				text: 'O jogo funciona de forma simples, duas equipes, onde uma deve ser esconder e a outra deve procurar.'
			},
			{ video: 'https://www.youtube.com/embed/K82m5CMF42M', description: 'Inicio do projeto' },
			{ video: 'https://www.youtube.com/embed/ToQd3chaHd8', description: 'Fim do projeto' },
			{
				text: 'Foi criado uma <a href="https://youtube.com/playlist?list=PL-OBuwg5uiFIGYAxFF3GRB57KsoBDg6Hl">playlist</a> com pequenos videos da evolução do projeto.'
			}
		]
	}
]);
