<script lang="ts">
	import Heading from '$lib/components/global/Heading.svelte';
	import { test } from '$lib/pdfmake';
	import { ExperienceStore } from '$lib/store/Experience.store';
	import { SkillStore } from '$lib/store/Skill.store';
	import { onMount } from 'svelte';

    onMount(() => test())
</script>

<div class="col-span-2 p-5 flex flex-col gap-5 text-lg">
	<section>
		<Heading>Leonardo Almeida Bevilacqua</Heading>
		<Heading h2>Analista de Software Pleno na Instituto de Pesquisas Eldorado</Heading>
		<Heading h2 className="text-neutral-500">Campinas, São Paulo, Brasil</Heading>
	</section>

	<section>
		<Heading h3>Perfil Profissional</Heading>
		<p>
			Formado em técnico em informática, na Escola SENAI Prof. Dr. Euryclides de Jesus Zerbini e
			Ciências da computação, na faculdade DeVry Metrocamp.
		</p>
		<p>
			Trabalhei como estagiário e funcionário na Empresa VISIO TECNOLOGIA, trabalhando com a
			linguagem de programação 4GL e os bancos de dados Oracle, Informix e SQLServer.
		</p>
		<p>
			Atuei como estagiário, no Instituto Eldorado Campinas, e atualmente como analista de software.
		</p>
		<p>Pós graduado em engenharia de software.</p>
	</section>

	<section>
		<Heading h3>Objetivos</Heading>
		<p>TODO</p>
	</section>

	<section>
		<Heading h3>Experiência</Heading>
		<ul>
			{#each $ExperienceStore as experience, index (index)}
				<li>{experience.title}</li>
			{/each}
		</ul>
	</section>

	<section>
		<Heading h3>Formação acadêmica</Heading>
		<ul>
			{#each $ExperienceStore as experience, index (index)}
				<li>{experience.title}</li>
			{/each}
		</ul>
	</section>
</div>

<div class="order-first bg-sky-900 text-white p-5 flex flex-col gap-5 text-lg">
	<section>
		<Heading h3>Contato</Heading>
		<ul>
			<li>(19)99582-8664 (Mobile)</li>
			<li>leonardo_bevilacqua@hotmail.com</li>
			<li>www.linkedin.com/in/leonardoabevilacqua (LinkedIn)</li>
			<li>leonardobevilacqua.com.br/ (Portfolio)</li>
		</ul>
	</section>

	<section>
		<Heading h3>Principais competências</Heading>
		<ul>
			{#each $SkillStore as skill, index (index)}
				<li>{skill.title}</li>
			{/each}
		</ul>
	</section>

	<section>
		<Heading h3>Languages</Heading>
		<ul>
			<li>Português (Nativo)</li>
			<li>Inglês (Professional)</li>
		</ul>
	</section>
</div>
