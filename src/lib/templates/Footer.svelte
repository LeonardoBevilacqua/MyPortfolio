<script lang="ts">
	import { interfaceData } from '$lib/lang/interface-data';
	import { type LangKey, getLangKey } from '$lib/lang/lang.utils';
	import type { LayoutProps } from '../../routes/$types';

	let { params }: LayoutProps = $props();
	const langKey: LangKey = $state(getLangKey(params.lang));
	const { developedWith } = interfaceData[langKey];
</script>

{#snippet verticalLine()}
	<svg
		width="2"
		xmlns="http://www.w3.org/2000/svg"
		height="48"
		id="screenshot-fae32aae-cbc4-80e9-8006-e0e1346bf532"
		viewBox="-3698 -5380 2 48"
		style="-webkit-print-color-adjust::exact"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		fill="none"
		version="1.1"
	>
		<g id="shape-fae32aae-cbc4-80e9-8006-e0e1346bf532">
			<g class="fills" id="fills-fae32aae-cbc4-80e9-8006-e0e1346bf532">
				<rect
					rx="0"
					ry="0"
					x="-3697.999999999999"
					y="-5379.999999999997"
					transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)"
					width="2"
					height="48"
					style="fill:#ffffff;fill-opacity:1"
				>
				</rect>
			</g>
		</g>
	</svg>
{/snippet}

<footer
	style="rightPanelFooter"
	class="rounded-lg p-5 dark:bg-dark-30 bg-light-30 flex gap-4 items-center justify-center"
>
	<img src="/logo.svg" alt="Logo" class="max-h-12" />
	{@render verticalLine()}
	<h3 class="text-xl font-bold dark:text-dark-10 text-light-10">Leonardo A. Bevilacqua</h3>
	<span class="text-white">&copy; {developedWith}: Sveltekit</span>
</footer>
