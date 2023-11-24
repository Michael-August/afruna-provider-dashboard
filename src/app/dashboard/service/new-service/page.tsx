"use client"

import Modal from "@/src/components/Modal";
import ButtonLoading from "@/src/components/buttonLoading";
import { useModal } from "@/src/components/context/ModalContext";
import GallarySetup from "@/src/components/service-setup-steps/Gallarysetup";
import ServiceInfoForm from "@/src/components/service-setup-steps/Serviceinfo-form";
import ServiceSetupForm from "@/src/components/service-setup-steps/Servicesetup-form";
import Stepper from "@/src/components/stepper/Stepper";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { ICreateService, IServiceCategory, IServiceSubCategory } from "@/src/interfaces/IService";
import { removeServiceId } from "@/src/redux/features/app/service_slice";
import { RootState, store } from "@/src/redux/store";
import Service from "@/src/services/services.service";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

interface NewServiceProps {
    
}
 
const NewService: FC<NewServiceProps> = () => {
    const router = useRouter()
    const serviceId = useSelector((state: RootState) => state.service.serviceId)
    const serviceToUpdate = useSelector((state: RootState) => state.service.service)

    const steps = ["General Info", "Availability", "Gallary"]
    const [activeStep, setActiveStep] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const serviceApis = new Service(router)

    const [categories, setCategories] = useState<IServiceCategory[]>()
    const [subCategories, setSubCategories] = useState<IServiceSubCategory[]>()

    const [serviceFormData, setServiceFormData] = useState<any>({
        name: '',
        category: '',
        subCategory: '',
        country: '',
        state: '',
        price: 0,
        desc: '',
        additionalService: [],
        availability: {
            days: [],
            hours: {
                from: '',
                to: '',
            }
        },
        media: {}
    })

    const { isOpen, openModal, closeModal } = useModal();
    const addDays = (day: string) => {
        const updateFormData = { ...serviceFormData }
        updateFormData.availability.days = [...updateFormData.availability.days, day]
        setServiceFormData(updateFormData)
    }
    const [mediaSrc, setMediaSrc] = useState<any>()

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        if (name === 'from') {
            const updateFormData = { ...serviceFormData }
            updateFormData.availability.hours.from = value
            setServiceFormData(updateFormData)
        }

        if (name === 'to') {
            const updateFormData = { ...serviceFormData }
            updateFormData.availability.hours.to = value
            setServiceFormData(updateFormData)
        }

        if (name == 'media') {
            const file = e.target.files[0]
            if (file) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    setMediaSrc(e.target?.result);
                };

                reader.readAsDataURL(file);
                setServiceFormData({ ...serviceFormData, media: file })
            }
        }
        setServiceFormData({ ...serviceFormData, [name]: value });
    };

    const handleCountry = (value: string) => {
        setServiceFormData({...serviceFormData, country: value})
    }

    const handleState = (value: string) => {
        setServiceFormData({...serviceFormData, state: value})
    }

    const handleCategory = (value: string) => {
        setServiceFormData({ ...serviceFormData, category: value })
        serviceApis.getServiceSubCategories(value)
            .then(data => setSubCategories(data?.data))
    }

    const handleSubCat = (value: string) => {
        setServiceFormData({...serviceFormData, subCategory: value})
    }

    const nextForm = () => {
        if (activeStep == 0) {
            if (serviceFormData.name == '') {
                toast.error('Business name is required')
                return
            }
            if (serviceFormData.category == '') {
                toast.error('Category is required')
                return
            }
            // if (serviceFormData.subCategory == '') {
            //     toast.error('Subcategory is required')
            //     return
            // }
            if (serviceFormData.country == '') {
                toast.error('Country is required')
                return
            }
            if (serviceFormData.state == '') {
                toast.error('State is required')
                return
            }
            if (serviceFormData.price == 0) {
                toast.error('Price is required')
                return
            }
            if (serviceFormData.desc == '') {
                toast.error('Description is required')
                return
            }
            setActiveStep(activeStep + 1)
        }

        if (activeStep == 1) {
            if (serviceFormData.availability.days.length == 0) {
                toast.error('Select at least one day')
                return
            }

            setActiveStep(activeStep + 1)
        }
    }

    const processServiceCreation = () => {
        if (serviceFormData.subCategory === "") serviceFormData.subCategory = undefined
        
        const formData = new FormData()
        formData.append('name', serviceFormData.name)
        formData.append('category', serviceFormData.category)
        formData.append('subCategory', serviceFormData.subCategory)
        formData.append('country', serviceFormData.country)
        formData.append('state', serviceFormData.state)
        formData.append('price', serviceFormData.price)
        formData.append('desc', serviceFormData.desc)
        formData.append('availability', JSON.stringify(serviceFormData.availability))
        formData.append('media', serviceFormData.media)
        serviceApis.creatService(formData, { setIsLoading })
        openModal()
    }

    const confirmPublishing = () => {
        let mostRecentService = JSON.parse(localStorage.getItem('recentService') || 'null')
        serviceApis.updateServicePublish(mostRecentService._id)
        closeModal()
    }

    const cancelPublishing = () => {
        closeModal()
    }

    useEffect(() => {
        const categoriesData = serviceApis.getServiceCategories()
        categoriesData.then(data => setCategories(data?.data))
        if (serviceId) {
            console.log(serviceToUpdate)
            serviceApis.getService(serviceId, { setIsLoading })
            setServiceFormData({...serviceToUpdate})
        }  
        
        // return () => {
        //     store.dispatch(removeServiceId())
        // }
    }, [])

    return ( 
        <div className="services max-w-screen lg:px-[32px] px-5">
            <header className="py-6 lg:mx-[-32px] lg:px-[32px] lg:bg-white lg:mb-8 mb-[30px]">
                <div className="item flex flex-wrap gap-[25px] items-center">
                    <span className="text-2xl font-semibold">My Service</span>
                    <span className="text-[#707070] text-2xl font-semibold">Service Creation</span>
                </div>
            </header>
            <main className="">
                <Card className="rounded-t-[16px] p-5 lg:pl-[96px] lg:pr-[350px] lg:py-[90px]">
                    <CardContent className="flex flex-col">
                        <div className="top">
                            <span className="text-[20px] font-bold">Service Setup steps</span>
                        </div>
                        <div className="stepper mt-7 mb-[50px]">
                            <Stepper steps={steps} activeStep={activeStep} />
                        </div>
                        <div className="forms">
                            {activeStep === 0 && <ServiceInfoForm formData={serviceFormData} handleChange={handleChange}
                                handleCategoryChange={handleCategory} handleCountryChange={handleCountry} handleStateChange={handleState}
                                handleSubCatChange={handleSubCat} cats={categories} subCats={subCategories} />}
                            {activeStep === 1 && <ServiceSetupForm formData={serviceFormData} handleChange={handleChange} addDays={addDays} />}
                            {activeStep === 2 && <GallarySetup mediaSrc={mediaSrc} formData={serviceFormData} handleChange={handleChange} />}
                        </div>
                        <div className="btns flex items-center justify-end gap-4 mt-[45px]">
                            {activeStep !== 0 &&
                                <Button onClick={() => setActiveStep(activeStep - 1)} className="btn-sp">Previous</Button>}
                            {activeStep !== steps.length - 1 &&
                                <Button onClick={nextForm} className="btn-sp">Next</Button>}
                            {activeStep === steps.length - 1 && !isLoading && <Button onClick={processServiceCreation} className="btn-sp">Done</Button>}
                            {isLoading && <Button className="btn shadow-md mt-8 py-[10px]"><ButtonLoading /></Button>}
                        </div>
                    </CardContent>
                </Card>
            </main>

            <Modal isOpen={isOpen} onClose={closeModal} onConfirm={confirmPublishing} onCancel={cancelPublishing} cancelBtn="No" confirmBtn="Yes">
                <div className="modal-content flex flex-col gap-[17px] items-center justify-center">
                    <span className="text-2xl text-custom-blue font-bold">Service Listing successful</span>
                    <span className="text-[#777] text-base">Are you sure you want to publish this service?</span>
                </div>
            </Modal>
        </div>
    );
}
 
export default NewService;