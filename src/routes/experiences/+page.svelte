<script lang="ts">
	import SectionHeader from '$lib/atoms/SectionHeader.svelte';
	type Experience = { experience: string; period: string; descriptions: string[] };

	const experiences: Experience[] = [
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
</script>

{#snippet experienceCard({ experience, period, descriptions }: Experience, row: number)}
	<section
		class="bg-dark-60 rounded-3xl p-3 col-span-3 {row % 2 ? 'col-start-1' : 'col-start-5'}"
		style:grid-row={row}
	>
		<h3 class="text-dark-10 text-xl font-bold">{experience}</h3>
		<h4 class="text-white text-lg font-bold border-b-2">{period}</h4>
		<div class="flex flex-col gap-3 mt-3">
			{#each descriptions as description, index (index)}
				<p class="text-white">{description}</p>
			{/each}
		</div>
	</section>
{/snippet}

<SectionHeader class="mb-4">Experiências</SectionHeader>
<article class="@tablet:grid grid-cols-7">
	{#each experiences as experience, index (index)}
		{@const row = index + 1}
		{@const right = !(row % 2)}
		{@const isFirst = index === 0}
		{@const isLast = row === experiences.length}
		{@render experienceCard(experience, row)}
		<div class="relative content-center col-4">
			<div
				class="bg-dark-10 h-12 w-12 rounded-full mx-auto my-12 line lines lines-h {right &&
					'lines-h-r'} lines-v after:top-0 after:h-full {isFirst &&
					'tablet:after:top-1/2 tablet:after:h-1/2'} {isLast &&
					'hidden tablet:block lines-v-t'} before:bg-dark-10 tablet:before:w-1/2 after:bg-dark-10"
			></div>
		</div>
	{/each}
</article>

<style>
	.lines::before,
	.lines::after {
		content: '';
		position: absolute;
	}
	.lines-h::before {
		height: 0.25rem;
		left: 0;
		translate: 0 -50%;
		top: 50%;
	}
	.lines-h-r::before {
		right: 0;
		left: auto;
	}
	.lines-v::after {
		width: 0.25rem;
		left: 50%;
		translate: -50%;
	}
	.lines-v-t::after {
		top: 0;
		height: 50%;
	}
</style>
