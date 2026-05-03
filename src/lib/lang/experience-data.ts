export type Experience = { experience: string; period: string; descriptions: string[] };
const pt: Experience[] = [
	{
		experience: 'Escola SENAI Prof. Dr. Euryclides de Jesus Zerbini',
		period: 'Curso técnico, 2015 - 2016',
		descriptions: [
			'Formação em técnico em informática, aprendendo sobre hardware e software, redes de computadores, programação básica em C, C++, C#, java e javacript e criação de web sites com html e css.',
			'Recebi a premiação de aluno ouro no 2.º semestre. Premiação que ocorre a cada semestre para parabenizar o aluno que se destacou durante o semestre.',
			'Recebi a premiação de aluno destaque ao fim do curso. Premiação dada para que se mantém com notas altas e se dedicam ao máximo.'
		]
	},
	{
		experience: 'Centro Universitário UniMetrocamp Wyden',
		period: 'Graduação, 2016 - 2020',
		descriptions: [
			'Formação em ciências da computação, aprendizado sobre programação avançada, conhecimento aprofundado em sistemas operacionais e arquitetura de software.'
		]
	},
	{
		experience: 'Visio Tecnologia',
		period: 'Estágio e efetivação, 2017 - 2019',
		descriptions: [
			'Trabalhei com diversos bancos de dados como oracle, sql server e informix e programação 4gl.',
			'Comecei como estagiário até maio de 2018, sendo efetivado após esse período.'
		]
	},
	{
		experience: 'Instituto de Pesquisas Eldorado',
		period: 'Estágio e efetivação, 2019 - Atualmente',
		descriptions: [
			'Trabalhando com tecnologias atuais no mercado, como angular, spring boot e postgresql, focando em devops.',
			'Comecei como estagiário em abril de 2019, sendo efetivado como analista de software júnior em janeiro de 2020.',
			'Em 2022 fui promovido para analista de software pleno.'
		]
	},
	{
		experience: 'Centro Universitário UniMetrocamp Wyden',
		period: 'Pós-graduação, 2021 - 2022',
		descriptions: [
			'Formação em engenharia de software, aprendizado sobre práticas seguras, arquitetura de projetos e plataformas em nuvem.'
		]
	}
];
const en: Experience[] = [
	{
		experience: 'Escola SENAI Prof. Dr. Euryclides de Jesus Zerbini',
		period: 'Technician, 2015 - 2016',
		descriptions: [
			'Training in computer technician, learning about hardware and software, computer networks, basic programming in C, C++, C#, java and javascript and creation of web sites with html and css.',
			'I received the gold student award in the 2nd semester. Awards that occur every semester to congratulate the student who stood out during the semester.',
			'I received the outstanding student award at the end of the course. Award given to those who keep high marks and dedicate themselves to the fullest.'
		]
	},
	{
		experience: 'Centro Universitário UniMetrocamp Wyden',
		period: 'Graduation, 2016 - 2020',
		descriptions: [
			'Degree in computer science, learning about advanced programming, in-depth knowledge of operating systems and software architecture.'
		]
	},
	{
		experience: 'Visio Tecnologia',
		period: 'Internship and promotion, 2017 - 2019',
		descriptions: [
			'Worked with several databases such as oracle, sql server and informix and 4gl programming.',
			'I started as an intern until May 2018, being hired after that period.'
		]
	},
	{
		experience: 'Instituto de Pesquisas Eldorado',
		period: 'Internship and promotion, 2019 - Atualmente',
		descriptions: [
			'Working with current technologies on the market, such as angular, spring boot and postgresql, focusing on devops.',
			'I started as an intern in April 2019, being hired as a junior software analyst in January 2020.',
			'In 2022 I was promoted to full software analyst.'
		]
	},
	{
		experience: 'Centro Universitário UniMetrocamp Wyden',
		period: 'Post Graduation, 2021 - 2022',
		descriptions: [
			'Training in software engineering, learning about safe practices, project architecture and cloud platforms.'
		]
	}
];
export const experienceData = { pt, en };
