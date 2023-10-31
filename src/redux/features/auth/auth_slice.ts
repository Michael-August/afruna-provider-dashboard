"use client"

import { IInitialLoginState, IUserBio } from "@/src/interfaces/auth/IAuth";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IInitialLoginState = {
    isAuthenticated: false,
    userBio: {}
}

const authSlice = createSlice({
    name: 'Auth_Slice',
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.isAuthenticated = false
        },
        updateUserBio: (state, action: PayloadAction<IUserBio>) => {
            state.userBio = action.payload
        }
    }
})

export const { login, logout, updateUserBio } = authSlice.actions;
export default authSlice.reducer;
