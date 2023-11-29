"use client"

import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from './features/auth/auth_slice'
import serviceReducer from './features/app/service_slice'
import bookingReducer from './features/app/booking_slice'
import transactionReducer from './features/app/transaction_slice'
import chatReducer from './features/app/chat_slice'
import utilReducer from './features/app/util_slice'
import dashboardReducer from './features/app/dashboard_slice'

const app = combineReducers({
    auth: authReducer,
    service: serviceReducer
})

export const store = configureStore({
    reducer: {
        auth: authReducer,
        service: serviceReducer,
        booking: bookingReducer,
        transaction: transactionReducer,
        chat: chatReducer,
        util: utilReducer,
        dashboard: dashboardReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type TStore = typeof store
