'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

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
	return (
		<div>
			<section id='proyectos' className='px-8 py-[60px] min-h-screen'>
				<h2 className='text-center text-5xl pb-10 md:pt-5'>
					Proyectos
				</h2>
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-8 md:pt-8'>
					{proyectos.map((proyecto, index) => (
						<Link
							href={`https://${proyecto.owner.login}.github.io/${proyecto.name}`}
							key={index}
							target='_blank'>
							<div className='p-6 shadow-xl border-solid border-gray-400 border-[1px] rounded-xl hover:scale-105 ease-in duration-300'>
								<div className='grid grip-cols-1 md:grid-cols-2 gap-4 justify-center items-center'>
									<div className='m-auto'></div>
									<div className='flex flex-col items-center justify-center'>
										<h3 className='text-base'>
											{proyecto.name}
										</h3>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>
		</div>
	)
}
