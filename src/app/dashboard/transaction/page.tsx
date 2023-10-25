"use client"

import { FC } from "react";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";

import plus from '../../../assets/icons/plus.png'
import Modal from "@/src/components/Modal";
import { useModal } from "@/src/components/context/ModalContext";
import { Label } from "@/src/components/ui/label";
import { Card, CardContent } from "@/src/components/ui/card";

import wallet from '../../../assets/images/wallet.png'
import arrowRight from '../../../assets/icons/arrow_right.png'
import redEclipse from '../../../assets/icons/red-eclipse.png'
import greenEclipse from '../../../assets/icons/green-eclipse.png'
import printer from '../../../assets/icons/printer.png'
import trash from '../../../assets/icons/trash.png'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table";

interface TransactionsProps {
    
}
 
const Transactions: FC<TransactionsProps> = () => {
    const { isOpen, openModal, closeModal } = useModal();
    return ( 
        <>
            <div className="dashboard max-w-screen lg:px-[32px] px-5 pb-[132px]">
                <header className="py-6 lg:mx-[-32px] lg:px-[32px] lg:bg-white lg:mb-8 mb-[30px]">
                    <div className="item flex flex-wrap items-center justify-between">
                        <span className="text-2xl font-semibold">Transactions</span>
                        <Button onClick={openModal} className="btn rounded-[4px] flex items-center justify-center gap-3 px-[18px]">
                            <Image src={plus} alt="plus icon" />
                            <span>Set Withdraw</span>
                        </Button>
                    </div>
                </header>
                <main className="flex flex-col">
                    <section className="cards flex flex-wrap items-center mb-[23px] gap-[14px]">
                        <Card className="w-full relative px-4 py-7 lg:w-[487px] lg:px-[30px] lg:py-[23px] rounded-[15px]">
                            <CardContent>
                                <div className="top flex items-center justify-between">
                                    <div className="flex items-center gap-[18px]">
                                        <div className="wallet">
                                            <Image src={wallet} alt="" />
                                        </div>
                                        <div className="info flex flex-col gap-2">
                                            <span className="text-custom-blue text-base font-medium">Available Balance</span>
                                            <span className="text-[32px] font-normal">$20,000</span>
                                        </div>
                                    </div>
                                    <Button className="text-white px-4 py-2 bg-[#0177B7] text-sm">Withdraw</Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="w-full relative px-4 py-7 lg:w-[307px] lg:px-[30px] lg:py-[23px] rounded-[15px]">
                            <CardContent>
                                <div className="top flex items-center justify-between">
                                    <div className="info flex flex-col gap-2">
                                        <span className="text-custom-blue text-base font-medium">Total fund withdrawal</span>
                                        <span className="text-[32px] font-normal">$00,000</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="w-full relative px-4 py-7 lg:w-[307px] lg:px-[30px] lg:py-[23px] rounded-[15px]">
                            <CardContent>
                                <div className="top flex items-center justify-between">
                                    <div className="info flex flex-col gap-2">
                                        <span className="text-custom-blue text-base font-medium">Total fund withdrawal</span>
                                        <span className="text-[32px] font-normal">$00,000</span>
                                    </div>
                                    <Image src={arrowRight} alt="" />
                                </div>
                            </CardContent>
                        </Card>
                        
                    </section>

                    <span className="note lg:w-[458] text-[#494A6E] mb-[25px] text-sm">If your available Balance exceeds S$1000, it’ll be transferred to your bank account automatically</span>

                    <div className="table">
                        <Card className="px-[23px] pt-[26px] pb-[44px]">
                            <CardContent className="flex flex-col">
                                <span className="heading text-[20px] font-extrabold">Transaction history</span>
                                <hr className="mx-[-23px] mb-[22px] mt-[26px]" />

                                <Table className="">
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="text-[#7C7C7C] text-sm">Transaction ID</TableHead>
                                            <TableHead className="text-[#7C7C7C] text-sm">Event</TableHead>
                                            <TableHead className="text-[#7C7C7C] text-sm">Summary</TableHead>
                                            <TableHead className="text-[#7C7C7C] text-sm">Date</TableHead>
                                            <TableHead className="text-[#7C7C7C] text-sm">Amount</TableHead>
                                            <TableHead className="text-[#7C7C7C] text-sm">Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="text-sm">#6545</TableCell>
                                            <TableCell className="flex items-center gap-1 text-[#FE3B20] text-sm">
                                                <Image src={redEclipse} alt="" />
                                                Withdrawal
                                            </TableCell>
                                            <TableCell className="text-sm">Hand craft footwear</TableCell>
                                            <TableCell className="text-sm">01 Oct | 11:29 am</TableCell>
                                            <TableCell className="text-sm">$64</TableCell>
                                            <TableCell className="flex items-center gap-[17px]">
                                                <Image className="cursor-pointer" src={printer} alt="" />
                                                <Image className="cursor-pointer" src={trash} alt="" />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="text-sm">#6545</TableCell>
                                            <TableCell className="flex items-center gap-1 text-[#4D9A00] text-sm">
                                                <Image src={greenEclipse} alt="" />
                                                Credited
                                            </TableCell>
                                            <TableCell className="text-sm">Hand craft footwear</TableCell>
                                            <TableCell className="text-sm">01 Oct | 11:29 am</TableCell>
                                            <TableCell className="text-sm">$64</TableCell>
                                            <TableCell className="flex items-center gap-[17px]">
                                                <Image className="cursor-pointer" src={printer} alt="" />
                                                <Image className="cursor-pointer" src={trash} alt="" />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
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
 
export default Transactions;