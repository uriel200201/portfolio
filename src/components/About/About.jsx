import Image from 'next/image'
import yo from '../../../public/assets/img/yo.jpg'
export default function About() {
	return (
		<div>
			<section
				id='sobreMi'
				className='px-8 py-[60px] min-h-screen bg-white'>
				<h2 className='text-center text-5xl pb-10 md:pt-5'>Sobre mi</h2>
				<div className='flex flex-col lg:flex-row items-center justify-around gap-8 md:pt-8'>
					<div className='w-[50%] lg:w-[90%]'>
						<Image
							src={yo}
							alt='Sobre mi'
							className='rounded-[100%]'
						/>
					</div>
					<div className='flex flex-col gap-8'>
						<div>
							<h3>Presentación:</h3>
							<p>
								Me llamo Uriel y soy Desarrollador Web Front-End
								Jr.
								<br /> Hace tres años que estudio todo lo
								relacionado con el desarrollo web del lado del
								cliente, hace un año empecé a familiarizarme con
								el desarrollo web Back-End. Me forme en{' '}
								<a href='https://ar.academianumen.com/desarrollo-web-full-stack/'>
									Numen Academy
								</a>{' '}
								y en los centros de formación profesional de la
								Ciudad de Buenos Aires , ademas de ciertos
								programas que brinda la Ciudad de Buenos Aires,
								como lo son{' '}
								<a href='https://aprendeprogramandoinscripciones.bue.edu.ar/nosotros'>
									Aprendé Programando
								</a>{' '}
								y{' '}
								<a href='https://www.buenosaires.gob.ar/educacion/codoacodo/preguntas-frecuentes'>
									Codo a Codo
								</a>
								, en estos participe de varios de los cursos que
								brindan, tambien cursos de pago como lo son el
								curso de HTML y CSS de{' '}
								<a href='https://www.pasaporterocketcode.com/cursos/html-y-css-inicial'>
									Rocket Code
								</a>
								.
							</p>
						</div>
						<div>
							<h3>Perfil:</h3>
							Como estudiante de una carrera, mi principal meta es
							formar parte de una empresa u organismo en la cual
							poder volcar mis conocimientos, de poder incorporar
							nuevos y que me permita cursar la carrera sin
							dificultades. Gracias a la formación que tuve, en
							los diferentes cursos y en la carrera puedo
							desenvolverme en cualquier entorno de trabajo, ya
							sea de manera presencial u on-line. Mis principales
							cualidades son: facilidad para trabajar en equipo,
							ser autodidacta, resolutivo, busco la manera de
							hacer las cosas en el menor tiempo posible.
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
