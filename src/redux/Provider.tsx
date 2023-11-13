"use client"

import { Provider, useSelector } from "react-redux"
import { RootState, store } from "./store"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

export const Providers = ({ children }: any) => {

    return (
        <Provider store={store}>
            <ToastContainer />
            {children}
        </Provider>
    )

}
