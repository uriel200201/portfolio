import Image from 'next/image'
import React from 'react'
import Html from '../../../public/assets/skills/html.png'
import Css from '../../../public/assets/skills/css.png'
import Javascript from '../../../public/assets/skills/javascript.png'
import ReactImg from '../../../public/assets/skills/react.png'
import Tailwind from '../../../public/assets/skills/tailwind.png'
import Github from '../../../public/assets/skills/github1.png'
import NextJS from '../../../public/assets/skills/nextjs.png'
import Php from '../../../public/assets/skills/php.png'

const lenguajes = [
	{
		id: 1,
		name: 'HTML',
		image: Html,
	},
	{
		id: 2,
		name: 'CSS',
		image: Css,
	},
	{
		id: 3,
		name: 'Javascript',
		image: Javascript,
	},
	{
		id: 4,
		name: 'React',
		image: ReactImg,
	},
	{
		id: 5,
		name: 'NextJS',
		image: NextJS,
	},
	{
		id: 6,
		name: 'PHP',
		image: Php,
	},
	{
		id: 7,
		name: 'Tailwind',
		image: Tailwind,
	},
	{
		id: 8,
		name: 'GitHub',
		image: Github,
	},
]

export default function Herramientas() {
	return (
		<>
			<section
				id='herramientas'
				className='px-8 py-[60px] min-h-screen box-border'>
				<h2 className='text-center text-5xl pb-10 md:pt-5'>
					Herramientas y Lenguajes
				</h2>
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-8 md:pt-8'>
					{lenguajes.map((lenguaje) => (
						<div
							key={lenguaje.id}
							className='p-6 shadow-xl border-solid border-gray-400 border-[1px] rounded-xl hover:scale-105 ease-in duration-300'>
							<div className='grid grip-cols-1 md:grid-cols-2 gap-4 justify-center items-center'>
								<div className='m-auto'>
									<Image
										src={lenguaje.image}
										alt={lenguaje.name}
										width='64px'
										height='64px'
									/>
								</div>
								<div className='flex flex-col items-center justify-center'>
									<h3 className='text-base'>
										{lenguaje.name}
									</h3>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	)
}
