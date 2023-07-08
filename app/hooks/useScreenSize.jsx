import { useState, useEffect } from 'react'

const useScreenSize = () => {
	const [width, setWidth] = useState(null)
	const [height, setHeight] = useState(null)

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
		}

		if (typeof window !== 'undefined') {
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
			window.addEventListener('resize', handleResize)
		}

		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('resize', handleResize)
			}
		}
	}, [])

	return { width, height }
}

export default useScreenSize
