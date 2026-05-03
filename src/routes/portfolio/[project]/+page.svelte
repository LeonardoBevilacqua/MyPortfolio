<script lang="ts">
	import SectionHeader from '$lib/atoms/SectionHeader.svelte';
	import type { ProjectContent, ProjectDetails } from '$lib/data/Project.type';
	import type { PageProps } from './$types';

	const project: ProjectDetails = {
		title: 'Project Title',
		subtitle: 'Project subtitle',
		descriptions: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit tortor eu ultricies dapibus. Vestibulum vestibulum ante eget ante malesuada mollis. Vivamus efficitur purus ut orci tristique, nec suscipit massa interdum. Aliquam a vehicula leo, non maximus est. Vivamus viverra ipsum nec massa fermentum euismod. Sed at purus nec sapien feugiat condimentum. Pellentesque maximus mauris vel tristique tempus. Nunc venenatis lectus eget nisl ornare euismod. Proin lectus ex, sagittis in dictum id, gravida eu lorem. Vestibulum vehicula vel ipsum congue mollis.',
			'Maecenas accumsan ex elit, non volutpat libero ultricies ac. In rutrum, velit nec maximus vestibulum, massa nibh egestas odio, a maximus leo nulla nec velit. Proin et nibh hendrerit, venenatis leo at, sollicitudin ex. Sed lorem lorem, accumsan ac molestie posuere, laoreet sed sapien. Quisque dui risus, rhoncus eget felis eget, posuere dapibus justo. Vivamus et urna vitae sapien volutpat rutrum. In vel accumsan sem. Proin faucibus nulla sapien, dignissim consequat dolor vehicula vel. Suspendisse leo nisi, tristique sed ex non, interdum cursus dolor. Quisque vitae massa et nisi dignissim porta in molestie ligula. Integer cursus velit elit. Nullam a tellus lorem. Vestibulum pharetra sapien eget ultrices congue. Morbi in purus lacinia, ultricies eros non, aliquet quam. Donec malesuada efficitur aliquam. Aenean id ipsum non erat gravida vestibulum lobortis pharetra nulla.'
		],
		link: '/portfolio/project-title-1',
		imgLink: '/images/portfolio/choose-your-game/choose_your_game_01.PNG',

		content: [
			{
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit tortor eu ultricies dapibus. Vestibulum vestibulum ante eget ante malesuada mollis. Vivamus efficitur purus ut orci tristique, nec suscipit massa interdum. Aliquam a vehicula leo, non maximus est. Vivamus viverra ipsum nec massa fermentum euismod. Sed at purus nec sapien feugiat condimentum. Pellentesque maximus mauris vel tristique tempus. Nunc venenatis lectus eget nisl ornare euismod. Proin lectus ex, sagittis in dictum id, gravida eu lorem. Vestibulum vehicula vel ipsum congue mollis.'
			},
			{
				text: 'Maecenas accumsan ex elit, non volutpat libero ultricies ac. In rutrum, velit nec maximus vestibulum, massa nibh egestas odio, a maximus leo nulla nec velit. Proin et nibh hendrerit, venenatis leo at, sollicitudin ex. Sed lorem lorem, accumsan ac molestie posuere, laoreet sed sapien. Quisque dui risus, rhoncus eget felis eget, posuere dapibus justo. Vivamus et urna vitae sapien volutpat rutrum. In vel accumsan sem. Proin faucibus nulla sapien, dignissim consequat dolor vehicula vel. Suspendisse leo nisi, tristique sed ex non, interdum cursus dolor. Quisque vitae massa et nisi dignissim porta in molestie ligula. Integer cursus velit elit. Nullam a tellus lorem. Vestibulum pharetra sapien eget ultrices congue. Morbi in purus lacinia, ultricies eros non, aliquet quam. Donec malesuada efficitur aliquam. Aenean id ipsum non erat gravida vestibulum lobortis pharetra nulla.'
			},
			{
				image: '/images/portfolio/choose-your-game/choose_your_game_01.PNG',
				description: 'Image'
			}
		]
	};

	let { params }: PageProps = $props();
	console.log(`Path param ${params.project}`);
</script>

{#snippet textContent({ text }: ProjectContent)}
	{#if text}
		<p class="text-lg leading-7 mb-3 mx-auto">{text}</p>
	{/if}
{/snippet}

{#snippet imageContent({ image, description }: ProjectContent)}
	{#if image}
		<img class="mb-3 rounded-md mx-auto" src={image} alt={description} />
	{/if}
{/snippet}

{#snippet videoContent({ video, description }: ProjectContent)}
	{#if video}
		<iframe
			class="mb-3 w-full lg:w-9/12 h-96 rounded-md mx-auto"
			src={video}
			title={description}
			frameborder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	{/if}
{/snippet}

{#snippet descriptionContent({ description }: ProjectContent)}
	{#if description}
		<i class="mb-3 text-center block mx-auto">{description}</i>
	{/if}
{/snippet}

{#snippet contentBody(contentList: ProjectContent[])}
	{#each contentList as content, index (index)}
		{@render textContent(content)}
		{@render imageContent(content)}
		{@render videoContent(content)}
		{@render descriptionContent(content)}
	{/each}
{/snippet}

<SectionHeader class="mb-4">{project.title}</SectionHeader>

<article class="text-white">
	{@render contentBody(project.content)}
</article>
