import Link from 'next/link'
import React from 'react'

export default function Inicio() {
	return (
		<div>
			<section
				className='flex items-center justify-center min-h-screen'
				id='inicio'>
				{/**Overlay */}
				<div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#0575E6] to-[#00F260] opacity-90 z-[2]' />
				<div className='flex items-center justify-center p-5 text-white z-[2] lg:ml-[-10rem]'>
					<div className='text-center md:text-left space-y-10 '>
						<h1 className='cursor-default select-none'>
							Desarrollador Web <br /> Full Stack
						</h1>
						<p className='border inline-block rounded-full px-7 py-5 mx-auto hover:bg-[#ce3232] hover:border-[#ce3232] duration-500'>
							<Link href='/contacto'>
								<a>¿Tenés un proyecto?</a>
							</Link>
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}
