"use client"

import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

import mainProfilePics from '../../../assets/images/main-profile.png'
import arrowDown from '../../../assets/icons/arrow_down.png'
import { Card, CardContent } from "@/src/components/ui/card";
import { Label } from "@/src/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/src/components/ui/select";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import Transaction from "@/src/services/transactions.service";
import axios from "axios";
import { headers } from "@/src/constants/http_config";
import { toast } from "react-toastify";

interface SettingsProps {
    
}
 
const Settings: FC<SettingsProps> = () => {
    const [dynamicSource, setDynamicSource] = useState<any>()
    const account = useSelector((state: RootState) => {
        if (state.transaction.wallet && state.transaction.wallet.accounts) {
            if (state.transaction.wallet.accounts.length > 0) {
                return state.transaction.wallet.accounts[0];
            }
        }
        return []
    })
    const banks = useSelector((state: RootState) => state.transaction.banks)

    const [generalInfo, setGeneralInfo] = useState<any>({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        country: ''
    })

    const [accountInfo, setAccountInfo] = useState<any>(account)

    const [secutityInfo, setSecutityInfo] = useState({
        password: '',
    })

    const handleGeneralInfoChange = (e: any) => {
        const { name, value } = e.target

        setGeneralInfo({...generalInfo, [name]: value})
    }

    const handleAccountInfoChange = (e: any) => {
        const { name, value } = e.target

        setAccountInfo({...accountInfo, [name]: value})
    }

    const handleBankChange = (value: string) => {
        setAccountInfo({...accountInfo, bankCode: value})
    }

    const updateGeneralInfo = () => {

    }

    const uploadAvatar = async (avatar: any) => {
        let formData = new FormData()

        formData.append('avatar', avatar)
        try {
            const { data } = await axios.put('/api/users/me', formData, headers)
            setGeneralInfo(data.data)
            setDynamicSource(data.data?.avatar)
        } catch (error: any) {
            toast.error(error.response.data.message)
        }
    }

    const handleImageChange = (e: any) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                setDynamicSource(e.target?.result);
            };

            reader.readAsDataURL(file);
            uploadAvatar(file)
        }
    }

    const fetchMe = async () => {
        try {
            const { data } = await axios.get('/api/users/me', headers)
            setGeneralInfo(data.data)
            setDynamicSource(data.data?.avatar)
        } catch (error: any) {
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        const transactionApis = new Transaction()
        transactionApis.getWalletDetails()
        transactionApis.getBanks()
        
        fetchMe()
    }, [])
    return ( 
        <div className="max-w-screen lg:px-[32px] px-5 pb-[132px]">
            <header className="py-6 lg:mx-[-32px] lg:px-[32px] lg:bg-white">
                <div className="item flex flex-wrap items-center justify-between">
                    <div className="opacity-0">Invisible</div>
                </div>
            </header>
            <main className="flex flex-col">
                <div className="top flex gap-1 mb-[43px]">
                    <div className="profile-pics mt-[-40px]">
                        {generalInfo.avatar || dynamicSource ? <Image width={200} height={200} className="profileImg" src={dynamicSource} alt="" />
                            : <Image src={mainProfilePics} alt="" />
                        }
                    </div>
                    <div className="upload mt-[50px]">
                        <input type="file" hidden name="media" onChange={handleImageChange} id="media" />
                        <label htmlFor="media">
                            <span className="btn-sp">Upload a Photo</span>
                        </label>
                    </div>
                </div>
                <div className="general-info mb-5">
                    <Card className="pt-[43px] px-[37px] pb-[90px] lg:w-[896px]">
                        <CardContent className="flex flex-col">
                            <div className="info-top flex items-center justify-between mb-[48px]">
                                <span className="text-2xl font-medium">General Information</span>
                                <Image src={arrowDown} alt="" />
                            </div>

                            <form action="" className="flex flex-col gap-[32px]">
                                <div className="double-input lg:flex lg:gap-[35px]">
                                    <div className="form-control mb-[22px] lg:mb-0 w-full">
                                        <div className="form-control w-full flex flex-col gap-2">
                                            <Label className="text-sm font-semibold">First name <span className="text-[red]">*</span></Label>
                                            <input type="text" name="firstName" id="" placeholder="" onChange={handleGeneralInfoChange} value={generalInfo.firstName} 
                                                className="border-[1px] w-full shadow-md text-sm border-[#FFDBB6] rounded-[6px] p-[10px] focus:outline-none" />
                                        </div>
                                    </div>
                                    <div className="form-control w-full">
                                        <div className="form-control w-full flex flex-col gap-2">
                                            <Label className="text-sm font-semibold">Last name <span className="text-[red]">*</span></Label>
                                            <input type="text" name="lastName" id="" placeholder="" onChange={handleGeneralInfoChange} value={generalInfo.lastName}
                                                className="border-[1px] w-full shadow-md text-sm border-[#FFDBB6] rounded-[6px] p-[10px] focus:outline-none" />
                                        </div>
                                    </div>
                                </div>
                                <div className="double-input lg:flex lg:gap-[35px]">
                                    <div className="form-control mb-[22px] lg:mb-0 w-full">
                                        <div className="form-control w-full flex flex-col gap-2">
                                            <Label className="text-sm font-semibold">Email <span className="text-[red]">*</span></Label>
                                            <input type="email" name="email" id="" placeholder="" onChange={handleGeneralInfoChange} value={generalInfo.email}
                                                className="border-[1px] w-full shadow-md text-sm border-[#FFDBB6] rounded-[6px] p-[10px] focus:outline-none" />
                                        </div>
                                    </div>
                                    <div className="form-control w-full">
                                        <div className="form-control w-full flex flex-col gap-2">
                                            <Label className="text-sm font-semibold">Phone number <span className="text-[red]">*</span></Label>
                                            <input type="tel" name="phoneNumber" id="" placeholder="" onChange={handleGeneralInfoChange} value={generalInfo.phoneNumber}
                                                className="border-[1px] w-full shadow-md text-sm border-[#FFDBB6] rounded-[6px] p-[10px] focus:outline-none" />
                                        </div>
                                    </div>
                                </div>
                                <div className="double-input lg:flex lg:gap-[35px]">
                                    <div className="form-control w-full mb-[22px] lg:mb-0 flex flex-col gap-2">
                                        <Label className="text-sm font-semibold">Country <span className="text-[red]">*</span></Label>
                                        <Select value={generalInfo.country}>
                                            <SelectTrigger className="shadow-md focus:outline-none text-sm border-[#FFDBB6] rounded-[6px] px-[19px] py-4">
                                                <SelectValue className="text-[#777]" placeholder="Country" />
                                            </SelectTrigger>
                                            <SelectContent className="focus:outline-none text-sm border-[#FFDBB6] rounded-[6px]">
                                                <SelectGroup>
                                                    <SelectItem value="Nigeria">Nigeria</SelectItem>
                                                    {/* <SelectItem value="female">Female</SelectItem> */}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="form-control w-full flex flex-col gap-2">
                                        <Label className="text-sm font-semibold">Date of Birth <span className="text-[red]">*</span></Label>
                                        <input type="date" name="" id=""
                                            className="border-[1px] w-full shadow-md text-sm border-[#FFDBB6] rounded-[6px] px-[19px] py-4 focus:outline-none" />
                                    </div>
                                </div>
                                
                                <div className="flex item-center justify-end mt-5 lg:mt-[50px]">
                                    {/* <Button className="bg-[#0177B7] px-4 py-2 rounded-[4px] text-white text-sm">Update information</Button> */}
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                <div className="bank-info mb-5">
                    <Card className="pt-[43px] px-[37px] pb-[90px] lg:w-[896px]">
                        <CardContent className="flex flex-col">
                            <div className="info-top flex items-center justify-between mb-[48px]">
                                <span className="text-2xl font-medium">Bank Information</span>
                                <Image src={arrowDown} alt="" />
                            </div>

                            <form action="" className="flex flex-col gap-[32px]">
                                <div className="double-input lg:flex lg:gap-[35px]">
                                    <div className="form-control mb-[22px] lg:mb-0 w-full">
                                        <div className="form-control w-full flex flex-col gap-2">
                                            <Label className="text-sm font-semibold">Account holder name <span className="text-[red]">*</span></Label>
                                            <input type="text" name="accountName" value={accountInfo.accountName} onChange={handleAccountInfoChange} id="" placeholder=""
                                                className="border-[1px] w-full shadow-md text-sm border-[#FFDBB6] rounded-[6px] p-[10px] focus:outline-none" />
                                        </div>
                                    </div>
                                    <div className="form-control w-full">
                                        <div className="form-control w-full flex flex-col gap-2">
                                            <Label className="text-sm font-semibold">Account number <span className="text-[red]">*</span></Label>
                                            <input type="text" name="accountNumber" value={accountInfo.accountNumber} onChange={handleAccountInfoChange} id="" placeholder=""
                                                className="border-[1px] w-full shadow-md text-sm border-[#FFDBB6] rounded-[6px] p-[10px] focus:outline-none" />
                                        </div>
                                    </div>
                                </div>
                                <div className="double-input lg:flex lg:gap-[35px]">
                                    <div className="form-control w-full mb-[22px] lg:mb-0 flex flex-col gap-2">
                                        <Label className="text-sm font-semibold">Bank <span className="text-[red]">*</span></Label>
                                        <Select onValueChange={handleBankChange} value={accountInfo.bankCode}>
                                            <SelectTrigger className="shadow-md focus:outline-none text-sm border-[#FFDBB6] rounded-[6px] px-[19px] py-4">
                                                <SelectValue className="text-[#777]" placeholder="Bank" />
                                            </SelectTrigger>
                                            <SelectContent className="focus:outline-none text-sm border-[#FFDBB6] rounded-[6px]">
                                                <SelectGroup>
                                                    {banks.map(bank => <SelectItem key={bank._id} value={bank.code}>{bank.name}</SelectItem>)}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="form-control opacity-0 w-full flex flex-col gap-2">
                                        <Label className="text-sm font-semibold">Password <span className="text-[red]">*</span></Label>
                                        <input type="text" name="" id="" placeholder=""
                                            className="border-[1px] w-full shadow-md text-sm border-[#FFDBB6] rounded-[6px] p-[10px] focus:outline-none" />
                                    </div>
                                </div>
                                
                                <div className="flex item-center justify-end mt-5 lg:mt-[50px]">
                                    {/* <Button className="bg-[#0177B7] px-4 py-2 rounded-[4px] text-white text-sm">Update information</Button> */}
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                <div className="security-info">
                    <Card className="pt-[43px] px-[37px] pb-[90px] lg:w-[896px]">
                        <CardContent className="flex flex-col">
                            <div className="info-top flex items-center justify-between mb-[48px]">
                                <span className="text-2xl font-medium">Security</span>
                                <Image src={arrowDown} alt="" />
                            </div>

                            <form action="" className="flex flex-col gap-[32px]">
                                <div className="double-input lg:flex lg:gap-[35px]">
                                    <div className="form-control mb-[22px] lg:mb-0 w-full">
                                        <div className="form-control w-full flex flex-col gap-2">
                                            <Label className="text-sm font-semibold">Password <span className="text-[red]">*</span></Label>
                                            <input type="text" name="" id="" placeholder="********"
                                                className="border-[1px] w-full shadow-md text-sm border-[#FFDBB6] rounded-[6px] p-[10px] focus:outline-none" />
                                        </div>
                                    </div>
                                    <div className="form-control opacity-0 w-full flex flex-col gap-2">
                                        <Label className="text-sm font-semibold">Password <span className="text-[red]">*</span></Label>
                                        <input type="text" name="" id="" placeholder="********"
                                            className="border-[1px] w-full shadow-md text-sm border-[#FFDBB6] rounded-[6px] p-[10px] focus:outline-none" />
                                    </div>
                                </div>
                                
                                <div className="flex gap-3 item-center justify-end mt-5 lg:mt-[50px]">
                                    <Button variant={"outline"} className="px-4 py-2 rounded-[4px] text-sm">Change Password</Button>
                                    <Button variant={"outline"} className="px-4 py-2 rounded-[4px] text-sm">Add Phone Number</Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
 
export default Settings;