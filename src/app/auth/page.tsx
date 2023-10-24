import { FC } from "react";
import '../../assets/css/styles.css'
import { Card, CardContent } from "@/src/components/ui/card";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";

import divider from '../../assets/images/auth-divider.png'
import googleImg from '../../assets/icons/google.png'

import '../../assets/css/styles.css'
import Image from "next/image";
import Link from "next/link";

interface Props {
    
}
 
const Login: FC<Props> = () => {
    return ( 
        <>
            <div className="auth-form-card">
                <Card className="w-full p-5 rounded-[4px] lg:w-[561px] lg:p-[60px] lg:rounded-2xl">
                    <CardContent>
                        <form action="" className="flex flex-col gap-6">
                            <div className="form-group flex flex-col gap-2">
                                <Label htmlFor="email" className="text-sm font-semibold text-black">Your email</Label>
                                <Input className="shadow-md px-[23px] py-[16px] w-full rounded-lg outline-0 focus:border-[1px] focus:border-[#FFDBB6]" name="email" id="email" placeholder="examplemail@gmail.com" />
                            </div>
                            <div className="form-group flex flex-col gap-2">
                                <Label htmlFor="password" className="text-sm font-semibold text-black">Password</Label>
                                <Input className="shadow-md px-[23px] py-[16px] rounded-lg outline-0 focus:border-[1px] focus:border-[#FFDBB6]" name="password" id="password" placeholder="*******" />
                            </div>

                            <Button className="btn shadow-md mt-8 py-[10px]">Log in</Button>
                        </form>
                        <div className="divider mt-[45px] mb-[40px]">
                            <Image src={divider} alt="divider" />
                        </div>
                        <Button className="flex items-center gap-2 w-full py-[13px] bg-transparent border-[1px] hover:bg-transparent border-zinc-400">
                            <Image src={googleImg} alt="google logo" />
                            <span className="text-base font-semibold text-[#23222D]">Log in with Google</span>
                        </Button>

                        <div className="last flex flex-col gap-3 text-center mt-[35px]">
                            <span className="text-[#232F3E] text-sm font-semibold">Don’t have an account ?</span>
                            <Link className="text-sm font-bold text-[#202020]" href={"/auth/signup"}>Sign up</Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
 
export default Login;