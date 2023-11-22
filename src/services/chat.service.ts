import axios, { AxiosError } from "axios";
import { TStore, store } from "../redux/store";
import { TErrorResponse, TSuccessResponse } from "../types/auth.types";
import { headers } from "../constants/http_config";
import { createMessage, setConversations, setMessages, setUsers } from "../redux/features/app/chat_slice";
import { handleAuthErrors } from "../utils/auth.util";
import { IConversation, IMessage } from "../interfaces/IChat";
import { T_loading_provider } from "../types/loader.types";

export default class ChatService {
    private store: TStore

    constructor() {
        this.store = store
    }

    async getConversations(loading_opt: T_loading_provider) {
        const { setIsLoading } = loading_opt
        setIsLoading && setIsLoading(true)
        try {
            const { data } = await axios.get<TSuccessResponse<IConversation[]>>('/api/conversations', headers)
            store.dispatch(setConversations(data.data))
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>)
        } finally {
            setIsLoading && setIsLoading(false)
        }
    }

    async sendMessage(message: any) {
        try {
            const { data } = await axios.post<TSuccessResponse<any>>('/api/messages', message, headers)
            store.dispatch(createMessage(data.data.message))
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>)
        }
    }

    async getMessages(conversationId: string) {
        try {
            const { data } = await axios.get<TSuccessResponse<any>>(`/api/messages/${conversationId}`, headers)
            const messages: IMessage[] = data.data.slice().reverse();
            store.dispatch(setMessages(messages))
            return data.data
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>)
        }
    }

    async getUsers() {
        try {
            const { data } = await axios.get('/api/users', headers)
            store.dispatch(setUsers(data.data))
        } catch (error) {
            handleAuthErrors(error as AxiosError<TErrorResponse>)
        }
    }
}