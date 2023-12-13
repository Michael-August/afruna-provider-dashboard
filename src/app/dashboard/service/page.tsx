"use client"

import { Button } from "@/src/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/src/components/ui/select";
import { FC, useEffect, useState } from "react";

import Image from "next/image";

import plus from '../../../assets/icons/plus.png'
import service1 from '../../../assets/images/bookings/booking2.png'
import star from '../../../assets/icons/star.png'
import location from '../../../assets/icons/location.png'

import { Card, CardContent } from "@/src/components/ui/card";
import Modal from "@/src/components/Modal";
import { useModal } from "@/src/components/context/ModalContext";
import Link from "next/link";
import Service from "@/src/services/services.service";
import { useSelector } from "react-redux";
import { RootState, store } from "@/src/redux/store";
import { setServiceId } from "@/src/redux/features/app/service_slice";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "@/src/components/loading";
import Pagination from "@/src/components/Pagination";

interface ServicesProps {
    
}
 
const Services: FC<ServicesProps> = () => {
    const router = useRouter()
    const serviceApis = new Service(router)
    const { isOpen, openModal, closeModal } = useModal();
    const services = useSelector((state: RootState) => state.service.services)
    const totalPages = useSelector((state: RootState) => state.util.totalPages)
    const [isLoading, setIsLoading] = useState(false)
    const [servicePublishState, setServicePublishState] = useState('')
    const [serviceToPublish, setServiceToPublish] = useState('')

    const searchParams = useSearchParams()
    let page = searchParams.get('page') as string

    if(page === null) page = '1'

    const sendDataForEditting = (serviceId: string) => {
        store.dispatch(setServiceId(serviceId))
        router.push('/dashboard/service/new-service')
    }
    
    const openEditPublishModal = (serviceId: string, publishState: boolean) => {
        openModal()
        setServiceToPublish(serviceId)
        if (publishState === true) {
            setServicePublishState('Unpublish')
        }
    }

    const confirmPublishUpdate = (serviceId: string) => {
        serviceApis.updateServicePublish(serviceId)
        closeModal()
    }

    const cancelPublishUpdate = () => {
        closeModal()
    }

    useEffect(() => {
        serviceApis.getServices({setIsLoading}, Number(page))
    }, [page])
    return ( 
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
                        <Link href={'/dashboard/service/new-service'}>
                            <Button className="btn rounded-[4px] flex items-center justify-center gap-3 px-[18px]">
                                <Image src={plus} alt="plus icon" />
                                <span>Create Service</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>
            <main className="">
                {isLoading === false ? <div className="services w-full flex flex-col gap-[29px] mb-[23px]">
                    {services.map(service => (
                        <div key={service._id} className="service">
                            <Card className="w-full rounded-[8px] bg-[#FAFCFF] lg:py-[21px] lg:px-[22px]">
                                <CardContent className="flex flex-col lg:flex lg:flex-row items-center justify-between">
                                    <div className="img-detail lg:flex lg:flex-row lg:items-center lg:justify-center">
                                        <Image className="lg:mr-[21px] mb-[25px] lg:mb-0 w-full lg:w-[231px]" width={231} height={167} src={service.photos && service.photos.length !== 0 ? `${service.photos[0]}` : service1 } alt="" />
                                        <div className="details flex flex-col mx-[25px] mb-[30px] lg:mx-0 lg:mb-0 justify-between gap-5">
                                            <div className="top flex items-center justify-between gap-[30px]">
                                                <span className="text-base mr-10 font-bold px-[10px] py-[8px] text-[#2D36FF] bg-[#D8D9FF78] rounded-[2px]">{service.category.name}</span>
                                                <span className="flex items-center gap-2">
                                                    {
                                                        service.ratings === 0 ? <span>Rating</span>
                                                        : [...Array(Math.floor(service.ratings))].map((v, i) => < Image key={v} src={star} alt="" />)
                                                    }
                                                    {service.ratings}
                                                </span>
                                            </div>
                                            <span className="font-bold text-lg text-custom-blue">{service.name}</span>
                                            <div className="location flex items-center gap-[10px]">
                                                <Image src={location} alt="" />
                                                <span className="text-[#707070] text-base font-semibold">{service.state} { service.country }</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btns-reviews mr-[60px] flex flex-col items-center justify-center">
                                        <div className="btns flex flex-col mb-[23px] lg:mb-0 lg:flex lg:flex-row lg:items-center gap-[10px]">
                                            <Button className="btn-sp w-40 lg:w-auto" onClick={() => sendDataForEditting(service._id)}>Edit</Button>
                                            <Button onClick={() => openEditPublishModal(service._id, service.publish)} className="bg-[#E3F7FF] w-40 lg:w-auto text-sm text-[#00AEEF] px-[18px] py-[10px] rounded-[8px] hover:bg-[#cde1e9]">{service.publish === false ? "Publish" : "Unpublish"}</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                    {services.length === 0 &&<div className="nobooking flex justify-center items-center">
                        No Booking for you yet.
                    </div>}
                    {/* <div className="service">
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
                                        <Button onClick={openModal} className="bg-[#E3F7FF] w-40 lg:w-auto text-sm text-[#00AEEF] px-[18px] py-[10px] rounded-[8px] hover:bg-[#cde1e9]">Publish</Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div> */}
                </div>: <Loading />}

                <Modal cancelBtn="No" confirmBtn="Yes" isOpen={isOpen} onClose={closeModal} onCancel={cancelPublishUpdate} onConfirm={() => confirmPublishUpdate(serviceToPublish)}>
                    <div className="message flex flex-col gap-[18px]">
                        <span className="title text-2xl font-bold text-custom-blue">{servicePublishState === 'unpublish' ? "Unpublish" : 'Publish'} Service</span>
                        <div className="body text-base text-[#777]">Are you sure you want to {servicePublishState === 'unpublish' ? "Unpublish" : 'Publish'} this service?</div>
                    </div>
                </Modal>
                <Pagination page={page} totalPages={totalPages} />   
            </main>
        </div>
    );
}
 
export default Services;