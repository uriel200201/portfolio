import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Layout from '../../components/Layout'
import swal from 'sweetalert'
const process = require('dotenv').config()

export default function Contacto() {
	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm(
				process.env.SERVICE_ID,
				process.env.TEMPLATE_ID,
				form.current,
				process.env.PUBLIC_KEY
			)
			.then(
				() => {
					swal(
						'Envio exitoso',
						'Se ha enviado correctamente su consulta',
						'success',
						{ button: 'aceptar' }
					)
				},
				() => {
					swal(
						'Ha ocurrido un error',
						'No se pudo enviar el mail correctamente',
						'error',
						{
							button: 'aceptar',
						}
					)
				}
			)
	}

	return (
		<div>
			<Layout title='Contáctame'>
				<section className='pt-20 pb-0' id='contacto'>
					<h2 className='text-center text-3xl pb-4'>Contáctame</h2>
					<form ref={form} onSubmit={sendEmail} className='px-[20%]'>
						<div className='grid md:grid-cols-2 md:gap-4'>
							<div className='md:mb-6 mb-4'>
								<label
									htmlFor='nombre'
									className='block mb-2 text-sm font-medium text-black'>
									nombre
								</label>
								<input
									type='text'
									id='nombre'
									name='nombre'
									className='shadow-sm border  text-sm rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-200 border-gray-600'
									required
								/>
							</div>
							<div className='md:mb-6 mb-4'>
								<label
									htmlFor='mail'
									className='block mb-2 text-sm font-medium text-black'>
									Mail
								</label>
								<input
									type='email'
									id='mail'
									name='mail'
									className='shadow-sm border  text-sm rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-200 border-gray-600'
									placeholder='name@flowbite.com'
									required
								/>
							</div>
							<div className='md:mb-6 mb-4'>
								<label
									htmlFor='telefono'
									className='block mb-2 text-sm font-medium text-black'>
									Telefono
								</label>
								<input
									type='tel'
									id='telefono'
									name='telefono'
									className='shadow-sm border  text-sm rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-200 border-gray-600'
									required
								/>
							</div>
							<div className='md:mb-6 mb-4'>
								<label
									htmlFor='profesión'
									className='block mb-2 text-sm font-medium text-black'>
									Profesion
								</label>
								<input
									type='text'
									id='profesion'
									name='profesion'
									className='shadow-sm border  text-sm rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-200 border-gray-600'
									required
								/>
							</div>
						</div>
						<div className='w-[100%] mb-4'>
							<label
								htmlFor='mensaje'
								className='block mb-2 text-sm font-medium text-black'>
								Consluta
							</label>
							<textarea
								id='mensaje'
								name='mensaje'
								rows='4'
								className='shadow-sm border  text-sm rounded-lg focus:outline-none focus:ring: focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-200 border-gray-600'
								placeholder='Leave a comment...'></textarea>
						</div>
						<input
							type='submit'
							value='Send'
							className='border w-[100%] mb-4 border-green-500 inline rounded-full hover:bg-green-500 hover:border-green-500 duration-500 py-4 font-bold'
						/>
					</form>
				</section>
			</Layout>
		</div>
	)
}