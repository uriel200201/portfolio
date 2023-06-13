import Head from 'next/head'
import Script from 'next/script'
export default function Layout({
	children,
	title,
	description,
	author,
	copyright,
	robots,
	keywords,
}) {
	return (
		<>
			<Head>
				<link rel='icon' href='favicon.ico' />
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='author' content={author} />
				<meta name='copyright' content={copyright} />
				<meta name='robots' content={robots} />
				<meta name='keywords' content={keywords} />
				{/* Google tag (gtag.js) */}
			</Head>
			<Script
				async
				src='https://www.googletagmanager.com/gtag/js?id=G-LJ4N842RX4'></Script>
			<Script
				id='googleAnalytics'
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-LJ4N842RX4');
					`,
				}}
			/>
			<main lang='es'>{children}</main>
		</>
	)
}

Layout.defaultProps = {
	title: 'Uriel Agustin Jardel Ponce',
	description:
		'Me llamo Uriel Agustin Jardel Ponce, soy desarrollador web Front-End.',
	author: 'Uriel Agustin Jardel Ponce',
	copyright: 'Uriel Agustin Jardel Ponce',
	robots: 'noindex',
	keywords:
		'Uriel, Agustin, Jardel, Ponce, Desarrollador Web, Front-End, Front End, Full-Stack, Next.Js, React.Js, HTML, CSS, JS, JavaScript, PHP, Tailwind, GitHub',
}
