//import Link from 'next/link'

import React, { forwardRef } from 'react'
import { Link } from 'react-scroll'

const ForwardedNavItem = forwardRef(function ForwardedNavItem(
	{ text, id, active, cerrar },
	ref
) {
	return (
		<Link
			onClick={cerrar}
			to={id}
			spy={true}
			smooth={true}
			duration={500}
			className={`${active ? 'text-indigo-600' : ''}`}
			ref={ref}>
			{text}
		</Link>
	)
})

const NavItem = ({ text, id, active, cerrar }) => {
	const ref = React.useRef()

	return (
		<ForwardedNavItem
			text={text}
			id={id}
			active={active}
			ref={ref}
			cerrar={cerrar}
		/>
	)
}

export default NavItem
