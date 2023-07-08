import React from 'react'
import Link from 'next/link'
import useVerificarPagina from '../../hooks/useVerificarPagina'

const CardProyecto = ({ owner, name, html_url, homepage }) => {
	const link = homepage || `https://${owner.login}.github.io/${name}`
	const existe = useVerificarPagina({ url: link })

	return (
		<>
			<Link passHref href={existe ? link : html_url} target='_blank'>
				<div className='p-6 shadow-xl border-solid border-gray-400 border-[1px] rounded-xl hover:scale-105 ease-in duration-300'>
					<div className='grid grip-cols-1 md:grid-cols-2 gap-4 justify-center items-center'>
						<div className='m-auto'></div>
						<div className='flex flex-col items-center justify-center'>
							<h3 className='text-base'>{name}</h3>
						</div>
					</div>
				</div>
			</Link>
		</>
	)
}

export default CardProyecto
