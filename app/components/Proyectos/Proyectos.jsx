'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from './Carousel'

export default function Proyectos() {
	const [proyectos, setProyectos] = useState([])
	const [loading, setLoading] = useState(true)
	console.log('🚀 ~ file: Proyectos.jsx:9 ~ Proyectos ~ loading:', loading)

	useEffect(() => {
		const peticion = async () => {
			try {
				const response = await axios.get(
					'https://api.github.com/users/uriel200201/repos'
				)
				setProyectos(response.data)
				setLoading(false)
			} catch (error) {
				console.error(error)
			}
		}

		peticion()
	}, [])

	return (
		<div className=''>
			<section id='proyectos' className='px-8 py-[60px] min-h-screen'>
				<h2 className='text-center text-5xl pb-10 md:pt-5'>
					Proyectos
				</h2>
				<div>
					<Carousel proyectos={proyectos} loading={loading} />
				</div>
			</section>
		</div>
	)
}
