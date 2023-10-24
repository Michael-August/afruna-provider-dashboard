import { Button } from "@/src/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/src/components/ui/select";
import { FC } from "react";

import Image from "next/image";

import plus from '../../../assets/icons/plus.png'
import service1 from '../../../assets/images/bookings/booking2.png'
import star from '../../../assets/icons/star.png'
import location from '../../../assets/icons/location.png'

import { Card, CardContent } from "@/src/components/ui/card";

interface ServicesProps {
    
}
 
const Services: FC<ServicesProps> = () => {
    return ( 
        <>
            <div className="services max-w-screen lg:px-[32px] px-5 pb-[132px]">
                <header className="py-6 lg:mx-[-32px] lg:px-[32px] lg:bg-white lg:mb-8 mb-[30px]">
                    <div className="item flex flex-wrap gap-[25px] items-center justify-between">
                        <span className="text-2xl font-semibold">My Service</span>
                        <div className="filter flex items-center gap-[22px]">
                            <div className="all">
                                <Select>
                                    <SelectTrigger className="w-[144px]">
                                        <SelectValue className="text-[#777]" placeholder="All" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="apple">All Services</SelectItem>
                                            <SelectItem value="banana">Approved Services</SelectItem>
                                            <SelectItem value="blueberry">Unapproved Services</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button className="btn rounded-[4px] flex items-center justify-center gap-3 px-[18px]">
                                <Image src={plus} alt="plus icon" />
                                <span>Create Service</span>
                            </Button>
                        </div>
                    </div>
                </header>
                <main className="">
                    <div className="services w-full flex flex-col gap-[29px] mb-[23px]">
                        <div className="service">
                            <Card className="w-full rounded-[8px] bg-[#FAFCFF] lg:py-[21px] lg:px-[22px]">
                                <CardContent className="flex flex-col lg:flex lg:flex-row items-center justify-between">
                                    <div className="img-detail lg:flex lg:flex-row lg:items-center lg:justify-center">
                                        <Image className="lg:mr-[21px] mb-[25px] lg:mb-0 w-full lg:w-[231px]" src={service1} alt="" />
                                        <div className="details flex flex-col mx-[25px] mb-[30px] lg:mx-0 lg:mb-0 justify-between gap-5">
                                            <div className="top flex items-center justify-between gap-[30px]">
                                                <span className="text-base mr-10 font-bold px-[10px] py-[8px] text-[#2D36FF] bg-[#D8D9FF78] rounded-[2px]">Construction</span>
                                                <span className="flex items-center gap-2">
                                                    <Image src={star} alt="" />
                                                    4.9
                                                </span>
                                            </div>
                                            <span className="font-bold text-lg text-custom-blue">Architectural Services</span>
                                            <div className="location flex items-center gap-[10px]">
                                                <Image src={location} alt="" />
                                                <span className="text-[#707070] text-base font-semibold">Abuja, Ademola adetoko cresent</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btns-reviews mr-[60px] flex flex-col items-center justify-center">
                                        <div className="btns flex flex-col mb-[23px] lg:mb-0 lg:flex lg:flex-row lg:items-center gap-[10px]">
                                            <Button className="btn w-40 lg:w-auto">Edit</Button>
                                            <Button className="bg-[#E3F7FF] w-40 lg:w-auto text-sm text-[#00AEEF] px-[18px] py-[10px] rounded-[8px] hover:bg-[#cde1e9]">Unpublish</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="service">
                            <Card className="w-full rounded-[8px] bg-[#FAFCFF] lg:py-[21px] lg:px-[22px]">
                                <CardContent className="flex flex-col lg:flex lg:flex-row items-center justify-between">
                                    <div className="img-detail lg:flex lg:flex-row lg:items-center lg:justify-center">
                                        <Image className="lg:mr-[21px] mb-[25px] lg:mb-0 w-full lg:w-[231px]" src={service1} alt="" />
                                        <div className="details flex flex-col mx-[25px] mb-[30px] lg:mx-0 lg:mb-0 justify-between gap-5">
                                            <div className="top flex items-center justify-between gap-[30px]">
                                                <span className="text-base mr-10 font-bold px-[10px] py-[8px] text-[#2D36FF] bg-[#D8D9FF78] rounded-[2px]">Construction</span>
                                                <span className="flex items-center gap-2">
                                                    <Image src={star} alt="" />
                                                    4.9
                                                </span>
                                            </div>
                                            <span className="font-bold text-lg text-custom-blue">Architectural Services</span>
                                            <div className="location flex items-center gap-[10px]">
                                                <Image src={location} alt="" />
                                                <span className="text-[#707070] text-base font-semibold">Abuja, Ademola adetoko cresent</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btns-reviews mr-[60px] flex flex-col items-center justify-center">
                                        <div className="btns flex flex-col mb-[23px] lg:mb-0 lg:flex lg:flex-row lg:items-center gap-[10px]">
                                            <Button className="btn w-40 lg:w-auto">Edit</Button>
                                            <Button className="bg-[#E3F7FF] w-40 lg:w-auto text-sm text-[#00AEEF] px-[18px] py-[10px] rounded-[8px] hover:bg-[#cde1e9]">Publish</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
 
export default Services;