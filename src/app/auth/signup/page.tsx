"use client"

import { FC, useState } from "react";
import { Card, CardContent } from "@/src/components/ui/card";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import * as Yup from 'yup'

import divider from '../../../assets/images/auth-divider.png'
import googleImg from '../../../assets/icons/google.png'

import '../../../assets/css/styles.css'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ISignUp } from "@/src/interfaces/auth/IAuth";
import AuthService from "@/src/services/auth.service";
import { CustomFlagsSelect } from "@/src/components/CountrySelect";
import ButtonLoading from "@/src/components/buttonLoading";

interface Props {
    
}

const SignUpSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please provide a valid email")
        .required("Email is required"),

    password: Yup.string()
        .required("Password is required"),
    
    confirmPassword: Yup.string()
        .required("Password confirmation is required"),
        // .oneOf([Yup.ref('password')], 'Must match Password'),
    
    phoneNumber: Yup.string()
        .required("Phone Number is required")
        .min(10, "Phone number must be more than 10 characters")
        .max(14, "Phone number must not be more than 14 characters"),

    firstName: Yup.string()
        .required("First name is required"),
    
    lastName: Yup.string()
        .required("Last name is required"),

    country: Yup.string()
        .required("Country is required")
})

const PasswordSchema = Yup.object().shape({
    password: Yup.string()
        .required("Password is required")
        .min(8, 'Password is too short - should be minimum of 8 characters.')
})

const ConfirmPasswordSchema = Yup.object().shape({
    confirmPassword: Yup.string()
        .required("Password confirmation is required")
        // .oneOf([Yup.ref('password')], 'Must match Password')
})
 
const Register: FC<Props> = () => {
    const [isLoading, setIsLoading] = useState(false)

    const formInitialValue: ISignUp = {
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        firstName: '',
        lastName: '',
        country: ''
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
    const validateConfirmPassword = (value: string) => {
        let error = undefined

        try {
            ConfirmPasswordSchema.validateSync({confirmPassword: value})
        } catch (validationError: any) {
            error = validationError.errors[0]
        }

        return error
    }
    const router = useRouter()

    const handleFormSubmission = (values: ISignUp) => {
        const authService = new AuthService(router)
        authService.signup(values, { setIsLoading })
        console.log("Sign up attempted")
    }
    return ( 
        <>
            <div className="auth-form-card">
                <Card className="w-full p-5 rounded-[4px] lg:w-[561px] lg:p-[60px] lg:rounded-2xl">
                    <CardContent>
                        <Formik initialValues={formInitialValue} onSubmit={handleFormSubmission} validationSchema={SignUpSchema}>
                            <Form action="" className="flex flex-col gap-6">
                                <div className="double-input gap-[22px] lg:flex lg:gap-5">
                                    <div className="form-control w-full mb-[22px] flex flex-col gap-2">
                                        <Label className="text-sm font-semibold">First name <span className="text-[red]">*</span></Label>
                                        <Field type="text" name="firstName" id="" placeholder="Ibrahim"
                                            className="w-full shadow-md text-sm border border-[#D3D3D3] focus:border-[#FFDBB6] rounded-[6px] px-[19px] py-4 focus:outline-none" />
                                        <ErrorMessage name="firstName">
                                            {error => <Label className="text-[#FA3434]">{ error }</Label> }
                                        </ErrorMessage>
                                    </div>
                                    <div className="form-control w-full mb-[22px] flex flex-col gap-2">
                                        <Label className="text-sm font-semibold">Last name <span className="text-[red]">*</span></Label>
                                        <Field type="text" name="lastName" id="" placeholder="Taiwo"
                                            className="w-full shadow-md text-sm border border-[#D3D3D3] focus:border-[#FFDBB6] rounded-[6px] px-[19px] py-4 focus:outline-none" />
                                        <ErrorMessage name="lastName">
                                            {error => <Label className="text-[#FA3434]">{ error }</Label> }
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="form-control flex flex-col gap-2">
                                    <Label htmlFor="email" className="text-sm font-semibold text-black">Your email</Label>
                                    <Field type="email" className="shadow-md px-[23px] border border-[#D3D3D3] py-[16px] w-full rounded-lg outline-0 focus:border-[1px] focus:border-[#FFDBB6]" name="email" id="email" placeholder="examplemail@gmail.com" />
                                    <ErrorMessage name="email">
                                        {error => <Label className="text-[#FA3434]">{ error }</Label> }
                                    </ErrorMessage>
                                </div>
                                <div className="form-control flex flex-col gap-2">
                                    <Label htmlFor="phoneNumber" className="text-sm font-semibold text-black">Phone number</Label>
                                    <Field type="tel" name="phoneNumber" id="phone" placeholder="+234 7086543212"
                                        className="shadow-md px-[23px] border border-[#D3D3D3] py-[16px] w-full rounded-lg outline-0 focus:border-[1px] focus:border-[#FFDBB6]" />
                                    <ErrorMessage name="phoneNumber">
                                        {error => <Label className="text-[#FA3434]">{ error }</Label> }
                                    </ErrorMessage>
                                </div>
                                <div className="form-control flex flex-col gap-2">
                                    <Label htmlFor="country" className="text-sm font-semibold text-black">Country</Label>
                                    <Field type="text" className="shadow-md px-[23px] border border-[#D3D3D3] py-[16px] rounded-lg outline-0 focus:border-[1px] focus:border-[#FFDBB6]" name="country" id="country" placeholder="Nigeria" />
                                    {/* <Field component={CustomFlagsSelect} name="country" id="country" /> */}
                                    <ErrorMessage name="country">
                                        {error => <Label className="text-[#FA3434]">{ error }</Label> }
                                    </ErrorMessage>
                                </div>
                                <div className="form-control flex flex-col gap-2">
                                    <Label htmlFor="password" className="text-sm font-semibold text-black">Password</Label>
                                    <Field validate={validatePassword} type="password" className="shadow-md px-[23px] border border-[#D3D3D3] py-[16px] rounded-lg outline-0 focus:border-[1px] focus:border-[#FFDBB6]" name="password" id="password" placeholder="*******" />
                                    <ErrorMessage name="password">
                                        {error => <Label className="text-[#FA3434]">{ error }</Label> }
                                    </ErrorMessage>
                                </div>
                                <div className="form-control flex flex-col gap-2">
                                    <Label htmlFor="confirmPassword" className="text-sm font-semibold text-black">Confirm password</Label>
                                    <Field validate={validateConfirmPassword} type="password" className="shadow-md px-[23px] border border-[#D3D3D3] py-[16px] rounded-lg outline-0 focus:border-[1px] focus:border-[#FFDBB6]" name="confirmPassword" id="confirmPassword" placeholder="*******" />
                                    <ErrorMessage name="confirmPassword">
                                        {error => <Label className="text-[#FA3434]">{ error }</Label> }
                                    </ErrorMessage>
                                </div>

                                {!isLoading && <Button type="submit" className="btn shadow-md mt-8 py-[10px]">Sign up</Button>}
                                {isLoading && <Button className="btn shadow-md mt-8 py-[10px]"><ButtonLoading /></Button>}
                            </Form>
                        </Formik>
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