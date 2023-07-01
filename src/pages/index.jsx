import Layout from '../components/Layout'
import Inicio from '../components/Inicio'
import Herramientas from '../components/Herramientas/Herramientas'
import About from '../components/About/About'
import Proyectos from '../components/Proyectos/Proyectos'
import Contacto from '../components/Contacto/Contacto'

export default function Home() {
	return (
		<div>
			<Layout robots='index' home>
				<Inicio />
				<Herramientas />
				<About />
				<Proyectos />
				<Contacto />
			</Layout>
		</div>
	)
}
