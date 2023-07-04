import Script from 'next/script'
import '../styles/globals.css'
import NavBar from './components/NavBar/NavBar'

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}) {
	const layout = {
		title: 'Uriel Agustin Jardel Ponce',
		description:
			'Me llamo Uriel Agustin Jardel Ponce, soy desarrollador web Front-End.',
		author: 'Uriel Agustin Jardel Ponce',
		copyright: 'Uriel Agustin Jardel Ponce',
		robots: 'noindex',
		keywords:
			'Uriel, Agustin, Jardel, Ponce, Desarrollador Web, Front-End, Front End, Full-Stack, Next.Js, React.Js, HTML, CSS, JS, JavaScript, PHP, Tailwind, GitHub, Uriel Jardel, Uriel Agustin, Jardel Ponce',
	}
	return (
		<html lang='es'>
			<head>
				<link rel='icon' href='favicon.ico' />
				<title>Uriel Jardel</title>
				<meta name='description' content={layout.description} />
				<meta name='author' content={layout.author} />
				<meta name='copyright' content={layout.copyright} />
				<meta name='robots' content={layout.robots} />
				<meta name='keywords' content={layout.keywords} />
				{/* Google tag (gtag.js) */}
				<meta
					name='google-site-verification'
					content='kBRiaYOzjGgHryaBFho3Xkc4UKO-keyt2djq3dnrEOE'
				/>
			</head>
			<body>
				<div className='sticky top-0 z-50 shadow-xl'>
					<NavBar />
				</div>
				{children}
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
			</body>
		</html>
	)
}
