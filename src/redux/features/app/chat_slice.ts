import { IConversation } from "@/src/interfaces/IChat";
import { IUser } from "@/src/interfaces/IUser";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    conversations: [] as IConversation[],
    chatDetails: {},
    updateConversation: {},
    updateMessage: {},
    users: [] as IUser[],
    messages: [] as any[]
}

const chat_slice = createSlice({
    name: "Chat_Slice",
    initialState,
    reducers: {
        setConversations: (state, action: PayloadAction<IConversation[]>) => {
            state.conversations = action.payload
        },
        updateConversation: (state, action: PayloadAction<IConversation>) => {
            state.conversations = [action.payload, ...state.conversations]
        },
        setUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload
        },
        setMessages: (state, action: PayloadAction<any[]>) => {
            state.messages = action.payload
        },
        createMessage: (state, action: PayloadAction) => {
            state.messages = [...state.messages, action.payload]
        }
    }
})

export const { setConversations, setUsers, setMessages, updateConversation, createMessage } = chat_slice.actions
export default chat_slice.reducer
