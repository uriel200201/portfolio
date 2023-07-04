import * as yup from 'yup'

export const basicSchema = yup.object().shape({
	nombre: yup
		.string()
		.label('Nombre')
		.required('Este es un campo obligatorio')
		.min(2, 'Por favor coloque un nombre válido'),

	mail: yup
		.string()
		.label('Mail')
		.required('Este es un campo obligatorio')
		.min(2, 'Por favor coloque un apellido válido'),
	telefono: yup
		.number()
		.positive()
		.integer()
		.required('Este es un campo obligatorio')
		.test(
			'verifiacar',
			'El teléfono tiene que tener 10 números',
			function (value) {
				return value.toString().length === 10
			}
		),
	profesion: yup
		.string()
		.label('Profesión')
		.required('Este es un campo obligatorio')
		.min(2, 'Por favor coloque una profesión válido'),
	mensaje: yup
		.string()
		.label('Mensaje')
		.required('Este es un campo obligatorio')
		.min(10, 'El mensaje debe contener al menos 10 caracteres'),
})
