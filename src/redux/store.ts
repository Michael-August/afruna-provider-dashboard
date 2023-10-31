"use client"

import { configureStore } from "@reduxjs/toolkit"
import authReducer from './features/auth/auth_slice'


export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type TStore = typeof store