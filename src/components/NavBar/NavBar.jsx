import { Navbar } from 'flowbite-react'
import Link from 'next/link'
import NavItem from './NavItem'
import { useState, useEffect } from 'react'

const MENU_LIST = [
	{ text: 'Inicio', href: '/' },
	{ text: 'Herramientas', href: '/#herramientas' },
	{ text: 'Sobre Mi', href: '/#sobreMi' },
	{ text: 'Proyectos', href: '/#proyectos' },
	{ text: 'Contacto', href: '/contacto' },
]

const NavBar = () => {
	const [activeSection, setActiveSection] = useState('/')

	useEffect(() => {
		const handleScroll = () => {
			const sectionElements = Array.from(
				document.querySelectorAll('section')
			)
			// console.log({ sectionElements })

			const scrollPosition = window.scrollY

			sectionElements.forEach((section) => {
				const sectionOffset = section.offsetTop

				if (
					scrollPosition >= sectionOffset - 160 &&
					scrollPosition < sectionOffset + section.offsetHeight
				) {
					const linkMap = MENU_LIST.reduce((map, item) => {
						map[item.text.toLowerCase()] = item.href
						return map
					}, {})

					const link =
						linkMap[section.id.toLowerCase()] || `/#${section.id}`

					setActiveSection(link)
				}
			})
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div>
			<Navbar fluid={false} rounded={true}>
				<Link href='/'>
					<Navbar.Brand>
						<h2 className='self-center whitespace-nowrap text-3xl font-semibold dark:text-white'>
							Uriel <span className='text-[#800080]'>J.</span>
						</h2>
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle />
				<Navbar.Collapse>
					{MENU_LIST.map((menu) => (
						<div
							onClick={() => setActiveSection(menu.href)}
							key={menu.text}>
							<NavItem
								active={menu.href === activeSection}
								{...menu}
							/>
						</div>
					))}
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default NavBar
