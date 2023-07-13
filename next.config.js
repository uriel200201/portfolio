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
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		// Note: we provide webpack above so you should not `require` it
		// Perform customizations to webpack config
		config.plugins.push(
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery',
			})
		)
		// Important: return the modified config
		return config
	},
}

module.exports = nextConfig
