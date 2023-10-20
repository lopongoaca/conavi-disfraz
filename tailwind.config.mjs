/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: (theme) => ({
				'pattern': '#FFF'
			}),
			backgroundImage: (theme) => ({
				'pattern': "url('/trama.png')"
			}),
			fontFamily: {
				'helvetica': ['Helvetica', 'sans-serif']
			}
		},
	},
	plugins: [],
}
