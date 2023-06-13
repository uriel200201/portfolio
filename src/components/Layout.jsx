import Head from 'next/head'
import favicon from '../../public/favicon.ico'
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
			{/* <Head>
				<link rel='icon' href={favicon} />
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='author' content={author} />
				<meta name='copyright' content={copyright} />
				<meta name='robots' content={robots} />
				<meta name='keywords' content={keywords} />
			</Head> */}
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
