'use client'

import { FC } from "react";

import dashboardIcon from '../assets/icons/dashboardicon.png'
import serviceIcon from '../assets/icons/serviceicon.png'
import logouticon from '../assets/icons/logout.png'
import customerService from '../assets/icons/customerservice.png'
import Image from "next/image";

import '../assets/css/styles.css'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { linkitems } from "../constants/linkitems";
import AuthService from "../services/auth.service";

interface SideNavProps {

}
 
const SideNav: FC<SideNavProps> = () => {
    const activePath = usePathname()
    const router = useRouter()

    const logOut = () => {
        const authService = new AuthService(router)
        authService.logout()
    }
    return ( 
        <>
            <div className="sidenav bg-white fixed flex flex-col pt-5 pl-[18px] pr-5 w-48">
                <div className="link-items flex flex-col gap-5">
                    {
                        linkitems.map((item, index) => 
                           <Link key={index} href={item.path}>
                                <div className={activePath === item.path ? 'active-link px-5 py-3 flex items-center gap-4' : "link-item px-5 py-3 flex items-center gap-4"}>
                                    {activePath === item.path ? <Image width={20} height={20} src={item.active_icon} alt="" /> :
                                        <Image width={20} height={20} src={item.icon} alt="" />}
                                    <span className="text-sm font-semibold text-[#A7B7DD]">{ item.title }</span>
                                </div>
                            </Link> 
                        )
                    }
                    <div onClick={logOut} className="link-item px-5 py-3 flex items-center gap-4">
                        <Image src={logouticon} alt="" />
                        <span className="text-sm font-semibold text-[#A7B7DD]">Log out</span>
                    </div>
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
        </>
    );
}
 
export default SideNav;