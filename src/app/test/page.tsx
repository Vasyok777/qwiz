'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Question {
	text: string
	score: number
}

type Scores = Record<number, number>

export default function TestPage() {
	const [currentStep, setCurrentStep] = useState<number>(0)
	const [scores, setScores] = useState<Scores>({})
	const router = useRouter()

	const questions: Question[] = [
		{
			text: 'Чи подобається вам створювати контент для соц. мереж і вести їх?',
			score: 2,
		},
		{
			text: 'Ви відчуваєте себе впевнено при спілкуванні з незнайомими людьми і при переконуванні їх?',
			score: 3,
		},
		{
			text: 'Ви любите аналізувати інформацію та створювати стратегії?',
			score: 2,
		},
		{ text: 'Вам цікаво знаходити і залучати нових клієнтів?', score: 2 },
		{
			text: 'Ви можете працювати в умовах багатозадачності та швидко перемикатися між завданнями?',
			score: 2,
		},
		{
			text: 'Ви волієте працювати з цифрами, показниками та досягненням цілей?',
			score: 3,
		},
		{
			text: 'Ви здатні керувати командою та ефективно організовувати роботу інших людей?',
			score: 2,
		},
		{
			text: 'Чи любите ви знаходити творчі рішення для складних завдань?',
			score: 2,
		},
		{ text: 'Вам цікаво брати участь у переговорах та продажах?', score: 3 },
		{
			text: "Ви вважаєте за краще активно спілкуватися з різними людьми та будувати професійні зв'язки?",
			score: 3,
		},
	]

	useEffect(() => {
		const savedStep = localStorage.getItem('currentStep')
		const savedScores = localStorage.getItem('scores')

		if (savedStep) setCurrentStep(parseInt(savedStep))
		if (savedScores) setScores(JSON.parse(savedScores) as Scores)
	}, [])

	useEffect(() => {
		localStorage.setItem('currentStep', currentStep.toString())
		localStorage.setItem('scores', JSON.stringify(scores))
	}, [currentStep, scores])

	const handleAnswer = (answer: boolean) => {
		const newScores = {
			...scores,
			[currentStep]: answer ? questions[currentStep].score : 0,
		}
		setScores(newScores)

		if (currentStep + 1 < questions.length) {
			setCurrentStep(currentStep + 1)
		} else {
			const totalScore = Object.values(newScores).reduce(
				(sum, val) => sum + val,
				0
			)

			if (totalScore >= 0 && totalScore <= 14) {
				router.push('/direct-manager')
			} else if (totalScore >= 15 && totalScore <= 20) {
				router.push('/sales-manager')
			} else {
				router.push('/recruiter')
			}
		}
	}

	return (
		<div className='flex flex-col items-center justify-center min-h-screen relative px-5'>
			<Image
				src={'/test.png'}
				width={1920}
				height={1080}
				className='absolute left-0 right-0 bottom-0 top-0 w-full h-full object-cover'
				alt='Bg'
			/>
			<h1 className='text-center mb-10 relative'>Тест на профпридатність</h1>
			<div className='bg-[#DA9F77] overflow-hidden	 relative rounded-[20px] w-full max-w-[826px] h-[500px] md:h-[400px] flex flex-col justify-between'>
				<div className='mt-6 px-[15px] pt-[15px]'>
					<div className='w-full bg-white h-[15px] rounded-[25px]'>
						<div
							className='bg-black h-[15px] rounded-[25px]'
							style={{
								width: `${((currentStep + 1) / questions.length) * 100}%`,
							}}
						></div>
					</div>
				</div>
				<p className='px-9 text-center text-[48px] text-black leading-[87%] md:text-[32px] md:px-4'>
					{questions[currentStep].text}
				</p>
				<div className='grid grid-cols-2'>
					<button
						onClick={() => handleAnswer(false)}
						className='bg-[#F98484] text-black py-4 px-4 rounded text-[46px] md:text-[19px] md:py-2'
					>
						Ні
					</button>
					<button
						onClick={() => handleAnswer(true)}
						className='bg-[#8EF984] text-black py-4 px-4 rounded text-[46px] md:text-[19px] md:py-2'
					>
						Так
					</button>
				</div>
			</div>
		</div>
	)
}
