'use client'

import { FC, useState } from "react";

import helpIcon from '../assets/icons/help.png'
import arrowDown from '../assets/icons/arrow_down.png'
import flagIcon from '../assets/icons/flag.png'
import notification from '../assets/icons/notification.png'
import barcodeIcon from '../assets/icons/barcode.png'
import profilePics from '../assets/images/profile_pic.png'
import logo from '../assets/images/Afruna_Services.png'
import hamburger from '../assets/icons/hamburger.png'

import dashboardIcon from '../assets/icons/dashboardicon.png'
import serviceIcon from '../assets/icons/serviceicon.png'
import closeIcon from '../assets/icons/close.png'

import logouticon from '../assets/icons/logout.png'
import customerService from '../assets/icons/customerservice.png'

import Image from "next/image";
import '../assets/css/styles.css'
import clsx from "clsx";
import { linkitems } from "../constants/linkitems";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavBarProps {
    source: string
}

let styles = {
    background: 'linear-gradient(91deg, #FDD9B3 45.26%, #FEF1E3 99.33%)'
}
 
const NavBar: FC<NavBarProps> = ({ source }) => {
    const [isSideBarOpen, setSideBar] = useState(false)
    const activePath = usePathname()

    return ( 
        <>
            <div className="nav fixed top-0 left-0 right-0 z-10 py-4 lg:px-14" style={styles}>
                <div className="flex justify-between items-center">
                    {source === 'dashboard' && <div className="hamburger ml-5 block lg:hidden cursor-pointer">
                        <Image onClick={() => setSideBar(true)} src={hamburger} alt="hamburger"/>
                    </div>}
                    <div className="logo pl-10 hidden lg:block">
                        <Image src={logo} alt="logo"/>
                    </div>
                    <div className={clsx("logo block ml-5 lg:hidden", source === 'dashboard' && 'logo block lg:hidden')}>
                        <Image src={logo} width={126} alt="logo"/>
                    </div>
                    <div className="items">
                        {source === 'home' &&
                            <div className="home-items flex items-center gap-2 lg:gap-12">
                                <div className="misc gap-1 flex items-center">
                                    <div className="help flex items-center gap-1 lg:gap-2 px-2 py-4">
                                        <Image src={helpIcon} alt="help" />
                                        <span className="text-base font-bold hidden lg:block text-custom-blue">Help</span>
                                        <Image className="hidden lg:block" src={arrowDown} alt="help" />
                                    </div>
                                    <div className="lang flex items-center gap-2 pl-2 pr-0 lg:px-2 py-4">
                                        <Image src={flagIcon} alt="help" />
                                        <span className="text-base hidden lg:block text-custom-blue">EN</span>
                                        <Image className="hidden lg:block" src={arrowDown} alt="help" />
                                    </div>
                                </div>
                                <div className="auth flex items-center gap-0 lg:gap-2">
                                    <Link href={'/auth'}>
                                        <div className="signin lg:p-3 cursor-pointer">
                                            <span className="text-sm lg:text-base font-bold text-custom-blue">Sign in</span>
                                        </div>
                                    </Link>
                                    <Link href={'/auth/signup'}>
                                        <div className="register w-fit lg:w-28 btn ml-2 mr-5">
                                            <span className="text-base font-bold">Register</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        }
                        {source === 'auth' &&
                            <div className="auth-items flex items-center">
                                <div className="help flex items-center gap-2 px-2 py-4">
                                    <Image src={helpIcon} alt="help" />
                                    <span className="text-base font-bold text-custom-blue">Help</span>
                                    <Image src={arrowDown} alt="help" />
                                </div>
                            </div>
                        }
                        {source === 'dashboard' && 
                            <div className="dashboard-items flex items-center gap-9">
                                <div className="notif-barcode flex items-center gap-6">
                                    <div className="notf flex items-center">
                                        <Image src={notification} alt="help" />
                                    </div>
                                    <div className="barcode">
                                        <Image src={barcodeIcon} alt="help" />
                                    </div>
                                </div>
                                <div className="profile  hidden lg:flex items-center gap-2">
                                    <Image src={profilePics} alt="help" />
                                    <span className="text-base font-bold text-custom-blue">Suleiman SYD</span>
                                    <Image src={arrowDown} alt="help" />
                                </div>
                                <div className="profile block mr-5 lg:hidden items-center gap-2">
                                    <Image src={profilePics} alt="help" />
                                </div>
                            </div>
                        }
                    </div>
                </div>

                {/* Side bar mobile menu */}
                {source === "dashboard" &&
                    <div className={clsx("sidenav h-full fixed w-screen lg:hidden bg-black/50 z-50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all duration-500 ease-in ",
                        isSideBarOpen && "translate-x-0")}>
                        <div className="bg-white flex flex-col absolute left-0 top-0 h-screen pt-5 pl-2 pr-5 w-56">
                            <div className="closebtn flex items-center justify-end pr-5">
                                <Image onClick={() => setSideBar(false)} src={closeIcon} alt="close sidebar" className="cursor-pointer mb-10" />
                            </div>
                            <div className="link-items flex flex-col gap-5">
                                {
                                    linkitems.map((item, index) => 
                                        <Link onClick={() => setSideBar(false)}  key={index} href={item.path}>
                                            <div className={activePath === item.path ? 'active-link px-5 py-3 flex items-center gap-4' : "link-item px-5 py-3 flex items-center gap-4"}>
                                                <Image width={20} height={20} src={item.icon} alt="" />
                                                <span className="text-sm font-semibold text-[#A7B7DD]">{ item.title }</span>
                                            </div>
                                        </Link> 
                                    )
                                }
                            </div>
                            <div className="sidenav-footer flex flex-col gap-8 mt-[50px]">
                                <div className="first flex flex-col gap-3">
                                    <span className="text-sm font-semibold">Customer Support</span>
                                    <span className="text-xs text-[#BFBFBF] font-normal">Ask you query , place requests or important issues. Our support team will contact 24/7 to you.</span>
                                </div>

                                <div className="second flex flex-col gap-[39px]">
                                    <div className="customer-service flex px-3 py-3 items-center justify-center cursor-pointer gap-1 bg-[#C3DFFA] rounded-[8px]">
                                        <Image src={customerService} alt="" />
                                        <span className="text-sm font-semibold text-[#1A6BBA]">Connect Now</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}
 
export default NavBar;