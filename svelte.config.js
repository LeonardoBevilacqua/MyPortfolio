import adapter from '@sveltejs/adapter-static'; // https://github.com/sveltejs/kit/tree/master/packages/adapter-static
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

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
		},
        paths: {
            base: dev ? '' : '/MyPortfolio'
        },
        appDir: 'internal'
	}
};

export default config;
