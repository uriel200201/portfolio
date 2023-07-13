import React from 'react'

const CardLoading = () => {
	return (
		<div className='transition'>
			<div className='md:w-50 lg:w-96 mx-5 rounded overflow-hidden shadow-lg bg-white'>
				<div class='animate-pulse flex flex-col space-x-4'>
					<div className='w-full h-48 object-cover bg-slate-700' />

					<div className='px-6 py-4 flex flex-col gap-2'>
						<div className='h-6 bg-slate-700'></div>
						<div class='grid grid-rows-2 gap-4'>
							<div class='h-2 bg-slate-700 rounded '></div>
							<div class='h-2 bg-slate-700 rounded '></div>
						</div>
					</div>
					<div className='px-6 py-4 flex gap-4 text-xl'>
						<div class='rounded-full  h-10 w-10'></div>
						<div class='rounded-full  h-10 w-10'></div>
					</div>
					<div className='px-6 py-4'>
						<span className='inline-block bg-slate-700 rounded-full px-3 py-1 mr-2'></span>
					</div>
				</div>
			</div>
			{/* <div class='mx-5 rounded overflow-hidden shadow-lg bg-white'>
				<div>
					<div class='rounded-full  h-10 w-10'></div>
					<div class='flex-1 space-y-6 py-1'>
						<div class='h-2 bg-slate-700 rounded'></div>
						<div class='space-y-3'>
							<div class='grid grid-cols-3 gap-4'>
								<div class='h-2 bg-slate-700 rounded col-span-2'></div>
								<div class='h-2 bg-slate-700 rounded col-span-1'></div>
							</div>
							<div class='h-2 bg-slate-700 rounded'></div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	)
}

export default CardLoading
