// import {  } from "next/navigation"
import axios from 'axios'
import { ILogin, ISignUp, IUserBio } from "../interfaces/auth/IAuth"
import { toast } from "react-toastify";
import { login, logout, updateUserBio } from '../redux/features/auth/auth_slice';
import { TStore, store } from '../redux/store';

class AuthService {
    private router?: any
    private store: TStore

    constructor(router: any) {
        this.router = router
        this.store = store
    }

    async logIn(payload: ILogin) {
        try {
            const {data} = await axios.post(`/api/signin`, payload)
            console.log(data)
            sessionStorage.setItem("Token", data.data.token);
            this.store.dispatch(login());
            this.store.dispatch(updateUserBio(data.data.user));
            toast.success(data.data.message)
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
