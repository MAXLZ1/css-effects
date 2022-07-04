import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			edge: false,
			split: true
		}),
		alias: {
			'@routes': path.resolve('./src/routes'),
			'@utils': path.resolve('./src/utils'),
			'@components': path.resolve('./src/lib/components'),
		},
	}
};

export default config;
