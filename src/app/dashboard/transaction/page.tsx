"use client"

import { FC, useEffect, useState } from "react";
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
import Transaction from "@/src/services/transactions.service";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { IConfirmankDetails, ISetBankDetails, ITransaction } from "@/src/interfaces/ITransaction";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select";
import { toast } from "react-toastify";
import Pagination from "@/src/components/Pagination";
import { useSearchParams } from "next/navigation";

interface TransactionsProps {
    
}
 
const Transactions: FC<TransactionsProps> = () => {
    const { isOpen, openModal, closeModal } = useModal();
    const [openModalOnConfirm, setOpenModalOnConfirm] = useState(false)
    const [openModalOnWithdrawal, setOpenModalOnWithdrawal] = useState(false)
    const [bankDetails, setBankDetails] = useState<IConfirmankDetails>({
        bankCode: '',
        accountNumber: ''
    })
    const [witdrawalDetail, setWithdrawalDetail] = useState({ amount: 0, accountId: '' })
    const [confirmedDetails, setConfirmedDetails] = useState({ account_name: '', account_number: '', bank_id: 0 })
    const transationApis = new Transaction()

    const transactions = useSelector((state: RootState) => state.transaction.transactions)
    const banks = useSelector((state: RootState) => state.transaction.banks)
    const userWallet = useSelector((state: RootState) => state.transaction.wallet)
    const totalPages = useSelector((state: RootState) => state.util.totalPages)

    const searchParams = useSearchParams()
    let page = searchParams.get('page') as string
    console.log(page)

    if(page === null) page = '1'

    const handleBankChange = (bank: any) => {
        setBankDetails({ ...bankDetails, bankCode: bank })
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setBankDetails({ ...bankDetails, [name]: value })
    }
    const handleWithdrawalDetailChange = (e: any) => {
        const { name, value } = e.target
        setWithdrawalDetail({ ...witdrawalDetail, [name]: value })
    }
    const handleAccountChange = (account: any) => {
        setWithdrawalDetail({...witdrawalDetail, accountId: account})
    }
    const confirmBankUpdate = () => {
        let bankName = banks.find(bank => bank.code === bankDetails.bankCode)?.name
        let payload: ISetBankDetails = {
            accountName: confirmedDetails.account_name,
            accountNumber: confirmedDetails.account_number,
            bankCode: bankDetails.bankCode,
            bankName 
        }
        
        transationApis.setBankDetails(payload).then(data => {
            if (data?.success == true) {
                toast.success('Bank details updated')
                cancelBankUpdate()
                cancelConfirmBankUpdate()
                transationApis.getWalletDetails()
            }
        })
    }

    const cancelConfirmBankUpdate = () => {
        closeModal()
    }
    const cancelBankUpdate = () => {
        setOpenModalOnConfirm(false)
    }

    const confirmBankDetails = (data: IConfirmankDetails) => {
        if (bankDetails.bankCode === '') {
            toast.error('Please provide a bank')
            return
        }
        if (bankDetails.accountNumber === '') {
            toast.error('Please provide an account number')
            return
        }
        const confirmationDetails = transationApis.confirmBankDetails(data)
        confirmationDetails.then(value => {
            if (value?.success == true) {
                setOpenModalOnConfirm(value.success)
                setConfirmedDetails({account_name: value.data.account_name, account_number: value.data.account_number, bank_id: value.data.bank_id})
            }
        })
        .catch((error) => {
            
        })
    }

    const cancelWithdrawal = () => {
        setOpenModalOnWithdrawal(false)
    }

    const placeWithdrawal = () => {
        if (witdrawalDetail.amount > userWallet.balance) {
            toast.error('Amount can not be larger than balance')
            return
        }

        if (witdrawalDetail.amount === 0) {
            toast.error('Enter amount')
            return
        }

        let payload = {
            amount: witdrawalDetail.amount,
            accountId: userWallet.accounts[0]._id
        }

        transationApis.withdraw(payload).then(data => {
            toast.success('Withdrawal placed')
        })
    }

    useEffect(() => {
        transationApis.getWalletDetails()
        transationApis.getTransactions(Number(page))
        transationApis.getBanks()
    }, [page])
    return ( 
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
                                        <span className="text-[32px] font-normal">${ userWallet.balance }</span>
                                    </div>
                                </div>
                                <Button onClick={() => setOpenModalOnWithdrawal(true)} className="text-white px-4 py-2 bg-[#0177B7] text-sm">Withdraw</Button>
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

                            <Table className="w-full">
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
                                    {transactions.length === 0 ?
                                        <TableRow className="">
                                            <TableCell className="text-[#7C7C7C] text-sm">No transactions yet</TableCell>
                                        </TableRow>
                                        : transactions.map((transaction: ITransaction) => (
                                            <TableRow key={transaction.customId}>
                                                <TableCell className="text-sm">{ transaction.customId }</TableCell>
                                                {transaction.event === 'Withdrawal' ?
                                                    <TableCell className="flex items-center gap-1 text-[#FE3B20] text-sm">
                                                        <Image src={redEclipse} alt="" />
                                                        Withdrawal
                                                    </TableCell> :
                                                    <TableCell className="flex items-center gap-1 text-[#4D9A00] text-sm">
                                                        <Image src={greenEclipse} alt="" />
                                                        Credited
                                                    </TableCell>
                                                }
                                                <TableCell className="text-sm">{transaction.description}</TableCell>
                                                <TableCell className="text-sm">{ transaction.date }01 Oct | 11:29 am</TableCell>
                                                <TableCell className="text-sm">${transaction.amount}</TableCell>
                                                <TableCell className="flex items-center gap-[17px]">
                                                    <Image className="cursor-pointer" src={printer} alt="" />
                                                    <Image className="cursor-pointer" src={trash} alt="" />
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
                <Pagination page={page} totalPages={totalPages} />
            </main>

            <Modal cancelBtn="cancel" confirmBtn="submit" isOpen={isOpen} onCancel={cancelConfirmBankUpdate} onConfirm={() => confirmBankDetails(bankDetails)} onClose={closeModal}>
                <div className="message flex flex-col">
                    <div className="top flex flex-col gap-2 mb-7">
                        <span className="title text-2xl font-bold text-custom-blue">Set your payout</span>
                        <span className="body text-base text-[#777]">this an account where Afruna would send your payout to</span>
                    </div>
                    <form action="" className="flex flex-col gap-[22px]">
                        <div className="form-control">
                            <div className="form-control w-full flex flex-col gap-2">
                                <Label className="text-sm font-semibold">Bank <span className="text-[red]">*</span></Label>
                                <Select name="category" value={bankDetails.bankCode} onValueChange={(value) => handleBankChange(value)}>
                                    <SelectTrigger className="shadow-md focus:outline-none text-sm border-[#FFDBB6] rounded-[6px] px-[19px] py-4">
                                        <SelectValue className="text-[#777]" placeholder="Select Bank" />
                                    </SelectTrigger>
                                    <SelectContent className="focus:outline-none text-sm border-[#FFDBB6] rounded-[6px]">
                                        <SelectGroup>
                                            {banks?.map(bank => (
                                                <SelectItem key={bank.id} value={bank.code}>{ bank.name }</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="form-control">
                            <div className="form-control w-full flex flex-col gap-2">
                                <Label className="text-sm font-semibold">Account number <span className="text-[red]">*</span></Label>
                                <input type="number" name="accountNumber" onChange={handleChange} value={bankDetails.accountNumber} placeholder="Access bank"
                                    className="border-[1px] w-full shadow-md text-sm border-[#FFDBB6] rounded-[6px] p-[10px] focus:outline-none" />
                            </div>
                        </div>
                    </form>
                </div>
            </Modal>
            <Modal cancelBtn="No" confirmBtn="Yes" onClose={cancelBankUpdate} isOpen={openModalOnConfirm} onCancel={cancelBankUpdate} onConfirm={confirmBankUpdate}>
                <div className="modal-content flex flex-col gap-[17px] items-center justify-center">
                    <span className="text-2xl text-custom-blue font-bold">Details Confirmation</span>
                    <span className="text-[#777] text-base mb-4">Are these details correct</span>
                </div>
                <div className="flex flex-col gap-4">
                    <span>Account Name: {confirmedDetails.account_name}</span>
                    <span>Account Number: {confirmedDetails.account_number}</span>
                    <span>If confirmed, your bank details will be updated</span>
                </div>
            </Modal>
            <Modal cancelBtn="cancel" confirmBtn="withdraw" onClose={cancelWithdrawal} onCancel={cancelWithdrawal} isOpen={openModalOnWithdrawal} onConfirm={placeWithdrawal}>
                <form action="" className="flex flex-col gap-5">
                    <div className="form-control">
                        <div className="form-control w-full flex flex-col gap-2">
                            <Label className="text-sm font-semibold">Amount <span className="text-[red]">*</span></Label>
                            <input type="number" name="amount" placeholder="40" value={witdrawalDetail.amount} onChange={handleWithdrawalDetailChange}
                                className="border-[1px] w-full shadow-md text-sm border-[#FFDBB6] rounded-[6px] p-[10px] focus:outline-none" />
                        </div>
                    </div>

                    <div className="form-control w-full flex flex-col gap-2">
                        <Label className="text-sm font-semibold">Account <span className="text-[red]">*</span></Label>
                        <Select name="category" value={witdrawalDetail.accountId} onValueChange={(value) => handleAccountChange(value)}>
                            <SelectTrigger className="shadow-md focus:outline-none text-sm border-[#FFDBB6] rounded-[6px] px-[19px] py-4">
                                <SelectValue className="text-[#777]" placeholder="Select Account" />
                            </SelectTrigger>
                            <SelectContent className="focus:outline-none text-sm border-[#FFDBB6] rounded-[6px]">
                                <SelectGroup>
                                    {userWallet.accounts?.map(account => (
                                        <SelectItem key={account._id} value={account._id}>{ account.bankName }</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
 
export default Transactions;