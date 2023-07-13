import React from 'react'
import dynamic from 'next/dynamic'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

let $ = require('jquery')
if (typeof window !== 'undefined') {
	window.$ = window.jQuery = require('jquery')
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
	ssr: false,
})

import CardProyecto from './CardProyecto'
import CardLoading from './CardLoading'

const Carousel = ({ proyectos, loading }) => {
	console.log('🚀 ~ file: Carousel.jsx:20 ~ Carousel ~ loading:', loading)
	const options = {
		margin: 30,
		responsiveClass: true,
		nav: true,
		dots: true,
		autoplay: false,
		smartSpeed: 1000,
		navClass: ['owl-prev', 'owl-next'],
		navText: ['', ''],
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			600: {
				items: 2,
			},
			700: {
				items: 3,
			},
			1000: {
				items: 4,
			},
		},
	}

	return (
		<>
			<OwlCarousel
				{...options}
				className='owl-theme'
				margin={10}
				loop
				nav={true}
				navText={[
					'<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>',
					'<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>',
				]}
				dots={true}
				animateIn={true}>
				{loading ? (
					<CardLoading />
				) : (
					proyectos.map((proyecto, index) => (
						<CardProyecto key={index} {...proyecto} />
					))
				)}
			</OwlCarousel>
		</>
	)
}

export default Carousel
