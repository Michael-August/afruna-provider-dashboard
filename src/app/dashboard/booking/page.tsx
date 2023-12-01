"use client"

import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/src/components/ui/select";
import { FC, useEffect, useState } from "react";

import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";

import profilpic from '../../../assets/images/profile_pic.png'
import chaticon from '../../../assets/icons/chaticon.png'

import booking1 from '../../../assets/images/bookings/booking1.png'
import booking2 from '../../../assets/images/bookings/booking2.png'
import booking3 from '../../../assets/images/bookings/booking3.png'
import booking4 from '../../../assets/images/bookings/booking4.png'
import star from '../../../assets/icons/star.png'
import BookingService from "@/src/services/booking.service";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { IBooking } from "@/src/interfaces/IBooking";
import Loading from "@/src/components/loading";
import { Loader2 } from "lucide-react";
import Pagination from "@/src/components/Pagination";
import { useRouter, useSearchParams } from "next/navigation";
import '@/src/assets/css/styles.css'

interface BookingsProps {
    
}
 
const Bookings: FC<BookingsProps> = () => {
    const bookingApis = new BookingService()

    const bookings = useSelector((state: RootState) => state.booking.bookings)
    const totalPages = useSelector((state: RootState) => state.util.totalPages)
    const [isLoading, setIsLoading] = useState(false)
    const [btnIsLoading, setBtnIsLoading] = useState(false)

    const searchParams = useSearchParams()
    let page = searchParams.get('page') as string
    console.log(page)

    if(page === null) page = '1'

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
        bookingApis.getBookings({setIsLoading}, Number(page))
    }, [page])
    return ( 
        <div className="booking max-w-screen lg:px-[32px] px-5 pb-[132px]">
            <header className="py-6 lg:mx-[-32px] lg:px-[32px] lg:bg-white lg:mb-8 mb-[30px]">
                <div className="item flex flex-wrap gap-[25px] items-center justify-between">
                    <span className="text-2xl font-semibold">Booking List</span>
                    <div className="filter flex items-center gap-[22px]">
                        <div className="all">
                            <Select>
                                <SelectTrigger className="w-[144px]">
                                    <SelectValue className="text-[#777]" placeholder="All" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>All</SelectLabel>
                                        <SelectItem value="apple">Filter 1</SelectItem>
                                        <SelectItem value="banana">Filter 2</SelectItem>
                                        <SelectItem value="blueberry">Filter 3</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="duration">
                            <Select>
                                <SelectTrigger className="w-[144px]">
                                    <SelectValue className="text-[#777]" placeholder="This month" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>This month</SelectLabel>
                                        <SelectItem value="apple">Filter 1</SelectItem>
                                        <SelectItem value="banana">Filter 2</SelectItem>
                                        <SelectItem value="blueberry">Filter 3</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </header>
            <main className="">
                {isLoading === false ? <div className="bookings w-full flex flex-col gap-[29px] mb-[23px]">
                    {
                        bookings.map((booking: IBooking) => (
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
                                                        :<Image className="smallProfile" width={40} src={`https://${booking.customerId.avatar}`} height={40} alt="" />
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
                        ))
                    }
                </div>: <Loading />}
                <Pagination page={page} totalPages={totalPages} />
            </main>
        </div>
    );
}
 
export default Bookings;