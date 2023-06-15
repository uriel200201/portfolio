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

export default function Proyectos() {
	return (
		<div>
			<section id='proyectos' className='px-8 py-12 min-h-screen'>
				<h2 className='text-center text-5xl py-10'>Proyectos</h2>
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-8 md:pt-8'>
					<div className='p-6 shadow-xl border-solid border-gray-400 border-[1px] rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={Html}
									width='64px'
									height='64px'
									alt='html'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>HTML</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl border-solid border-gray-400 border-[1px] rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={Css}
									width='64px'
									height='64px'
									alt='css'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>CSS</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl border-solid border-gray-400 border-[1px] rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={Javascript}
									width='64px'
									height='64px'
									alt='javascript'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>JavaScript</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl border-solid border-gray-400 border-[1px] rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={ReactImg}
									width='64px'
									height='64px'
									alt='react'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>React</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl border-solid border-gray-400 border-[1px] rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={Tailwind}
									width='64px'
									height='64px'
									alt='tailwind'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Tailwind</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl border-solid border-gray-400 border-[1px] rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={Github}
									width='64px'
									height='64px'
									alt='github'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Github</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl border-solid border-gray-400 border-[1px] rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={NextJS}
									width='64px'
									height='64px'
									alt='next'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Next</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl border-solid border-gray-400 border-[1px] rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={Php}
									width='64px'
									height='64px'
									alt='php'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>PHP</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
