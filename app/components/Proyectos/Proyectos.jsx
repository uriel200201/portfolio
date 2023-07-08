'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import CardProyecto from './CardProyecto'

export default function Proyectos() {
	const [proyectos, setProyectos] = useState([])

	useEffect(() => {
		const peticion = async () => {
			await axios
				.get('https://api.github.com/users/uriel200201/repos')
				.then((res) => {
					setProyectos(res.data)
				})
				.catch((error) => console.error(error))
		}
		peticion()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	console.log(proyectos[5])
	return (
		<div>
			<section id='proyectos' className='px-8 py-[60px] min-h-screen'>
				<h2 className='text-center text-5xl pb-10 md:pt-5'>
					Proyectos
				</h2>
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-8 md:pt-8'>
					{proyectos.map((proyecto, index) => (
						<CardProyecto key={index} {...proyecto} />
					))}
				</div>
			</section>
		</div>
	)
}
