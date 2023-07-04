//import Link from 'next/link'
import React, { forwardRef } from 'react'
import { Link } from 'react-scroll'

const ForwardedNavItem = forwardRef(function ForwardedNavItem(
	{ text, id, active },
	ref
) {
	return (
		<Link
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

const NavItem = ({ text, id, active }) => {
	const ref = React.useRef()

	return <ForwardedNavItem text={text} id={id} active={active} ref={ref} />
}

export default NavItem
