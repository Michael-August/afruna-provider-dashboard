import { IBooking } from "@/src/interfaces/IBooking";
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    dashboardCards: {} as any,
    dashboardBookings: [] as IBooking[]
}

const dashboardSlice = createSlice({
    name: 'Dashboard_Slice',
    initialState,
    reducers: {
        setDashboardCard: (state, action: PayloadAction<number>) => {
            state.dashboardCards = action.payload
        },
        setDashboardBookings: (state, action: PayloadAction<IBooking[]>) => {
            state.dashboardBookings = action.payload
        }
    }
})

export const { setDashboardCard, setDashboardBookings } = dashboardSlice.actions;
export default dashboardSlice.reducer;
