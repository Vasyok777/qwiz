import type { Metadata } from 'next'
import { Montserrat_Alternates } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat_Alternates({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Тест на профпридатність',
	description: 'Тест на профпридатність',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>{children}</body>
		</html>
	)
}
