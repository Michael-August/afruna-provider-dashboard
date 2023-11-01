import axios, { AxiosError } from "axios";
import { TStore, store } from "../redux/store";
import { TErrorResponse, TSuccessResponse } from "../types/auth.types";
import { ICreateService, IService, IServiceCategory, IServiceSubCategory } from "../interfaces/IService";
import { headers } from "../constants/http_config";
import { createService, setServices, setSingleService } from "../redux/features/app/service_slice";
import { toast } from "react-toastify";
import { handleAuthErrors } from "../utils/auth.util";

export default class Service {
    private store: TStore

    constructor() {
        this.store = store
    }

    async getServiceCategories() {
        try {
            const {data} = await axios.get<TSuccessResponse<IServiceCategory[]>>('/api/servicecategories', headers)
            return data
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>)
        }
    }

    async getServiceSubCategories(categoryId: string) {
        try {
            const {data} = await axios.get<TSuccessResponse<IServiceSubCategory[]>>(`/api/servicecategories/${categoryId}/nested`, headers)
            return data
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>)
        }
    }

    async getServices () {
        try {
            const { data } = await axios.get<TSuccessResponse<IService[]>>('/api/services', headers)
            store.dispatch(setServices(data.data))
            toast.success('Fetch successful')
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>);
        }
    }

    async getService(serviceId: string) {
        try {
            const { data } = await axios.get(`/api/services/${serviceId}`, headers)
            store.dispatch(setSingleService(data.data))
            toast.success('Fetch successful')
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>)
        }
    }

    async creatService(payload: ICreateService) {
        try {
            const { data } = await axios.post<TSuccessResponse<IService>>('/api/services', payload, headers)
            store.dispatch(createService(data.data))
            toast.success('Service listing successful')
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>);
        }
    }
}