/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	i18n: {
		locales: ['es'],
		defaultLocale: 'es',
	},
}

module.exports = nextConfig
