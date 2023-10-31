import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ModalProvider from '../components/context/ModalContext'
import { Providers } from '../redux/Provider'

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
        <body className={inter.className}>
          <Providers>
            <ModalProvider>
              {children}
            </ModalProvider>
          </Providers>
        </body>
      {/* <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script> */}
    </html>
  )
}
