import NavBar from '@/src/components/Navbar'
import type { Metadata } from 'next'

import '../../assets/css/styles.css'

export const metadata: Metadata = {
  title: 'Auth | Afruna Services',
  description: 'Afruna service Auth page',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body>
            <div className="auth-area pb-[100px]">
              <NavBar source='auth' />
              <main className='flex mx-5 flex-col items-center justify-center mt-10 lg:mt-20'>
                <header className='text-bold-gray font-bold text-2xl lg:font-extrabold lg:text-4xl mb-7'>Service Provider</header>
                {children} 
              </main> 
            </div>
        </body>
    </html>
  )
}