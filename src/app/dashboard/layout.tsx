import NavBar from '@/src/components/Navbar'
import type { Metadata } from 'next'

import '../../assets/css/styles.css'
import SideNav from '@/src/components/SideNav'
import AuthenticatedWrapper from '@/src/components/AuthenticatedWrapper'

export const metadata: Metadata = {
  title: 'Dashboard | Afruna Services',
  description: 'Afruna service Auth page',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body>
          {/* <AuthenticatedWrapper> */}
            <div className="dashboradlayout">
              <div className="nabar mb-16">
                <NavBar source='dashboard' />
              </div>
              <div className="dashboard-area flex">
                <div className="sidenav hidden lg:block">
                  <SideNav />
                </div>
                <main className='flex-1'>
                  <div className='content flex flex-col bg-[#F2F5F7] flex-grow lg:ml-48'>
                    {children}   
                  </div>  
                </main>
              </div> 
            </div>
          {/* </AuthenticatedWrapper> */}
        </body>
    </html>
  )
}