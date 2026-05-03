<script lang="ts">
	import { resolve } from '$app/paths';
	import SectionHeader from '$lib/atoms/SectionHeader.svelte';
	type Project = {
		title: string;
		subtitle: string;
		descriptions: string[];
		link: `/portfolio/${string}`;
		imgLink: string;
	};

	const projects: Project[] = [
		{
			title: 'Project Title',
			subtitle: 'Project subtitle',
			descriptions: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit tortor eu ultricies dapibus. Vestibulum vestibulum ante eget ante malesuada mollis. Vivamus efficitur purus ut orci tristique, nec suscipit massa interdum. Aliquam a vehicula leo, non maximus est. Vivamus viverra ipsum nec massa fermentum euismod. Sed at purus nec sapien feugiat condimentum. Pellentesque maximus mauris vel tristique tempus. Nunc venenatis lectus eget nisl ornare euismod. Proin lectus ex, sagittis in dictum id, gravida eu lorem. Vestibulum vehicula vel ipsum congue mollis.',
				'Maecenas accumsan ex elit, non volutpat libero ultricies ac. In rutrum, velit nec maximus vestibulum, massa nibh egestas odio, a maximus leo nulla nec velit. Proin et nibh hendrerit, venenatis leo at, sollicitudin ex. Sed lorem lorem, accumsan ac molestie posuere, laoreet sed sapien. Quisque dui risus, rhoncus eget felis eget, posuere dapibus justo. Vivamus et urna vitae sapien volutpat rutrum. In vel accumsan sem. Proin faucibus nulla sapien, dignissim consequat dolor vehicula vel. Suspendisse leo nisi, tristique sed ex non, interdum cursus dolor. Quisque vitae massa et nisi dignissim porta in molestie ligula. Integer cursus velit elit. Nullam a tellus lorem. Vestibulum pharetra sapien eget ultrices congue. Morbi in purus lacinia, ultricies eros non, aliquet quam. Donec malesuada efficitur aliquam. Aenean id ipsum non erat gravida vestibulum lobortis pharetra nulla.'
			],
			link: '/portfolio/project-title-1',
			imgLink: '/images/portfolio/choose-your-game/choose_your_game_01.PNG'
		},
		{
			title: 'Project Title 2',
			subtitle: 'Project subtitle 2',
			descriptions: [
				'Quisque vestibulum arcu vitae lacus vulputate, sit amet imperdiet ex congue. Nam mollis erat eget tempus tincidunt. Donec blandit mi ligula, eget condimentum libero mattis ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ultrices malesuada auctor. Quisque ac risus quis tortor efficitur volutpat. Quisque commodo lobortis rhoncus.',
				'Nam gravida orci et nibh dignissim convallis. Proin pretium fermentum libero. Donec non leo vitae sapien scelerisque vehicula. Vestibulum faucibus enim vel quam consequat, et tincidunt dolor rhoncus. Pellentesque sed sapien sodales, luctus orci et, tempus lacus. Suspendisse eget lacus mi. Proin imperdiet justo id efficitur bibendum. ',
				'In lacinia convallis turpis, vel feugiat felis finibus sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc feugiat ut felis nec imperdiet. Ut placerat turpis porta magna mattis, non dictum justo faucibus. Curabitur non viverra mi. Quisque at sapien malesuada, consectetur mauris sit amet, tincidunt magna. Quisque congue dignissim metus, a auctor diam ullamcorper non. Nam hendrerit iaculis mauris, eu laoreet odio varius ac. Nulla fringilla odio quis ligula lobortis, in dapibus diam luctus. Ut bibendum, mauris eu bibendum malesuada, quam lacus efficitur massa, at porttitor nisi ante rhoncus sapien. Mauris aliquet finibus orci, facilisis tincidunt purus semper nec. Morbi sed imperdiet nulla. Nunc porttitor interdum nibh. Nam eu auctor mi, ac condimentum purus.'
			],
			link: '/portfolio/project-title-2',
			imgLink: '/images/portfolio/choose-your-game/choose_your_game_02.PNG'
		}
	];
</script>

{#snippet projectCard({ title, subtitle, descriptions, link, imgLink }: Project, right: boolean)}
	<!-- TODO: use grid instead of flex to avoid duplication -->
	<section
		class="bg-dark-60 text-white rounded-lg p-2 gap-2 flex @desktop:flex-col {right &&
			'flex-row-reverse'}"
	>
		<div class="max-w-1/2 content-center @desktop:hidden @max-[720px]:hidden">
			<img src={imgLink} class="max-w-full h-auto rounded-lg" alt={title} />
		</div>
		<div class="flex flex-col @max-desktop:max-w-1/2 @max-[720px]:max-w-full">
			<h3 class="text-dark-10 text-lg font-bold">{title}</h3>
			<h4 class="font-medium mb-2">{subtitle}</h4>

			<img
				src={imgLink}
				class="max-w-full h-auto rounded-lg @max-desktop:hidden mb-2"
				alt={title}
			/>

			{#each descriptions as description, index (index)}
				<p>{description}</p>
			{/each}
			<a
				href={resolve(link)}
				class="bg-dark-30 hover:bg-dark-10 transition-colors duration-300 rounded-lg p-3 inline-block m-auto mt-2"
				>Ver mais sobre</a
			>
		</div>
	</section>
{/snippet}

<SectionHeader class="mb-4">Portfólio</SectionHeader>
<article class="flex flex-col gap-4">
	{#each projects as project, index (index)}
		{@const right = !(index % 2)}
		{@render projectCard(project, right)}
	{/each}
</article>
