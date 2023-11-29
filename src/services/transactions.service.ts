import axios, { AxiosError } from "axios";
import { TStore, store } from "../redux/store";
import { TErrorResponse, TSuccessResponse } from "../types/auth.types";
import { IConfirmBankDetailsResponse, IConfirmankDetails, ISetBankDetails, ITransaction } from "../interfaces/ITransaction";
import { setBanks, setSingleTransaction, setTransactions, setWallet } from "../redux/features/app/transaction_slice";
import { toast } from "react-toastify";
import { handleAuthErrors } from "../utils/auth.util";
import { headers } from "../constants/http_config";
import { setTotalPages } from "../redux/features/app/util_slice";

export default class Transaction {
    private store: TStore

    constructor() {
        this.store = store
    }

    async getWalletDetails() {
        try {
            const { data } = await axios.get<TSuccessResponse<any>>('/api/wallets', headers)
            store.dispatch(setWallet(data.data))
            sessionStorage.setItem('account', JSON.stringify(data.data.accounts[0]))
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>);
        }
    }

    async getTransactions(page: number) {
        try {
            const { data } = await axios.get<TSuccessResponse<ITransaction[]>>(`/api/transactions?page${page}`, headers)
            store.dispatch(setTransactions(data.data))
            toast.success('Fetch successful', {autoClose: 1000})
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>);
        }
    }

    async getTransaction(transactionId: any) {
        try {
            const { data } = await axios.get<TSuccessResponse<ITransaction>>(`/api/transactions/${transactionId}`, headers)
            store.dispatch(setSingleTransaction(data.data))
            store.dispatch(setTotalPages(data.totalPages))
            toast.success('Fetch Succesful', {autoClose: 1000})
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>);
        }
    }

    async getBanks() {
        try {
            const {data} = await axios.get<TSuccessResponse<any>>('/api/wallets/bank', headers)
            store.dispatch(setBanks(data.data))
            sessionStorage.setItem('banks', JSON.stringify(data.data))
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>);
        }
    }


    async confirmBankDetails(payload: IConfirmankDetails) {
        try {
            const {data} = await axios.post<TSuccessResponse<IConfirmBankDetailsResponse>>('/api/wallets/bank/confirm', payload, headers)
            return data
        } catch (error: any) {
            console.log(error)
            if (error.response.data.error.error === "Could not resolve account name. Check parameters or try again.") {
                toast.error("Could not resolve account name. Check parameters or try again.", {autoClose: 1000})
            }
            handleAuthErrors(error as AxiosError<TErrorResponse>);
        }
    }

    async setBankDetails(payload: ISetBankDetails) {
        try {
            const {data} = await axios.post<TSuccessResponse<any>>('/api/wallets/bank', payload, headers)
            return data
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>);
        }
    }

    async withdraw(payload: any) {
        try {
            const { data } = await axios.post<TSuccessResponse<any>>('/api/wallets/withdraw', payload, headers)
            return data
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>)
        }
    }
}