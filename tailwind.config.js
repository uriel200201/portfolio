/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}*/
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
		'./node_modules/flowbite/**/*.js',
		'./node_modules/flowbite-react/**/*.js',
	],
	theme: {
		extend: {},
	},
	plugins: [require('flowbite/plugin'), require('tailwindcss-animated')],
}
