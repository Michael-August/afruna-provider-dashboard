"use client"

import { FC } from "react";
import '../../assets/css/styles.css'
import { Card, CardContent } from "@/src/components/ui/card";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

import divider from '../../assets/images/auth-divider.png'
import googleImg from '../../assets/icons/google.png'

import '../../assets/css/styles.css'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ILogin } from "@/src/interfaces/auth/IAuth";
import AuthService from "@/src/services/auth.service";

interface Props {
    
}

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please provide a valid email")
        .required("Email is required"),

    password: Yup.string()
        .required("Password is required")
})

const PasswordSchema = Yup.object().shape({
    password: Yup.string()
        .required("Password is required")
        .min(8, 'Password is too short - should be minimum of 8 characters.')
})
 
const Login: FC<Props> = () => {
    const router = useRouter()

    const formInitialValue = { email: '', password: '' }
    
    const handleFormSubmission = (values: ILogin) => {
        const authService = new AuthService(router)
        authService.logIn(values)
        // router.push('/dashboard')
    }

    const validatePassword = (value: string) => {
        let error = undefined

        try {
            PasswordSchema.validateSync({password: value})
        } catch (validationError: any) {
            error = validationError.errors[0]
        }

        return error
    }

    return ( 
        <>
            <div className="auth-form-card">
                <Card className="w-full p-5 rounded-[4px] lg:w-[561px] lg:p-[60px] lg:rounded-2xl">
                    <CardContent>
                        <Formik initialValues={formInitialValue} onSubmit={handleFormSubmission} validationSchema={LoginSchema}>
                            <Form action="" className="flex flex-col gap-6">
                                <div className="form-control flex flex-col gap-2">
                                    <Label htmlFor="email" className="text-sm font-semibold text-black">Your email</Label>
                                    <Field className="shadow-md px-[23px] py-[16px] w-full rounded-lg outline-0 border border-[#D3D3D3] focus:border-[1px] focus:border-[#FFDBB6]" type="email" name="email" id="email" placeholder="examplemail@gmail.com" />
                                    <ErrorMessage name="email">
                                        {error => <Label className="text-[#FA3434]">{ error }</Label> }
                                    </ErrorMessage>
                                </div>
                                <div className="form-control flex flex-col gap-2">
                                    <Label htmlFor="password" className="text-sm font-semibold text-black">Password</Label>
                                    <Field validate={validatePassword} className="shadow-md px-[23px] py-[16px] border border-[#D3D3D3] rounded-lg outline-0 focus:border-[1px] focus:border-[#FFDBB6]" type="password" name="password" id="password" placeholder="*******" />
                                    <ErrorMessage name="password">
                                        {error => <Label className="text-[#FA3434]">{ error }</Label> }
                                    </ErrorMessage>
                                </div>

                                <Button type="submit" className="btn shadow-md mt-8 py-[10px]">Log in</Button>
                            </Form>
                        </Formik>
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