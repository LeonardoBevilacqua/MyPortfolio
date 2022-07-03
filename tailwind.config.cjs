const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [],
	theme: {
		extend: {
			fontFamily: {
				Oswald: ['Oswald', 'sans-serif']
			},
			colors: {
				'light-60': colors.purple[100],
				'light-30': "rgb(18  0  37)",
				'light-10': colors.amber[600],
				'light-default': colors.white,
				'dark-60': colors.slate[800],
				'dark-30': colors.slate[900],
				'dark-10': colors.amber[600],
				'dark-default': colors.white
			}
		}
	},
	plugins: []
};
