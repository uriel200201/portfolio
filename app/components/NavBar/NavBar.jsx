'use client'
import * as reactScroll from 'react-scroll'
import NavItem from './NavItem'
import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import useScreenSize from '../../hooks/useScreenSize'

const MENU_LIST = [
	{ text: 'Inicio', id: 'inicio', href: '/' },
	{ text: 'Herramientas', id: 'herramientas', href: '/#herramientas' },
	{ text: 'Sobre Mi', id: 'sobreMi', href: '/#sobreMi' },
	{ text: 'Proyectos', id: 'proyectos', href: '/#proyectos' },
	{ text: 'Contacto', id: 'contacto', href: '/#contacto' },
]

const classes = {
	navbarSolid:
		'transition duration-300 ease-in-out text-black shadow-md bg-white',
	navbarTransparent:
		'bg-transparent text-white transition duration-300 ease-in-out',
}

const NavBar = () => {
	const { width } = useScreenSize()
	const { asPath } = useRouter()
	const [activeSection, setActiveSection] = useState('')
	const [navBackground, setNavBackground] = useState(
		classes.navbarTransparent
	)
	const [isOpen, setIsOpen] = useState(false)

	const toggleNavbar = () => {
		setIsOpen(!isOpen)
	}
	const closeNavbar = () => {
		console.log('navbar close')
		setIsOpen(false)
	}
	const navRef = useRef()
	navRef.current = navBackground

	useEffect(() => {
		if (width > 768) {
			setIsOpen(false)
		}
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
	}, [asPath, width])
	// TODO: Crear un navbar
	return (
		<div>
			<nav
				className={`${navRef.current} ${
					isOpen ? 'shadow-none' : ''
				} top-0 left-0 absolute w-full`}>
				<div className='flex items-center justify-between md:justify-around py-4 md:px-10 px-7'>
					<div className='flex items-center self-center dark:text-white text-3xl font-semibold'>
						<h2 className=''>
							<reactScroll.Link
								to='inicio'
								spy={true}
								smooth={true}
								duration={500}>
								Uriel <span className='text-[#800080]'>J.</span>
							</reactScroll.Link>
						</h2>
					</div>

					<button
						onClick={() => toggleNavbar()}
						className='text-3xl cursor-pointer md:hidden'>
						<FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
					</button>

					<ul
						className={`${
							navRef.current
						} md:shadow-none md:bg-transparent  md:pb-0 pb-12 absolute md:static md:z-auto md:backdrop-blur-none flex md:flex-row items-center flex-col backdrop-blur z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in md:transition-none ${
							isOpen ? 'top-16' : 'top-[-490px]'
						}`}>
						{MENU_LIST.map((menu) => (
							<li
								key={menu.text}
								className='md:hover:text-indigo-400 md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:ml-8 text-xl md:text-sm md:my-0 my-7'>
								<NavItem
									cerrar={closeNavbar}
									active={menu.href === activeSection}
									{...menu}
								/>
							</li>
						))}
					</ul>
				</div>
			</nav>
			{/* <Navbar
				fluid={false}
				rounded
				`}>
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
					
				</Navbar.Collapse>
			</Navbar> */}
		</div>
	)
}

export default NavBar
