import { FC } from "react";
import { Card, CardContent } from "@/src/components/ui/card";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";

import divider from '../../../assets/images/auth-divider.png'
import googleImg from '../../../assets/icons/google.png'

import '../../../assets/css/styles.css'
import Image from "next/image";
import Link from "next/link";

interface Props {
    
}
 
const Register: FC<Props> = () => {
    return ( 
        <>
            <div className="auth-form-card">
                <Card className="w-[561px] p-[60px] rounded-2xl">
                    <CardContent>
                        <form action="" className="flex flex-col gap-6">
                            <div className="form-control flex flex-col gap-2">
                                <Label htmlFor="email" className="text-sm font-semibold text-black">Your email</Label>
                                <Input type="email" className="shadow-md px-[23px] py-[16px] w-full rounded-lg outline-0 focus:border-[1px] focus:border-[#FFDBB6]" name="email" id="email" placeholder="examplemail@gmail.com" />
                            </div>
                            <div className="form-control flex flex-col gap-2">
                                <Label htmlFor="phone" className="text-sm font-semibold text-black">Phone number</Label>
                                <Input type="tel" className="shadow-md px-[23px] py-[16px] w-full rounded-lg outline-0 focus:border-[1px] focus:border-[#FFDBB6]" name="phone" id="phone" placeholder="examplemail@gmail.com" />
                            </div>
                            <div className="form-control flex flex-col gap-2">
                                <Label htmlFor="password" className="text-sm font-semibold text-black">Password</Label>
                                <Input type="password" className="shadow-md px-[23px] py-[16px] rounded-lg outline-0 focus:border-[1px] focus:border-[#FFDBB6]" name="password" id="password" placeholder="*******" />
                            </div>
                            <div className="form-control flex flex-col gap-2">
                                <Label htmlFor="password" className="text-sm font-semibold text-black">Confirm password</Label>
                                <Input type="password" className="shadow-md px-[23px] py-[16px] rounded-lg outline-0 focus:border-[1px] focus:border-[#FFDBB6]" name="confirmPassword" id="confirmPassword" placeholder="*******" />
                            </div>

                            <Button className="btn shadow-md mt-8 py-[10px]">Sign up</Button>
                        </form>
                        <div className="divider mt-[45px] mb-[40px]">
                            <Image src={divider} alt="divider" />
                        </div>
                        <Button className="flex items-center gap-2 w-full py-[13px] bg-transparent border-[1px] hover:bg-transparent border-zinc-400">
                            <Image src={googleImg} alt="google logo" />
                            <span className="text-base font-semibold text-[#23222D]">Sign up with Google</span>
                        </Button>

                        <div className="last flex flex-col gap-3 text-center mt-[35px]">
                            <span className="text-[#232F3E] text-sm font-semibold">Already have an account ?</span>
                            <Link className="text-sm font-bold text-[#202020]" href={"/auth"}>Log in</Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
 
export default Register;