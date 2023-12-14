"use client"

import { Button } from "@/src/components/ui/button";
import { FC, useEffect, useState } from "react";

import plus from '../../assets/icons/plus.png'
import uptrend from '../../assets/icons/uptrend.png'
import downtrend from '../../assets/icons/downtrend.png'
import circle1 from '../../assets/images/opened-circle1.png'
import circle2 from '../../assets/images/opened-circle2.png'
import circle3 from '../../assets/images/opened-circle3.png'
import profilpic from '../../assets/images/profile_pic.png'
import chaticon from '../../assets/icons/chaticon.png'

import booking1 from '../../assets/images/bookings/booking1.png'
import booking2 from '../../assets/images/bookings/booking2.png'
import booking3 from '../../assets/images/bookings/booking3.png'
import booking4 from '../../assets/images/bookings/booking4.png'

import '../../assets/css/styles.css'

import Image from "next/image";
import { Card, CardContent } from "@/src/components/ui/card";
import Link from "next/link";
import DashboardService from "@/src/services/dashboard.service";
import { IUserBio } from "@/src/interfaces/IUser";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";

import star from '@/src/assets/icons/star.png'
import { Loader2 } from "lucide-react";
import BookingService from "@/src/services/booking.service";

interface DashboardProps {
    
}
 
