import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import { FC } from "react";

import mainProfilePics from '../../../assets/images/main-profile.png'
import arrowDown from '../../../assets/icons/arrow_down.png'
import { Card, CardContent } from "@/src/components/ui/card";
import { Label } from "@/src/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/src/components/ui/select";

interface SettingsProps {
    
}
 
const Settings: FC<SettingsProps> = () => {
    return ( 
        <>
            <div className="dashboard max-w-screen lg:px-[32px] px-5 pb-[132px]">
                <header className="py-6 lg:mx-[-32px] lg:px-[32px] lg:bg-white">
                    <div className="item flex flex-wrap items-center justify-between">
                        <div className="opacity-0">Invisible</div>
                    </div>
                </header>
                <main className="flex flex-col">
                    <div className="top flex gap-1 mb-[43px]">
                        <div className="profile-pics mt-[-40px]">
                            <Image src={mainProfilePics} alt="" />
                        </div>
                        <div className="upload mt-[50px]">
                            <Button className="btn-sp">Upload a Photo</Button>
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
                                                <input type="text" name="" id="" placeholder=""
                                                    className="border-[1px] w-full shadow-md text-sm border-[#FFDBB6] rounded-[6px] p-[10px] focus:outline-none" />
                                            </div>
                                        </div>
                                        <div className="form-control w-full">
                                            <div className="form-control w-full flex flex-col gap-2">
                                                <Label className="text-sm font-semibold">Last name <span className="text-[red]">*</span></Label>
                                                <input type="text" name="" id="" placeholder=""
                                                    className="border-[1px] w-full shadow-md text-sm border-[#FFDBB6] rounded-[6px] p-[10px] focus:outline-none" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="double-input lg:flex lg:gap-[35px]">
                                        <div className="form-control mb-[22px] lg:mb-0 w-full">
                                            <div className="form-control w-full flex flex-col gap-2">
                                                <Label className="text-sm font-semibold">Email <span className="text-[red]">*</span></Label>
                                                <input type="email" name="" id="" placeholder=""
                                                    className="border-[1px] w-full shadow-md text-sm border-[#FFDBB6] rounded-[6px] p-[10px] focus:outline-none" />
                                            </div>
                                        </div>
                                        <div className="form-control w-full">
                                            <div className="form-control w-full flex flex-col gap-2">
                                                <Label className="text-sm font-semibold">Phone number <span className="text-[red]">*</span></Label>
                                                <input type="tel" name="" id="" placeholder=""
                                                    className="border-[1px] w-full shadow-md text-sm border-[#FFDBB6] rounded-[6px] p-[10px] focus:outline-none" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="double-input lg:flex lg:gap-[35px]">
                                        <div className="form-control w-full mb-[22px] lg:mb-0 flex flex-col gap-2">
                                            <Label className="text-sm font-semibold">Gender <span className="text-[red]">*</span></Label>
                                            <Select>
                                                <SelectTrigger className="shadow-md focus:outline-none text-sm border-[#FFDBB6] rounded-[6px] px-[19px] py-4">
                                                    <SelectValue className="text-[#777]" placeholder="Service Category" />
                                                </SelectTrigger>
                                                <SelectContent className="focus:outline-none text-sm border-[#FFDBB6] rounded-[6px]">
                                                    <SelectGroup>
                                                        <SelectItem value="male">Male</SelectItem>
                                                        <SelectItem value="female">Female</SelectItem>
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
                                        <Button className="bg-[#0177B7] px-4 py-2 rounded-[4px] text-white text-sm">Update information</Button>
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
                                                <Label className="text-sm font-semibold">Account holder's name <span className="text-[red]">*</span></Label>
                                                <input type="text" name="" id="" placeholder=""
                                                    className="border-[1px] w-full shadow-md text-sm border-[#FFDBB6] rounded-[6px] p-[10px] focus:outline-none" />
                                            </div>
                                        </div>
                                        <div className="form-control w-full">
                                            <div className="form-control w-full flex flex-col gap-2">
                                                <Label className="text-sm font-semibold">Account number <span className="text-[red]">*</span></Label>
                                                <input type="text" name="" id="" placeholder=""
                                                    className="border-[1px] w-full shadow-md text-sm border-[#FFDBB6] rounded-[6px] p-[10px] focus:outline-none" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="double-input lg:flex lg:gap-[35px]">
                                        <div className="form-control w-full mb-[22px] lg:mb-0 flex flex-col gap-2">
                                            <Label className="text-sm font-semibold">Bank <span className="text-[red]">*</span></Label>
                                            <Select>
                                                <SelectTrigger className="shadow-md focus:outline-none text-sm border-[#FFDBB6] rounded-[6px] px-[19px] py-4">
                                                    <SelectValue className="text-[#777]" placeholder="Bank" />
                                                </SelectTrigger>
                                                <SelectContent className="focus:outline-none text-sm border-[#FFDBB6] rounded-[6px]">
                                                    <SelectGroup>
                                                        <SelectItem value="male">Male</SelectItem>
                                                        <SelectItem value="female">Female</SelectItem>
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
                                        <Button className="bg-[#0177B7] px-4 py-2 rounded-[4px] text-white text-sm">Update information</Button>
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
        </>
    );
}
 
export default Settings;