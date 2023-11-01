"use client"

import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from './features/auth/auth_slice'
import serviceReducer from './features/app/service_slice'

const app = combineReducers({
    auth: authReducer,
    service: serviceReducer
})

export const store = configureStore({
    reducer: {
        app
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type TStore = typeof store
