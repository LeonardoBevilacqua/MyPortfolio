<script>
    import { base } from '$app/paths';
	import InfoLabel from './InfoLabel.svelte';
	import Fa from 'svelte-fa';
	import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import InfoPanel from './InfoPanel.svelte';

	const getCurrentAge = () => {
		var diffMs = Date.now() - new Date('1997/10/01').getTime();
		var ageDt = new Date(diffMs);

		return Math.abs(ageDt.getUTCFullYear() - 1970);
	};
</script>

<div class="bg-light-30 dark:bg-dark-30 text-light-default dark:text-dark-default lg:h-auto flex flex-col sm:flex-row lg:block">
	<img
		class="hidden w-full sm:block sm:h-auto sm:w-1/3 md:w-full object-cover object-top"
		src="{base}/imgs/profile-picture.jpeg"
		alt="Leonardo Almeida Bevilacqua profile face"
	/>

	<div class="p-3 flex flex-col gap-5 sm:m-auto md:my-auto md:mx-0 md:w-full">
		<div class="text-center text-light-10 dark:text-dark-10">
			<h1 class="uppercase text-2xl md:text-3xl font-semibold">Leonardo Almeida Bevilacqua</h1>
			<h2 class="text-xl md:text-2xl font-semibold">Análista de Software</h2>
		</div>

		<!-- personal info -->
		<InfoPanel title="Informações pessoais">
			<!-- birth date -->
			<InfoLabel label="Nascimento">01/10/1997 ({getCurrentAge()} anos)</InfoLabel>
			<!-- location -->
			<InfoLabel label="Localidade">Campinas, SP</InfoLabel>
		</InfoPanel>

		<!-- contact info -->
		<InfoPanel title="Contato">
			<!-- Email -->
			<InfoLabel label="E-mail">leonardo_bevilacqua@hotmail.com</InfoLabel>
			<!-- Cellphone -->
			<InfoLabel label="Celular">(19) 99582-8664</InfoLabel>
			<!-- GitHub -->
			<InfoLabel label="GitHub">
				<a target="_blank" rel="noreferrer" href="https://github.com/LeonardoBevilacqua">
					<Fa class="inline-block text-light-10 dark:text-dark-10" icon={faGithubSquare} />
					<span>LeonardoBevilacqua</span>
				</a>
			</InfoLabel>
			<!-- LinkedIn -->
			<InfoLabel label="LinkedIn">
				<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leonardoabevilacqua/">
					<Fa class="inline-block text-light-10 dark:text-dark-10" icon={faLinkedin} />
					<span>leonardoABevilacqua</span>
				</a>
			</InfoLabel>
		</InfoPanel>
	</div>
</div>
