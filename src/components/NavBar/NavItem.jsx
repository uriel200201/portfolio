import Link from 'next/link'
const NavItem = ({ text, href, active }) => {
	return (
		<Link href={href}>
			<a className={`${active ? 'text-indigo-600' : ''}`}>{text}</a>
		</Link>
	)
}

export default NavItem
