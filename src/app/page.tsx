import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<main className='grid min-h-screen grid-cols-2 lg:grid-cols-1 gap-10 lg:gap-5 items-center justify-between px-16 py-10 relative 2xl:px-10'>
			<Image
				src={'/main-decor.png'}
				width={800}
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
				<h1 className='mb-9 lg:mb-[14px] relative'>
					Тест на{' '}
					<Image
						src={'/tap.png'}
						alt='tab'
						height={255}
						width={255}
						className='absolute right-0 -top-[80px] left-[330px] 2xl:-top-[100px] 2xl:left-[220px] md:scale-50 md:left-[50px] md:-top-[120px]'
					/>
					<br />
					профпридатність
				</h1>
				<p className='max-w-[766px] mb-5'>
					Пройди опитування та обери,яка вакансiя пiдходить саме тобi <br />
					Це опитування,якщо ти у пошуку роботи або хочеш змiнити дiяльнiсть
				</p>
				<span className='text-[20px] mb-2 block lg:text-[14px]'>
					Всi вакансiї це не вiддалений формат роботи,а саме:
				</span>
				<ul className='mb-5 text-[20px] flex flex-col gap-2 lg:text-[14px]'>
					<li className='flex gap-2 items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='18'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
						>
							<circle cx='9' cy='9' r='9' fill='#DA9F77' />
						</svg>
						Дірект менеджер
					</li>
					<li className='flex gap-2 items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='18'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
						>
							<circle cx='9' cy='9' r='9' fill='#DA9F77' />
						</svg>
						Менеджер з продажів
					</li>
					<li className='flex gap-2 items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='18'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
						>
							<circle cx='9' cy='9' r='9' fill='#DA9F77' />
						</svg>
						Рекрутер
					</li>
				</ul>
				<Link href={'/test'} className='button'>
					Пройти тест
				</Link>
			</div>
			<div className='grid grid-cols-2 ml-auto w-[80%] md:w-[100%] md:-translate-y-[0px] md:flex md:justify-end'>
				<div className='-translate-y-[80px] relative z-[1] md:-translate-y-[0px] md:translate-x-[30px]'>
					<Image
						src={'/home-1.png'}
						height={364}
						width={364}
						alt='Person'
						className='lg:h-full lg:w-full md:w-[133px] md:h-[133px]'
					/>
					<Image
						src={'/home-2.png'}
						height={364}
						width={364}
						alt='Person'
						className='lg:h-full lg:w-full md:w-[133px] md:h-[133px] -translate-y-[40px] -translate-x-[50px] relative z-[1] md:-translate-x-[0px] md:-translate-y-[20px]'
					/>
				</div>
				<div className='translate-y-[120px] md:translate-y-[40px] -translate-x-[50px] md:translate-x-[20px]'>
					<Image
						src={'/home-3.png'}
						height={364}
						width={364}
						alt='Person'
						className='lg:h-full lg:w-full md:w-[133px] md:h-[133px]'
					/>
					<Image
						src={'/home-4.png'}
						height={364}
						width={364}
						alt='Person'
						className='lg:h-full lg:w-full -translate-y-[50px] md:-translate-y-[20px] -translate-x-[120px] md:-translate-x-[20px] relative z-0 md:w-[133px] md:h-[133px]'
					/>
				</div>
			</div>
		</main>
	)
}
