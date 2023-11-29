import { IBooking } from "@/src/interfaces/IBooking";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookings: [] as IBooking[],
    booking: {} as IBooking,
}

const bookingSlice = createSlice({
    name: 'Booking_Slice',
    initialState,
    reducers: {
        setBookings: (state, action: PayloadAction<IBooking[]>) => {
            state.bookings = action.payload
        },
        setSingleBooking: (state, action: PayloadAction<IBooking>) => {
            state.booking = action.payload
        },
        updateBooking: (state, action: PayloadAction<IBooking>) => {
            state.bookings = [action.payload, ...state.bookings]
        },
    }
})

export const { setBookings, setSingleBooking, updateBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
