import clsx from "clsx";
import { FC, ReactNode, useState } from "react";
import { Card, CardContent } from "./ui/card";

import close from '../assets/icons/close.png'
import Image from "next/image";
import { Button } from "./ui/button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCancel?: () => void;
    onConfirm?: () => void;
    cancelBtn?: string;
    confirmBtn?: string;
    children: ReactNode
}
 
const Modal: FC<ModalProps> = ({ isOpen, onClose, onCancel, onConfirm, cancelBtn, confirmBtn, children }) => {
    return ( 
        <>
            {isOpen &&
                <div className="modal h-full flex items-start fixed justify-center w-screen bg-black/50 z-50 backdrop-blur-sm top-0 right-0 transition-all duration-500 ease-in">
                    <div className="modal-content mx-5 mt-32">
                        <Card className="lg:w-[534px] px-[30px] py-[25px]">
                            <CardContent className="flex flex-col">
                                <div className="close flex items-center justify-end">
                                    <Image onClick={onClose} className="cursor-pointer" src={close} alt="" />
                                </div>
                                <div className="main-body flex flex-col px-[53px] pb-[43px]">
                                    {children}

                                    {confirmBtn || cancelBtn ? <div className="btns flex items-center justify-end gap-[15px] mt-[53px]">
                                        <Button className="bg-[#E3F7FF] lg:w-auto text-sm text-[#00AEEF] px-[40px] py-[10px] rounded-[8px] hover:bg-[#cde1e9]">{ cancelBtn }</Button>
                                        <Button className="btn-sp lg:w-auto">{confirmBtn}</Button>
                                    </div> : ''}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    
                </div>
            }
        </>
    );
}
 
export default Modal;