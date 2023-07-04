'use Client'
import React from 'react'
import emailjs from '@emailjs/browser'
import Formulario from './Formulario'

const emailJs = async (e) => {
	e.preventDefault()

	// 	// Función para mostrar mensajes al usuario

	try {
		const res = await emailjs.sendForm(
			'service_ug71uff',
			'template_7rvwqif',
			form.current,
			'zmWTa1_KPMFHXCQGB'
		)

		console.log(res)
	} catch (err) {
		console.error(err)
	}
}

export default function Contacto() {
	//const form = useRef()

	return (
		<>
			<section
				className='px-8 pt-[60px] min-h-screen bg-white'
				id='contacto'>
				<h2 className='text-center text-5xl pb-10 md:pt-5'>
					Contáctame
				</h2>
				<Formulario />
			</section>
		</>
	)
}
