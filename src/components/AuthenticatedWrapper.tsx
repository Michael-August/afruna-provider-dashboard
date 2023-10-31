"use client"

import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface AuthenticatedWrapperProps {
    
}
 
const AuthenticatedWrapper: FC<AuthenticatedWrapperProps> = ({children}: any) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
    const token = sessionStorage.getItem('Token')
    return ( 
        <>
            {isAuthenticated || token ? 
                { children } :
                <div>
                    Please log in first
                </div>
            }
        </>
    );
}
 
export default AuthenticatedWrapper;