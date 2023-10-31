"use client"

import { Provider } from "react-redux"
import { store } from "./store"
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
