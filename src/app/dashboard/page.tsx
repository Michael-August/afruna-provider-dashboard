import { Button } from "@/src/components/ui/button";
import { FC } from "react";

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

interface DashboardProps {
    
}
 
const Dashboard: FC<DashboardProps> = () => {
    return ( 
        <>
            <div className="dashboard max-w-screen lg:px-[32px] px-5 pb-[132px]">
                <header className="py-6 lg:mx-[-32px] lg:px-[32px] lg:bg-white lg:mb-8 mb-[30px]">
                    <div className="item flex flex-wrap items-center justify-between">
                        <span className="text-2xl font-semibold">Dashboard</span>
                        <Button className="btn rounded-[4px] flex items-center justify-center gap-3 px-[18px]">
                            <Image src={plus} alt="plus icon" />
                            <span>Create Service</span>
                        </Button>
                    </div>
                </header>
                <main className="flex flex-col">
                    <section className="cards flex flex-wrap items-center mb-9 gap-[18px]">
                        <Card className="w-full relative lg:w-[268px] px-[16px] py-7 rounded-[8px] shadow-md">
                            <CardContent>
                                <div className="top flex items-center justify-between">
                                    <div className="heading mb-7 pl-[11px] flex flex-col">
                                        <span className="text-4xl font-bold">$106</span>
                                        <span className="text-2xl font-semibold">Earnings</span>
                                    </div>
                                    <Image className="absolute top-0 right-0" src={circle1} alt="" />
                                </div>
                                <div className="rate flex items-center justify-between">
                                    <div className="right items-center flex gap-[5px]">
                                        <span>Total sales:</span>
                                        <span>65</span>
                                    </div>
                                    <div className="left flex items-center gap-[5px] px-[7px] py-[10px]">
                                        <span className="text-[#0ACF83] text-base font-semibold">+2.3%</span>
                                        <Image src={uptrend} alt="up trend" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="w-full relative lg:w-[268px] px-[16px] py-7 rounded-[8px] shadow-md">
                            <CardContent>
                                <div className="top flex items-center justify-between">
                                    <div className="heading mb-7 pl-[11px] flex flex-col">
                                        <span className="text-4xl font-bold">106</span>
                                        <span className="text-2xl font-semibold">Booking</span>
                                    </div>
                                    <Image className="absolute top-0 right-0" src={circle2} alt="" />
                                </div>
                                <div className="rate flex items-center justify-between">
                                    <div className="right items-center flex gap-[5px]">
                                        <span>Over All:</span>
                                        <span>65</span>
                                    </div>
                                    <div className="left flex items-center gap-[5px] px-[7px] py-[10px]">
                                        <span className="text-[#D32B2B] text-base font-semibold">+2.3%</span>
                                        <Image src={downtrend} alt="up trend" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="w-full relative lg:w-[268px] px-[16px] py-7 rounded-[8px] shadow-md">
                            <CardContent>
                                <div className="top flex items-center justify-between">
                                    <div className="heading mb-7 pl-[11px] flex flex-col">
                                        <span className="text-4xl font-bold">7</span>
                                        <span className="text-2xl font-semibold">Services</span>
                                    </div>
                                    <Image className="absolute top-0 right-0" src={circle1} alt="" />
                                </div>
                                <div className="rate flex items-center justify-between">
                                    <div className="right items-center flex gap-[5px]">
                                        <span>Service Providers:</span>
                                        <span>65</span>
                                    </div>
                                    <div className="left flex items-center gap-[5px] px-[7px] py-[10px]">
                                        <span className="text-[#0ACF83] text-base font-semibold">+2.3%</span>
                                        <Image src={uptrend} alt="up trend" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="w-full relative lg:w-[268px] px-[16px] py-7 rounded-[8px] shadow-md">
                            <CardContent>
                                <div className="top flex items-center justify-between">
                                    <div className="heading mb-7 pl-[11px] flex flex-col">
                                        <span className="text-4xl font-bold">106</span>
                                        <span className="text-2xl font-semibold">Visits</span>
                                    </div>
                                    <Image className="absolute top-0 right-0" src={circle3} alt="" />
                                </div>
                                <div className="rate flex items-center justify-between">
                                    <div className="right items-center flex gap-[5px]">
                                        <span>profile visit:</span>
                                        <span>65</span>
                                    </div>
                                    <div className="left flex items-center gap-[5px] px-[7px] py-[10px]">
                                        <span className="text-[#0ACF83] text-base font-semibold">+2.3%</span>
                                        <Image src={uptrend} alt="up trend" />
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
                                    <div className="booking">
                                        <Card className="w-full rounded-[8px] bg-[#FAFCFF] py-[21px] px-[22px]">
                                            <CardContent className="flex items-center justify-between">
                                                <div className="img-detail flex items-center justify-center">
                                                    <Image className="mr-[21px]" src={booking2} alt="" />
                                                    <div className="details flex flex-col justify-between gap-5">
                                                        <div className="top flex items-center justify-between">
                                                            <span className="text-lg mr-10 font-bold text-custom-blue">Architetural</span>
                                                            <span className="status in-progress">In Progress</span>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm mr-10 font-bold text-custom-blue">Booking Date</span>
                                                            <span className="text-[#787878] text-xs">:January 22, 2023</span>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm mr-10 font-bold text-custom-blue">Amount</span>
                                                            <div className="extra flex gap-[6px]">
                                                                <span className="text-[#787878] text-xs">:#159000</span>
                                                                <span className="text-[#1A6BBA] text-xs bg-[#E1F0FF] px-[10px] py-3px] border-dotted">COD</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm mr-10 font-bold text-custom-blue">Location</span>
                                                            <span className="text-[#787878] text-xs">:Kaduna</span>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm mr-10 font-bold text-custom-blue">Customer</span>
                                                            <div className="extra flex items-center">
                                                                :<Image width={28} src={profilpic} alt="" />
                                                                <span className="text-[#787878] ml-[10px] text-xs">garima Masilala</span>
                                                                <span className="text-[#787878] text-xs ml-5">GARIm@gmail.com</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="btns-reviews mr-[60px] flex flex-col items-center justify-center">
                                                    <div className="btns flex items-center gap-[10px]">
                                                        <Button className="btn flex items-center justify-center gap-[6px]">
                                                            <Image src={chaticon} alt="" />
                                                            Chat
                                                        </Button>
                                                        <Button className="bg-[#E3F7FF] text-sm text-[#00AEEF] px-[18px] py-[10px] rounded-[8px] hover:bg-[#cde1e9]">Cancel</Button>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="booking">
                                        <Card className="w-full rounded-[8px] bg-[#FAFCFF] py-[21px] px-[22px]">
                                            <CardContent className="flex items-center justify-between">
                                                <div className="img-detail flex items-center justify-center">
                                                    <Image className="mr-[21px]" src={booking4} alt="" />
                                                    <div className="details flex flex-col justify-between gap-5">
                                                        <div className="top flex items-center justify-between">
                                                            <span className="text-lg mr-10 font-bold text-custom-blue">Video Editing</span>
                                                            <span className="status canceled">Canceled</span>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm mr-10 font-bold text-custom-blue">Booking Date</span>
                                                            <span className="text-[#787878] text-xs">:January 22, 2023</span>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm mr-10 font-bold text-custom-blue">Amount</span>
                                                            <div className="extra flex gap-[6px]">
                                                                <span className="text-[#787878] text-xs">:#159000</span>
                                                                <span className="text-[#1A6BBA] text-xs bg-[#E1F0FF] px-[10px] py-3px] border-dotted">COD</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm mr-10 font-bold text-custom-blue">Location</span>
                                                            <span className="text-[#787878] text-xs">:Kaduna</span>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm mr-10 font-bold text-custom-blue">Customer</span>
                                                            <div className="extra flex items-center">
                                                                :<Image width={28} src={profilpic} alt="" />
                                                                <span className="text-[#787878] ml-[10px] text-xs">garima Masilala</span>
                                                                <span className="text-[#787878] text-xs ml-5">GARIm@gmail.com</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="btns-reviews mr-[60px] flex flex-col items-center justify-center">
                                                    <div className="btns flex items-center gap-[10px]">
                                                        <Button className="btn">Re Book</Button>
                                                        <Button className="bg-[#E3F7FF] text-sm text-[#00AEEF] px-[18px] py-[10px] rounded-[8px] hover:bg-[#cde1e9]">Reschedule</Button>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                                <div className="footer-btn flex items-center justify-center">
                                    <Button className="btn w-60">View all History</Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Mobile */}
                        <div className="mobile-bokings flex flex-col lg:hidden">
                            <header className="text-xl font-bold text-custom-blue mb-[15px]">Recent Booking</header>
                            <div className="bookings flex flex-col gap-[29px] mb-[23px]">
                                <Card className="w-full rounded-[8px] pb-[48px] bg-[#FAFCFF]">
                                    <CardContent className="">
                                        <Image className="mb-[25px] w-full" src={booking2} alt="" />
                                        <div className="details flex flex-col justify-between gap-6 mx-[25px] mb-[30px]">
                                            <div className="top flex items-center justify-between">
                                                <span className="text-lg mr-10 font-bold text-custom-blue">Architetural</span>
                                                <span className="status-mobile text-base in-progress">In Progress</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-base mr-10 font-bold text-custom-blue">Booking Date</span>
                                                <span className="text-[#787878] text-base">:January 22, 2023</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-base mr-10 font-bold text-custom-blue">Amount</span>
                                                <div className="extra flex gap-[6px]">
                                                    <span className="text-[#787878] text-base">:#159000</span>
                                                    <span className="text-[#1A6BBA] text-base bg-[#E1F0FF] px-[10px] py-3px] border-dotted">COD</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-base mr-10 font-bold text-custom-blue">Location</span>
                                                <span className="text-[#787878] text-base">:Kaduna</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-base mr-10 font-bold text-custom-blue">Customer</span>
                                                <div className="extra flex items-center">
                                                    :<Image width={40} src={profilpic} alt="" />
                                                    <span className="text-[#787878] ml-[10px] text-xs">garima Masilala</span>
                                                    <span className="text-[#787878] text-xs ml-5">GARIm@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btns-reviews mr-[60px] flex flex-col items-center justify-center">
                                            <div className="btns flex flex-col items-center justify-center gap-[10px]">
                                                <Button className="btn w-40">Re Book</Button>
                                                <Button className="w-40 bg-[#E3F7FF] text-sm text-[#00AEEF] px-[18px] py-[10px] rounded-[8px] hover:bg-[#cde1e9]">Reschedule</Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="w-full rounded-[8px] pb-[48px] bg-[#FAFCFF]">
                                    <CardContent className="">
                                        <Image className="mb-[25px] w-full" src={booking4} alt="" />
                                        <div className="details flex flex-col justify-between gap-6 mx-[25px] mb-[30px]">
                                            <div className="top flex items-center justify-between">
                                                <span className="text-lg mr-10 font-bold text-custom-blue">Architetural</span>
                                                <span className="status-mobile text-base in-progress">In Progress</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-base mr-10 font-bold text-custom-blue">Booking Date</span>
                                                <span className="text-[#787878] text-base">:January 22, 2023</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-base mr-10 font-bold text-custom-blue">Amount</span>
                                                <div className="extra flex gap-[6px]">
                                                    <span className="text-[#787878] text-base">:#159000</span>
                                                    <span className="text-[#1A6BBA] text-base bg-[#E1F0FF] px-[10px] py-3px] border-dotted">COD</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-base mr-10 font-bold text-custom-blue">Location</span>
                                                <span className="text-[#787878] text-base">:Kaduna</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-base mr-10 font-bold text-custom-blue">Customer</span>
                                                <div className="extra flex items-center">
                                                    :<Image width={40} src={profilpic} alt="" />
                                                    <span className="text-[#787878] ml-[10px] text-xs">garima Masilala</span>
                                                    <span className="text-[#787878] text-xs ml-5">GARIm@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btns-reviews mr-[60px] flex flex-col items-center justify-center">
                                            <div className="btns flex flex-col items-center gap-[10px]">
                                                <Button className="btn w-40 flex items-center justify-center gap-[6px]">
                                                    <Image src={chaticon} alt="" />
                                                    Chat
                                                </Button>
                                                <Button className="bg-[#E3F7FF] w-40 text-sm text-[#00AEEF] px-[18px] py-[10px] rounded-[8px] hover:bg-[#cde1e9]">Cancel</Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="footer-btn flex items-center justify-center">
                                <Button className="btn w-60">View all History</Button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
 
export default Dashboard;