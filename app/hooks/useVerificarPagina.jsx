import { useState, useEffect } from 'react'

const useVerificarPagina = ({ url }) => {
	const [pageExists, setPageExists] = useState(false)

	useEffect(() => {
		const checkPageExistence = async () => {
			try {
				const res = await fetch(url)
				setPageExists(res.ok)
			} catch (error) {
				setPageExists(false)
			}
		}

		checkPageExistence()
	}, [url])

	return pageExists
}

export default useVerificarPagina
