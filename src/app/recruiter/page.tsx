import Image from 'next/image'

export default function Home() {
	return (
		<main className='grid min-h-screen grid-cols-2 lg:grid-cols-1 gap-10 lg:gap-5 items-center justify-between px-24 py-10 relative 2xl:px-10 md:gap-0'>
			<Image
				src={'/main-decor.png'}
				width={1000}
				height={600}
				className='absolute right-0 top-0 h-full  bottom-0 -z-[1] lg:h-auto lg:top-auto lg:hidden'
				alt='decor'
			/>
			<Image
				src={'/main-decor-mob.png'}
				width={1000}
				height={600}
				className='absolute right-0 top-0 h-full  bottom-0 -z-[1] lg:h-auto lg:top-auto hidden lg:block'
				alt='decor'
			/>
			<div>
				<div className='badge mb-4 md:mb-3'>Твоя професія</div>
				<h1 className='mb-4 lg:mb-[12px] relative'>Рекрутер</h1>
				<p className='max-w-[682px] mb-10 md:text-[14px] md:mb-4'>
					Ви любите працювати з людьми та шукати таланти. Ваші навички підбору
					кадрів і вміння будувати стосунки роблять вас чудовим фахівцем у цій
					сфері
				</p>
				<Image
					src={'/three.png'}
					height={294}
					width={294}
					alt='Recruiter'
					className='rounded-full md:w-[150px] md:h-[150px]'
				/>
			</div>
			<div>
				<Image
					src={'/money.png'}
					height={866}
					width={705}
					alt='Person'
					className='ml-auto lg:h-full lg:w-[100%]'
				/>
			</div>
		</main>
	)
}
