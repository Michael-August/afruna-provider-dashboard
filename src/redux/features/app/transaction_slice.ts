import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITransaction, IWallet } from "@/src/interfaces/ITransaction";

const initialState = {
    transactions: [] as ITransaction[],
    transaction: {} as ITransaction,
    banks: [] as any[],
    wallet: {} as IWallet
}

const transaction_slice = createSlice({
    name: "Transaction_Slice",
    initialState,
    reducers: {
        setTransactions: (state, action: PayloadAction<ITransaction[]>) => {
            state.transactions = action.payload
        },
        setSingleTransaction: (state, action: PayloadAction<ITransaction>) => {
            state.transaction = action.payload
        },
        setBanks: (state, action: PayloadAction<any[]>) => {
            state.banks = action.payload
        },
        setWallet: (state, action: PayloadAction<IWallet>) => {
            state.wallet = action.payload
        }
    }
})

export const { setTransactions, setSingleTransaction, setBanks, setWallet } = transaction_slice.actions
export default transaction_slice.reducer
