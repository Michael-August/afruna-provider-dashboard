// import {  } from "next/navigation"
import axios from 'axios'
import { ILogin, ISignUp } from "../interfaces/auth/IAuth"
import { IUserBio } from '../interfaces/IUser';
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
import { login, logout, updateUserBio } from '../redux/features/auth/auth_slice';
import { TStore, store } from '../redux/store';
import { TSuccessResponse } from '../types/auth.types';

class AuthService {
    private router?: any
    private store: TStore

    constructor(router: any) {
        this.router = router
        this.store = store
    }

    async logIn(payload: ILogin) {
        try {
            const {data} = await axios.post<TSuccessResponse<{token: string, user: IUserBio}>>(`/api/signin`, payload)
            Cookies.set("Token", data.data.token);
            this.store.dispatch(login());
            this.store.dispatch(updateUserBio(data.data.user));
            toast.success(data.message)
            this.router?.push("/dashboard");

        } catch (error: any) {
            this.store.dispatch(login())
            toast.error(error.response.data.message)
        }
    }

    async signup(payload: ISignUp) {
        try {
            const { data } = await axios.post('/api/signup/provider', payload)
            toast.success(`User ${data.data.firstName} ${data.data.message}`)
            this.router?.push("/auth")
        } catch (error: any) {
            toast.error(error.response.data.message)
        }
    }

    logout() {
        toast.success("Logged Out.");
        sessionStorage.clear()
		this.store.dispatch(logout());
		this.router?.push("/auth")
			.finally(() => this.store.dispatch(updateUserBio({} as IUserBio)));
	}
}

export default AuthService
