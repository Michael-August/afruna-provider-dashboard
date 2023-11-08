import { IConversation } from "@/src/interfaces/IChat";
import { IUser } from "@/src/interfaces/IUser";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    conversations: [] as IConversation[],
    chatDetails: {},
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

export const { setConversations, setUsers, setMessages, createMessage } = chat_slice.actions
export default chat_slice.reducer
