/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	reactStrictMode: false,
	swcMinify: true,
	i18n: {
		locales: ['es'],
		defaultLocale: 'es',
	},
}

module.exports = nextConfig
