"use client"

import { FC } from "react";

import Image from "next/image";

import { Button } from "@/src/components/ui/button";

import plus from '../../../assets/icons/plus.png'
import Modal from "@/src/components/Modal";
import { Label } from "@/src/components/ui/label";
import { useModal } from "@/src/components/context/ModalContext";

interface ChatProps {
    
}
 
const Chat: FC<ChatProps> = () => {
    const { isOpen, openModal, closeModal } = useModal();
    return ( 
        <>
            <div className="dashboard max-w-screen lg:px-[32px] px-5 pb-[132px]">
                <header className="py-6 lg:mx-[-32px] lg:px-[32px] lg:bg-white lg:mb-8 mb-[30px]">
                    <div className="item flex flex-wrap items-center justify-between">
                        <span className="text-2xl font-semibold">Chat Room</span>
                        <Button onClick={openModal} className="btn rounded-[4px] flex items-center justify-center gap-3 px-[18px]">
                            <Image src={plus} alt="plus icon" />
                            <span>Set Withdraw</span>
                        </Button>
                    </div>
                </header>
                <main className="flex flex-col">
                    coming soon!
                </main>

                <Modal cancelBtn="cancel" confirmBtn="submit" isOpen={isOpen} onClose={closeModal}>
                    <div className="message flex flex-col">
                        <div className="top flex flex-col gap-2 mb-7">
                            <span className="title text-2xl font-bold text-custom-blue">Set your payout</span>
                            <span className="body text-base text-[#777]">this an account where Afruna would send your payout to</span>
                        </div>
                        <form action="" className="flex flex-col gap-[22px]">
                            <div className="form-control">
                                <div className="form-control w-full flex flex-col gap-2">
                                    <Label className="text-sm font-semibold">Bank <span className="text-[red]">*</span></Label>
                                    <input type="text" name="" id="" placeholder="Access bank"
                                        className="border-[1px] w-full shadow-md text-sm border-[#FFDBB6] rounded-[6px] p-[10px] focus:outline-none" />
                                </div>
                            </div>
                            <div className="form-control">
                                <div className="form-control w-full flex flex-col gap-2">
                                    <Label className="text-sm font-semibold">Account number <span className="text-[red]">*</span></Label>
                                    <input type="text" name="" id="" placeholder="Access bank"
                                        className="border-[1px] w-full shadow-md text-sm border-[#FFDBB6] rounded-[6px] p-[10px] focus:outline-none" />
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        </>
    );
}
 
export default Chat;