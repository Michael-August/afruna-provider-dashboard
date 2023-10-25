import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ModalProvider from '../components/context/ModalContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home | Afruna Services',
  description: 'Afruna service landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ModalProvider>
        <body className={inter.className}>{children}</body>
      </ModalProvider>
      
    </html>
  )
}
