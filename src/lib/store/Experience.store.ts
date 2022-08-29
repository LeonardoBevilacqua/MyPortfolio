import { writable } from "svelte/store";

export type ExperienceType = {
	title: string;
	subtitle: string;
	start: number;
	end: number | null;
	descriptions: string[];
};

export const ExperienceStore = writable<ExperienceType[]>([
    {
        title: 'Escola SENAI Prof. Dr. Euryclides de Jesus Zerbini',
        subtitle: 'Curso técnico',
        start: 2015,
        end: 2016,
        descriptions: [
            'Formação em técnico em informática, aprendendo sobre hardware e software, redes de computadores, programação básica em C, C++, C#, java e javacript e criação de web sites com html e css.',
            'Recebi a premiação de aluno ouro no 2.º semestre. Premiação que ocorre a cada semestre para parabenizar o aluno que se destacou durante o semestre. Recebi a premiação de aluno destaque ao fim do curso. Premiação dada para que se mantém com notas altas e se dedicam ao máximo.'
        ]
    },
    {
        title: 'Centro Universitário UniMetrocamp Wyden',
        subtitle: 'Graduação',
        start: 2016,
        end: 2020,
        descriptions: [
            'Formação em ciências da computação, aprendizado sobre programação avançada, conhecimento aprofundado em sistemas operacionais e arquitetura de software.'
        ]
    },
    {
        title: 'Visio Tecnologia',
        subtitle: 'Estágio e efetivação',
        start: 2017,
        end: 2019,
        descriptions: [
            'Trabalhei com diversos bancos de dados como oracle, sql server e informix e programação 4gl.',
            'Comecei como estagiário até maio de 2018, sendo efetivado após esse período.'
        ]
    },
    {
        title: 'Instituto de Pesquisas Eldorado',
        subtitle: 'Estágio e efetivação',
        start: 2019,
        end: null,
        descriptions: [
            'Trabalhando com tecnologias atuais no mercado, como angular, spring boot e postgresql, focando em devops.',
            'Comecei como estagiário em abril de 2019, sendo efetivado como analista de software júnior em janeiro de 2020.'
        ]
    },
    {
        title: 'Centro Universitário UniMetrocamp Wyden',
        subtitle: 'Pós-graduação',
        start: 2021,
        end: 2022,
        descriptions: [
            'Formação em engenharia de software, aprendizado sobre práticas seguras, arquitetura de projetos e plataformas em nuvem.'
        ]
    }
])
