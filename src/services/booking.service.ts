import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { headers } from "../constants/http_config";
import { TStore, store } from "../redux/store";
import { TSuccessResponse, TErrorResponse } from "../types/auth.types";
import { handleAuthErrors } from "../utils/auth.util";
import { IBooking } from "../interfaces/IBooking";
import { setBookings, setSingleBooking, updateBooking } from "../redux/features/app/booking_slice";
import { T_loading_provider } from "../types/loader.types";
import { setTotalPages } from "../redux/features/app/util_slice";

export default class BookingService {
    private store: TStore

    constructor() {
        this.store = store
    }

    async getBookings(loading_opt: T_loading_provider, page: number) {
        const { setIsLoading } = loading_opt
        setIsLoading && setIsLoading(true)
        try {
            const { data } = await axios.get<TSuccessResponse<IBooking[]>>(`/api/bookings?page=${page}`, headers)
            store.dispatch(setBookings(data.data))
            store.dispatch(setTotalPages(data.totalPages))
            toast.success('Fetch successful', {autoClose: 1000})
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>);
        } finally {
            setIsLoading && setIsLoading(false)
        }
    }

    async getBooking(bookingId: any, loading_opt: T_loading_provider) {
        const { setIsLoading } = loading_opt
        setIsLoading && setIsLoading(true)
        try {
            const { data } = await axios.get(`/api/bookings/${bookingId}`, headers)
            store.dispatch(setSingleBooking(data.data))
            toast.success('Fetch successful', {autoClose: 1000})
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>)
        } finally {
            setIsLoading && setIsLoading(false)
        }
    }

    async updateBooking(bookingId: any, updatedBooking: any, loading_opt: T_loading_provider) {
        const { setIsLoading } = loading_opt
        // setIsLoading && setIsLoading(true)
        try {
            const { data } = await axios.put(`/api/bookings/${bookingId}`, updatedBooking, headers)
            store.dispatch(updateBooking(data.data))
            toast.success('status updated successful', {autoClose: 1000})
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>)
        } finally {
            setIsLoading && setIsLoading(false)
        }
    }
}