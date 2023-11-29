import { toast } from "react-toastify";
import { setDashboardBookings, setDashboardCard } from "../redux/features/app/dashboard_slice";
import { TStore, store } from "../redux/store";
import { TErrorResponse, TSuccessResponse } from "../types/auth.types";
import { T_loading_provider } from "../types/loader.types";
import axios, { AxiosError } from "axios";
import { handleAuthErrors } from "../utils/auth.util";
import { headers } from "../constants/http_config";
import { IBooking } from "../interfaces/IBooking";

export default class DashboardService {
    private store: TStore

    constructor() {
        this.store = store
    }

    async getDashboardCards(loading_opt: T_loading_provider, providerId: string) {
        const { setIsLoading } = loading_opt
        setIsLoading && setIsLoading(true)
        try {
            const { data } = await axios.get<TSuccessResponse<any>>(`/api/services/${providerId}/cards`, headers)
            store.dispatch(setDashboardCard(data.data))
            toast.success('Fetch successful', {autoClose: 1000})
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>);
        } finally {
            setIsLoading && setIsLoading(false)
        }
    }

    async getBookings() {
        try {
            const { data } = await axios.get<TSuccessResponse<IBooking[]>>(`/api/bookings`, headers)
            store.dispatch(setDashboardBookings(data.data.splice(0, 5)))
            toast.success('Fetch successful', {autoClose: 1000})
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>);
        }
    }
}