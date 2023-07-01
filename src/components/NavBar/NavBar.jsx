import { Navbar } from 'flowbite-react'
import Link from 'next/link'
import * as reactScroll from 'react-scroll'
import NavItem from './NavItem'
import { useState, useEffect, useRef } from 'react'
import Router, { useRouter } from 'next/router'

const MENU_LIST = [
	{ text: 'Inicio', id: 'inicio', href: '/' },
	{ text: 'Herramientas', id: 'herramientas', href: '/#herramientas' },
	{ text: 'Sobre Mi', id: 'sobreMi', href: '/#sobreMi' },
	{ text: 'Proyectos', id: 'proyectos', href: '/#proyectos' },
	{ text: 'Contacto', id: 'contacto', href: '/#contacto' },
]

const classes = {
	navbarSolid:
		'md:transition md:duration-300 md:ease-in-out text-black shadow-md',
	navbarTransparent:
		'md:bg-transparent md:text-white md:transition md:duration-300 md:ease-in-out',
}

const NavBar = () => {
	const { asPath } = useRouter()
	const [activeSection, setActiveSection] = useState('')
	const [navBackground, setNavBackground] = useState(
		classes.navbarTransparent
	)

	const navRef = useRef()
	navRef.current = navBackground

	useEffect(() => {
		//console.log('useEffect')

		const handleScroll = () => {
			const show = window.scrollY > 20
			if (show) {
				setNavBackground(classes.navbarSolid)
			} else {
				setNavBackground(classes.navbarTransparent)
			}

			const sectionElements = Array.from(
				document.querySelectorAll('section')
			)
			//console.log({ sectionElements })

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

		if (typeof window !== 'undefined') {
			if (asPath === '/contacto') {
				setActiveSection('/contacto')
				setNavBackground(classes.navbarSolid)
			} else {
				handleScroll()
			}

			window.addEventListener('scroll', handleScroll)
			window.addEventListener('load', handleScroll)

			return () => {
				window.removeEventListener('scroll', handleScroll)
			}
		}
	}, [asPath])

	return (
		<div>
			<Navbar
				fluid={false}
				rounded={true}
				className={`${navRef.current} absolute w-full`}>
				<h2 className='self-center whitespace-nowrap text-3xl font-semibold dark:text-white'>
					<reactScroll.Link
						to='inicio'
						spy={true}
						smooth={true}
						duration={500}>
						Uriel <span className='text-[#800080]'>J.</span>
					</reactScroll.Link>
				</h2>
				<Navbar.Toggle />
				<Navbar.Collapse className='flex flex-col text-center my-4 '>
					{MENU_LIST.map((menu) => (
						<li
							onClick={() => setActiveSection(menu.href)}
							key={menu.text}
							className='md:hover:text-indigo-400 md:hover:transition md:hover:duration-300 md:hover:ease-in-out'>
							<NavItem
								active={menu.href === activeSection}
								{...menu}
							/>
						</li>
					))}
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default NavBar
