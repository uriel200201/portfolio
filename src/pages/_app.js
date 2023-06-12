import NavBar from '../components/NavBar/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<div className='sticky top-0 z-50 shadow-xl'>
				<NavBar />
			</div>
			<div>
				<Component {...pageProps} />
			</div>
		</>
	)
}
export default MyApp
