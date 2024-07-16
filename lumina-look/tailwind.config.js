/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				bgGreen: '#3c5453',
				lightGreen: '#777f7e',
				accentOrange: '#d66055',
			},
		},
	},
	plugins: [],
};
