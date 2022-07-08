<script lang="ts">
	import Section from '$lib/global/Section.svelte';
	import ExperienceCard from './ExperienceCard.svelte';

	const experiences = [
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
			end: null,
			descriptions: [
				'Formação em engenharia de software, aprendizado sobre práticas seguras, arquitetura de projetos e plataformas em nuvem.'
			]
		},
	];

	const isOdd = (value: number) => !!(value % 2);
</script>

<Section title="experiências" id="experience">
	<div class="pt-3 grid xl:block gap-3">
		{#each experiences as experience, index (index)}
			<div class="grid grid-cols-1 xl:grid-cols-3">
				<div class={isOdd(index + 1) ? 'order-1' : 'order-3'}><ExperienceCard {experience} /></div>
				<div
					class="hidden xl:flex order-2 relative lines {isOdd(index + 1)
						? 'before:left-0'
						: 'col-end-3'} {index === 0
						? 'after:h-1/2 after:top-1/2'
						: index + 1 === experiences.length
						? 'after:h-1/2'
						: 'after:h-full'}"
				>
					<div class="bg-light-30 dark:bg-dark-30 h-12 w-12 rounded-full m-auto z-10 shadow-md" />
				</div>
			</div>
		{/each}
	</div>
</Section>

<style>
	.lines {
		@apply before:absolute
		before:bg-light-30
		before:dark:bg-dark-30
		before:h-1
		before:w-1/2
		before:top-1/2
		before:right-0
		before:-translate-y-0.5
		after:absolute
		after:bg-light-30
		after:dark:bg-dark-30
		after:w-1
		after:left-1/2
		after:-translate-x-0.5;
	}
</style>
