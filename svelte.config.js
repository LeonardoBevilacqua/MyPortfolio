import adapter from '@sveltejs/adapter-static'; // https://github.com/sveltejs/kit/tree/master/packages/adapter-static
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		prerender: { default: true },
		adapter: adapter(),
		vite: {
			ssr: {
				noExternal: ['@fortawesome/free-brands-svg-icons']
			}
		}
	}
};

export default config;