const Dashboard: FC<DashboardProps> = () => {
    const dashboardApis = new DashboardService()
    const bookingApis = new BookingService()

    const [isLoading, setIsLoading] = useState(false)
    const user = useSelector((state: RootState) => state.auth.userBio)
    const card = useSelector((state: RootState) => state.dashboard.dashboardCards)
    const bookings = useSelector((state: RootState) => state.dashboard.dashboardBookings)

    const [btnIsLoading, setBtnIsLoading] = useState(false)

    // const [localUser, setLocalUser] = useState<IUserBio>(JSON.parse(sessionStorage.getItem("user") || ""));

    const formatDate = (date: string) => {
        const createdAtDate = new Date(date);
        const year = createdAtDate.getFullYear();
        const day = createdAtDate.getDate();
        const monthIndex = createdAtDate.getMonth(); // Months are zero-indexed
        const month = new Date(year, monthIndex).toLocaleString("en-US", {
            month: "short",
        });

        return `${month} ${day}, ${year}`
    }

    const updateStatus = (bookingId: string, status: string) => {
        let payload = { status }
        
        bookingApis.updateBooking(bookingId, payload, {setIsLoading: setBtnIsLoading})
    }

    useEffect(() => {
        // if (!user) {
        //     setLocalUser(JSON.parse(sessionStorage.getItem("user") || "") );
        // }
        dashboardApis.getDashboardCards({setIsLoading}, JSON.parse(sessionStorage.getItem("user") || "")._id)
        dashboardApis.getBookings()
    }, [])

    return ( 
        <div className="dashboard max-w-screen lg:px-[32px] px-5 pb-[132px]">
            <header className="py-6 lg:mx-[-32px] lg:px-[32px] lg:bg-white lg:mb-8 mb-[30px]">
                <div className="item flex flex-wrap items-center justify-between">
                    <span className="text-2xl font-semibold">Dashboard</span>
                    <Link href={'/dashboard/service/new-service'}>
                        <Button className="btn rounded-[4px] flex items-center justify-center gap-3 px-[18px]">
                            <Image src={plus} alt="plus icon" />
                            <span>Create Service</span>
                        </Button>
                    </Link>
                </div>
            </header>
            <main className="flex flex-col">
                <section className="cards flex flex-wrap items-center mb-9 gap-[18px]">
                    <Card className="w-full relative lg:w-[268px] px-[16px] py-7 rounded-[8px] shadow-md">
                        <CardContent>
                            <div className="top flex items-center justify-between">
                                <div className="heading mb-7 pl-[11px] flex flex-col">
                                    <span className="text-4xl font-bold">${card?.totalSales}</span>
                                    <span className="text-2xl font-semibold">Earnings</span>
                                </div>
                                <Image className="absolute top-0 right-0" src={circle1} alt="" />
                            </div>
                            <div className="rate flex items-center justify-between">
                                <div className="right items-center flex gap-[5px]">
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="left flex items-center gap-[5px] px-[7px] py-[10px]">
                                    <span className="text-[#0ACF83] text-base font-semibold"></span>
                                    {/* <Image src={uptrend} alt="up trend" /> */}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="w-full relative lg:w-[268px] px-[16px] py-7 rounded-[8px] shadow-md">
                        <CardContent>
                            <div className="top flex items-center justify-between">
                                <div className="heading mb-7 pl-[11px] flex flex-col">
                                    <span className="text-4xl font-bold">{card?.booked}</span>
                                    <span className="text-2xl font-semibold">Booking</span>
                                </div>
                                <Image className="absolute top-0 right-0" src={circle2} alt="" />
                            </div>
                            <div className="rate flex items-center justify-between">
                                <div className="right items-center flex gap-[5px]">
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="left flex items-center gap-[5px] px-[7px] py-[10px]">
                                    <span className="text-[#D32B2B] text-base font-semibold"></span>
                                    {/* <Image src={downtrend} alt="up trend" /> */}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="w-full relative lg:w-[268px] px-[16px] py-7 rounded-[8px] shadow-md">
                        <CardContent>
                            <div className="top flex items-center justify-between">
                                <div className="heading mb-7 pl-[11px] flex flex-col">
                                    <span className="text-4xl font-bold">{card.totalServices}</span>
                                    <span className="text-2xl font-semibold">Services</span>
                                </div>
                                <Image className="absolute top-0 right-0" src={circle1} alt="" />
                            </div>
                            <div className="rate flex items-center justify-between">
                                <div className="right items-center flex gap-[5px]">
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="left flex items-center gap-[5px] px-[7px] py-[10px]">
                                    <span className="text-[#0ACF83] text-base font-semibold"></span>
                                    {/* <Image src={uptrend} alt="up trend" /> */}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <section className="recent-bookings">
                    {/* Desktop */}
                    <Card className="w-full hidden lg:block p-[25px] rounded-[8px] shadow-md bg-[#FAFCFF] pb-[38px]">
                        <CardContent>
                            <header className="text-xl font-bold text-custom-blue pl-[2px]">Recent Booking</header>
                            <hr className="mt-[23px] mb-[21px] mx-[-25px]" />
                            <div className="bookings flex flex-col gap-[29px] mb-[23px]">
                                {bookings.map(booking => (
                                    <div className="booking" key={booking._id}>
                                        <Card className="w-full rounded-[8px] bg-[#FAFCFF] lg:py-[21px] lg:px-[22px]">
                                            <CardContent className="flex flex-col lg:flex lg:flex-row items-center justify-between">
                                                <div className="img-detail lg:flex lg:flex-row lg:items-center lg:justify-center">
                                                    <Image className="lg:mr-[21px] mb-[25px] lg:mb-0 w-full lg:w-[231px]" src={booking4} alt="" />
                                                    <div className="details flex flex-col mx-[25px] mb-[30px] lg:mx-0 lg:mb-0 justify-between gap-5">
                                                        <div className="top flex items-center justify-between">
                                                            <span className="text-lg mr-10 font-bold text-custom-blue">{booking.serviceId?.name}</span>
                                                            {booking.status === 'cancled' && <span className="status canceled">Canceled</span>}
                                                            {booking.status === 'completed' &&<span className="status completed">Completed</span>}
                                                            {booking.status === 'in progress' &&<span className="status in-progress">in progress</span>}
                                                            {booking.status === 'pending' &&<span className="status pending">Pending</span>}
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm mr-10 font-bold text-custom-blue">Booking Date</span>
                                                            <span className="text-[#787878] text-xs">:{formatDate(booking.createdAt)}</span>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm mr-10 font-bold text-custom-blue">Amount</span>
                                                            <div className="extra flex gap-[6px]">
                                                                <span className="text-[#787878] text-xs">:#{ booking.amount }</span>
                                                                <span className="text-[#1A6BBA] text-xs bg-[#E1F0FF] px-[10px] py-3px] border-dotted">COD</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm mr-10 font-bold text-custom-blue">Location</span>
                                                            <span className="text-[#787878] text-xs">:{booking.location}</span>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm mr-10 font-bold text-custom-blue">Customer</span>
                                                            <div className="extra flex items-center">
                                                                :<Image className="smallProfile" width={40} src={`${booking.customerId.avatar}`} height={40} alt="" />
                                                                <span className="text-[#787878] ml-[10px] text-xs">{ booking.customerId.firstName } { booking.customerId.lastName }</span>
                                                                <span className="text-[#787878] text-xs ml-5">{ booking.customerId.email }</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="btns-reviews mr-[60px] flex flex-col-reverse lg:flex-col items-center justify-center gap-[35px]">
                                                    <div className="btns flex flex-col mb-[23px] lg:mb-0 lg:flex lg:flex-row lg:items-center gap-[10px]">
                                                        {booking.status === 'pending' &&
                                                            <Button className="btn-sp" onClick={() => updateStatus(booking._id, 'in progress')}>
                                                                {btnIsLoading ? (
                                                                    <Loader2 className=" h-6 w-6 animate-spin text-white" />
                                                                    ) : (
                                                                    "Start rendering"
                                                                )}
                                                            </Button>}
                                                        {booking.status === 'in progress' &&
                                                            <>
                                                                <Button className="btn w-40 lg:w-auto"><Image src={chaticon} alt="" /> Chat</Button>
                                                                <Button onClick={() => updateStatus(booking._id, 'completed')} className="bg-[#E3F7FF] w-40 lg:w-auto text-sm text-[#00AEEF] px-[18px] py-[10px] rounded-[8px] hover:bg-[#cde1e9]">
                                                                    {btnIsLoading ? (
                                                                        <Loader2 className=" h-6 w-6 animate-spin text-white" />
                                                                        ) : (
                                                                        "Done"
                                                                    )}
                                                                </Button>
                                                            </>
                                                        }
                                                    </div>
                                                    { booking.status === 'completed' &&
                                                        <div>
                                                            <div className="stars flex">
                                                                <Image src={star} alt="" />
                                                                <Image src={star} alt="" />
                                                                <Image src={star} alt="" />
                                                                <Image src={star} alt="" />
                                                                <Image src={star} alt="" />
                                                            </div>
                                                            <span className="hidden lg:block text-sm text-[#019DDC] font-semibold cursor-pointer">View Details</span>
                                                        </div>
                                                    }
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                                {bookings.length === 0 &&<div className="nobooking flex justify-center items-center">
                                    No Booking for you yet.
                                </div>}
                            </div>
                            {bookings.length !== 0 && <div className="footer-btn flex items-center justify-center">
                                <Button className="btn w-60">View all History</Button>
                            </div>}
                        </CardContent>
                    </Card>

                    {/* Mobile */}
                    <div className="mobile-bokings flex flex-col lg:hidden">
                        <header className="text-xl font-bold text-custom-blue mb-[15px]">Recent Booking</header>
                        <div className="bookings flex flex-col gap-[29px] mb-[23px]">
                            {bookings.map(booking => (
                                <Card key={booking._id} className="w-full rounded-[8px] pb-[48px] bg-[#FAFCFF]">
                                    <CardContent className="">
                                        <Image className="mb-[25px] w-full" src={booking2} alt="" />
                                        <div className="details flex flex-col justify-between gap-6 mx-[25px] mb-[30px]">
                                            <div className="top flex items-center justify-between">
                                                <span className="text-lg mr-10 font-bold text-custom-blue">{booking.serviceId.name}</span>
                                                {booking.status === 'cancled' && <span className="status canceled">Canceled</span>}
                                                {booking.status === 'completed' &&<span className="status completed">Completed</span>}
                                                {booking.status === 'in progress' &&<span className="status in-progress">in progress</span>}
                                                {booking.status === 'pending' &&<span className="status pending">Pending</span>}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-base mr-10 font-bold text-custom-blue">Booking Date</span>
                                                <span className="text-[#787878] text-base">:{formatDate(booking.createdAt)}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-base mr-10 font-bold text-custom-blue">Amount</span>
                                                <div className="extra flex gap-[6px]">
                                                    <span className="text-[#787878] text-base">:#{booking.amount}</span>
                                                    <span className="text-[#1A6BBA] text-base bg-[#E1F0FF] px-[10px] py-3px] border-dotted">COD</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-base mr-10 font-bold text-custom-blue">Location</span>
                                                <span className="text-[#787878] text-base">:{booking.location}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-base mr-10 font-bold text-custom-blue">Customer</span>
                                                <div className="extra flex items-center">
                                                    :<Image className="smallProfile" width={40} src={`${booking.customerId.avatar}`} height={40} alt="" />
                                                    <span className="text-[#787878] ml-[10px] text-xs">{booking.customerId.firstName} { booking.customerId.lastName }</span>
                                                    <span className="text-[#787878] text-xs ml-5">{ booking.customerId.email }</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btns-reviews mr-[60px] flex flex-col items-center justify-center">
                                            <div className="btns flex flex-col items-center justify-center gap-[10px]">
                                                <div className="btns flex flex-col mb-[23px] lg:mb-0 lg:flex lg:flex-row lg:items-center gap-[10px]">
                                                        {booking.status === 'pending' &&
                                                            <Button className="btn-sp" onClick={() => updateStatus(booking._id, 'in progress')}>
                                                                {btnIsLoading ? (
                                                                    <Loader2 className=" h-6 w-6 animate-spin text-white" />
                                                                    ) : (
                                                                    "Start rendering"
                                                                )}
                                                            </Button>}
                                                        {booking.status === 'in progress' &&
                                                            <>
                                                                <Button className="btn w-40 lg:w-auto"><Image src={chaticon} alt="" /> Chat</Button>
                                                                <Button onClick={() => updateStatus(booking._id, 'completed')} className="bg-[#E3F7FF] w-40 lg:w-auto text-sm text-[#00AEEF] px-[18px] py-[10px] rounded-[8px] hover:bg-[#cde1e9]">
                                                                    {btnIsLoading ? (
                                                                        <Loader2 className=" h-6 w-6 animate-spin text-white" />
                                                                        ) : (
                                                                        "Done"
                                                                    )}
                                                                </Button>
                                                            </>
                                                        }
                                                    </div>
                                                    { booking.status === 'completed' &&
                                                        <div>
                                                            <div className="stars flex">
                                                                <Image src={star} alt="" />
                                                                <Image src={star} alt="" />
                                                                <Image src={star} alt="" />
                                                                <Image src={star} alt="" />
                                                                <Image src={star} alt="" />
                                                            </div>
                                                            <span className="hidden lg:block text-sm text-[#019DDC] font-semibold cursor-pointer">View Details</span>
                                                        </div>
                                                    }
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        {bookings.length !== 0 && <div className="footer-btn flex items-center justify-center">
                            <Button className="btn w-60">View all History</Button>
                        </div>}
                    </div>
                </section>
            </main>
        </div>
    );
}
 
export default Dashboard;