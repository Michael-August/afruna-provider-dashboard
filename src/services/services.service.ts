import axios, { AxiosError } from "axios";
import { TStore, store } from "../redux/store";
import { TErrorResponse, TSuccessResponse } from "../types/auth.types";
import { ICreateService, IService, IServiceCategory, IServiceSubCategory } from "../interfaces/IService";
import { headers } from "../constants/http_config";
import { createService, setServices, setSingleService } from "../redux/features/app/service_slice";
import { toast } from "react-toastify";
import { handleAuthErrors } from "../utils/auth.util";
import { T_loading_provider } from "../types/loader.types";
import { setTotalPages } from "../redux/features/app/util_slice";

export default class Service {
    private store: TStore
    private router?: any

    constructor(router: any) {
        this.store = store
        this.router = router
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
            const {data} = await axios.get<TSuccessResponse<IServiceSubCategory[]>>(`/api/servicecategories/${categoryId}/sub`, headers)
            return data
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>)
        }
    }

    async getServices(loading_opt: T_loading_provider, page: number) {
        const { setIsLoading } = loading_opt
        setIsLoading && setIsLoading(true)
        try {
            const { data } = await axios.get<TSuccessResponse<IService[]>>(`/api/services?page=${page}`, headers)
            store.dispatch(setServices(data.data))
            store.dispatch(setTotalPages(data.totalPages))
            toast.success('Fetch successful', {autoClose: 1000})
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>);
        } finally {
            setIsLoading && setIsLoading(false)
        }
    }

    async getService(serviceId: string, loading_opt: T_loading_provider) {
        const { setIsLoading } = loading_opt
        setIsLoading && setIsLoading(true)
        try {
            const { data } = await axios.get(`/api/services/${serviceId}`, headers)
            store.dispatch(setSingleService(data.data))
            toast.success('Fetch successful', {autoClose: 1000})
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>)
        } finally {
            setIsLoading && setIsLoading(false)
        }
    }

    async updateServicePublish(serviceId: string) {
        try {
            const { data } = await axios.put<TSuccessResponse<IService>>(`/api/services/${serviceId}/publish`, undefined, headers)
            toast.success('Service publish update successful', { autoClose: 1000 }) 
            this.router.push('/dashboard/service')
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>);
        }
    }

    async creatService(payload: any, loading_opt: T_loading_provider) {
        const { setIsLoading } = loading_opt
        setIsLoading && setIsLoading(true)
        try {
            const { data } = await axios.post<TSuccessResponse<IService>>('/api/services', payload, headers)
            store.dispatch(createService(data.data))
            localStorage.setItem("recentService", JSON.stringify(data.data))
            toast.success('Service listing successful', { autoClose: 1000 })
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>);
        } finally {
            setIsLoading && setIsLoading(false)
        }
    }
}
