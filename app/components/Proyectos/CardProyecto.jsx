import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { FiLink2 } from 'react-icons/fi'
import { Tooltip } from 'flowbite-react'
import imgProyectos from '../../../public/assets/img/projects/yo.jpg'

const CardProyecto = ({
	owner,
	name,
	html_url,
	homepage,
	description,
	image,
	topics,
}) => {
	return (
		<div className='transition'>
			<div className='mx-5 rounded overflow-hidden shadow-lg bg-white'>
				<Image
					className='w-full h-48 object-cover'
					src={imgProyectos}
					alt={name}
				/>
				<div className='px-6 py-4'>
					<div className='font-bold text-xl mb-2'>{name}</div>
					<p className='text-gray-700 text-base'>{description}</p>
				</div>
				<div className='px-6 py-4 flex gap-4 text-xl'>
					<Tooltip content='Repositorio'>
						{console.log(owner)}
						<Link
							alt='Repositorio'
							href={`https://github.com/${owner.login}/${name}`}
							target='_blank'
							passHref>
							<AiFillGithub />
						</Link>
					</Tooltip>
					<Tooltip content='Página web'>
						<Link href={`${homepage}`} target='_blank' passHref>
							<FiLink2 />
						</Link>
					</Tooltip>
				</div>
				<div className='px-6 py-4'>
					{topics.map((tag, index) => (
						<span
							key={index}
							className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	)
}

export default CardProyecto
