import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { headers } from "../constants/http_config";
import { TStore, store } from "../redux/store";
import { TSuccessResponse, TErrorResponse } from "../types/auth.types";
import { handleAuthErrors } from "../utils/auth.util";
import { IBooking } from "../interfaces/IBooking";
import { setBookings, setSingleBooking } from "../redux/features/app/booking_slice";
import { ParsedUrlQuery } from "querystring";

export default class BookingService {
    private store: TStore

    constructor() {
        this.store = store
    }

    async getBookings() {
        try {
            const { data } = await axios.get<TSuccessResponse<IBooking[]>>('/api/bookings', headers)
            store.dispatch(setBookings(data.data))
            toast.success('Fetch successful')
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>);
        }
    }

    async getBooking(bookingId: any) {
        try {
            const { data } = await axios.get(`/api/bookings/${bookingId}`, headers)
            store.dispatch(setSingleBooking(data.data))
            toast.success('Fetch successful')
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>)
        }
    }
}