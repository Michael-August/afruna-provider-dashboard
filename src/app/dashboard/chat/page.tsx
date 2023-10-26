"use client"

import { FC } from "react";

import Image from "next/image";

import { Button } from "@/src/components/ui/button";

import plus from '../../../assets/icons/plus.png'
import Modal from "@/src/components/Modal";
import { Label } from "@/src/components/ui/label";
import { useModal } from "@/src/components/context/ModalContext";
import { Card, CardContent } from "@/src/components/ui/card";

import searchIcon from '../../../assets/icons/search.png'
import profilepic from '../../../assets/images/profile_pic.png'
import phone from '../../../assets/icons/phone.png'
import info from '../../../assets/icons/info.png'

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
                <main className="lg:flex w-full gap-4">
                    <div className="convo-area">
                        <Card className="rounded-[20px] pt-[38px] px-6 pb-[86px] lg:327px">
                            <CardContent className="flex flex-col">
                                <div className="top">
                                    <span className="text-[20px]">Messages</span>
                                    <div className="search my-5 flex items-center justify-between px-[19px] py-[10px] border border-[#D5D5E6] rounded-[8px]">
                                        <input type="text" className="outline-none" name="" placeholder="Search Name" id="" />
                                        <Image src={searchIcon} alt="" />
                                    </div>
                                </div>
                                <div className="friend-list flex flex-col gap-2">
                                    <div className="friend cursor-pointer px-[14px] py-4 flex items-center justify-between">
                                        <div className="pic-info flex items-center gap-4">
                                            <Image src={profilepic} width={40} height={40} alt="" />
                                            <div className="info flex flex-col gap-1">
                                                <span className="text-sm text-custom-blue font-semibold">Bhai jan ADMIN</span>
                                                <span className="last-chat text-[#A2A2A2] text-xs">#CU6798H</span>
                                            </div>
                                        </div>
                                        <span className="read-status bg-[#E1E2FF] text-[##5D5FEF] w-6 h-6 rounded-[50px] text-center">1</span>
                                    </div>
                                    <div className="friend cursor-pointer px-[14px] py-4 flex items-center justify-between">
                                        <div className="pic-info flex gap-4">
                                            <Image src={profilepic} width={40} height={40} alt="" />
                                            <div className="info flex flex-col gap-1">
                                                <span className="text-sm text-custom-blue font-semibold">Bhai jan ADMIN</span>
                                                <span className="last-chat text-[#A2A2A2] text-xs">#CU6798H</span>
                                            </div>
                                        </div>
                                        <span className="read-status bg-[#E1E2FF] text-[##5D5FEF] w-6 h-6 rounded-[50px] text-center">1</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="chat-details">
                        <Card className="px-6 pb-9 rounded-[20px] lg:w-[767px]">
                            <CardContent className="">
                                <div className="top px-[31px] py-[30px] flex items-center justify-between">
                                    <div className="pic-info flex items-center gap-4">
                                        <Image src={profilepic} width={40} height={40} alt="" />
                                        <div className="info flex flex-col gap-1">
                                            <span className="text-sm text-custom-blue font-semibold">Bhai jan ADMIN</span>
                                            <span className="last-chat text-[#A2A2A2] text-xs">#CU6798H</span>
                                        </div>
                                    </div>
                                    <div className="actions flex items-center gap-[22px]">
                                        <Image src={phone} alt="" />
                                        <Image src={info} alt="" />
                                    </div>
                                </div>
                                <hr className="mb-5 -mx-6" />
                                <div className="chats">
                                    
                                </div>
                            </CardContent>
                        </Card>
                    </div>
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