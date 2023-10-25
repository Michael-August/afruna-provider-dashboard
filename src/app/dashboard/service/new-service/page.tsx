"use client"

import Modal from "@/src/components/Modal";
import { useModal } from "@/src/components/context/ModalContext";
import GallarySetup from "@/src/components/service-setup-steps/Gallarysetup";
import ServiceInfoForm from "@/src/components/service-setup-steps/Serviceinfo-form";
import ServiceSetupForm from "@/src/components/service-setup-steps/Servicesetup-form";
import Stepper from "@/src/components/stepper/Stepper";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { FC, useState } from "react"

interface NewServiceProps {
    
}
 
const NewService: FC<NewServiceProps> = () => {
    const steps = ["General Info", "Availability", "Gallary"]
    const [activeStep, setActiveStep] = useState(0)

    const { isOpen, openModal, closeModal } = useModal();
    return ( 
        <>
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
                                {activeStep === 0 && <ServiceInfoForm />}
                                {activeStep === 1 && <ServiceSetupForm />}
                                {activeStep === 2 && <GallarySetup />}
                            </div>
                            <div className="btns flex items-center justify-end gap-4 mt-[45px]">
                                {activeStep !== 0 &&
                                    <Button onClick={() => setActiveStep(activeStep - 1)} className="btn-sp">Previous</Button>}
                                {activeStep !== steps.length - 1 &&
                                    <Button onClick={() => setActiveStep(activeStep + 1)} className="btn-sp">Next</Button>}
                                {activeStep === steps.length - 1 && <Button onClick={openModal} className="btn-sp">Done</Button>}
                            </div>
                        </CardContent>
                    </Card>
                </main>

                <Modal isOpen={isOpen} onClose={closeModal} cancelBtn="No" confirmBtn="Yes">
                    <div className="modal-content flex flex-col gap-[17px] items-center justify-center">
                        <span className="text-2xl text-custom-blue font-bold">Service Listing successful</span>
                        <span className="text-[#777] text-base">Are you sure you want to publish this service?</span>
                    </div>
                </Modal>
            </div>
        </>
    );
}
 
export default NewService;