'use client'

import React, { useRef } from 'react'
import { Button, Textarea, TextInput, Label } from 'flowbite-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faSpinner } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { basicSchema } from '../../schema/basicSchema'
import swal from 'sweetalert'

const CustomInputComponent = ({ field, form: { errors }, ...props }) => {
	if (field.name === 'mensaje') {
		return (
			<div>
				<Textarea {...field} {...props} />
				<ErrorMessage
					name={field.name}
					component={() => (
						<div className='text-sm text-red-500'>
							<FontAwesomeIcon
								icon={faCircleInfo}
								className='pr-[5px]'
							/>
							{errors[field.name]}
						</div>
					)}
				/>
			</div>
		)
	} else {
		return (
			<div>
				<TextInput {...field} {...props} />
				<ErrorMessage
					name={field.name}
					component={() => (
						<div className='text-sm text-red-500'>
							<FontAwesomeIcon
								icon={faCircleInfo}
								className='pr-[5px]'
							/>
							{errors[field.name]}
						</div>
					)}
				/>
			</div>
		)
	}
}

const Formulario = () => {
	const serviceID = 'service_ug71uff'
	const templateID = 'template_7rvwqif'
	const form = useRef()
	const mostrarMensaje = (titulo, mensaje, tipo) => {
		swal(titulo, mensaje, tipo, { button: 'Aceptar' })
	}
	return (
		<div className='px-3 text-left'>
			<Formik
				initialValues={{
					nombre: '',
					mail: '',
					telefono: '',
					profesion: '',
					mensaje: '',
				}}
				onSubmit={(values, { resetForm }) => {
					try {
						emailjs
							.send(
								serviceID,
								templateID,
								values,
								'zmWTa1_KPMFHXCQGB'
							)
							.then(
								() => {
									resetForm()
									mostrarMensaje(
										'Envío exitoso',
										'Se ha enviado correctamente su consulta',
										'success'
									)
									//console.log('Formulario enviado')
								},
								(error) => {
									resetForm()
									mostrarMensaje(
										'Ha ocurrido un error',
										'No se pudo enviar el mail correctamente. Error: ' +
											error,
										'error'
									)
									/*console.log(
										'No se pudo enviar ' + error.text
									)*/
								}
							)
					} catch {
						resetForm()
						mostrarMensaje(
							'Ha ocurrido un error',
							'No se pudo enviar el mail correctamente. Error: ' +
								error,
							'error'
						)
						//console.log('No se pudo enviar ')
					}
				}}
				validationSchema={basicSchema}>
				{({ isSubmitting }) => (
					<Form id='form' ref={form} className='px-[20%]'>
						<div className='grid md:grid-cols-2 md:gap-x-3 pb-3'>
							<div>
								<Label htmlFor='nombre'>Nombre:</Label>
								<Field
									component={CustomInputComponent}
									type='text'
									name='nombre'
									id='nombre'
									placeholder='Jhon Doe'
									// required
								/>
							</div>
							<div>
								<Label htmlFor='mail'>Mail:</Label>
								<Field
									component={CustomInputComponent}
									type='text'
									name='mail'
									id='mail'
									placeholder='ejemplo@correo.com'
									// required
								/>
							</div>
						</div>
						<div className='grid md:grid-cols-2 md:gap-x-3 pb-3'>
							<div>
								<Label htmlFor='telefono'>Teléfono:</Label>
								<Field
									component={CustomInputComponent}
									type='tel'
									name='telefono'
									id='telefono'
									placeholder=''
									// required
								/>
							</div>
							<div>
								<Label htmlFor='profesion'>Profesión:</Label>
								<Field
									component={CustomInputComponent}
									type='text'
									name='profesion'
									id='profesion'
									placeholder='Desarrollador Web'
									// required
								/>
							</div>
						</div>
						<div className='pb-5'>
							<Label htmlFor='mensaje'>Mensaje:</Label>
							<Field
								component={CustomInputComponent}
								as='textarea'
								name='mensaje'
								id='mensaje'
								cols='50'
								rows='5'
								placeholder='Ingrese su consulta'
								// required
							/>
						</div>
						<div className='flex flex-col items-center gap-y-3'>
							{isSubmitting ? (
								<Button disabled className='w-full'>
									<FontAwesomeIcon
										icon={faSpinner}
										className='inline w-4 h-4 mr-3 text-white animate-spin'
									/>
									Enviando
								</Button>
							) : (
								<Button
									type='submit'
									size='lg'
									className='w-full'>
									Enviar
								</Button>
							)}
						</div>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default Formulario
