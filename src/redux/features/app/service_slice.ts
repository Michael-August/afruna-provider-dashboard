import { ICreateService, IService, IServiceCategory } from "@/src/interfaces/IService"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    services: [] as IService[],
    service: {} as IService,
    serviceId: '',
    serviceCategories: [] as IServiceCategory[]
}

const serviceSlice = createSlice({
    name: 'Service_Slice',
    initialState,
    reducers: {
        setServices: (state, action: PayloadAction<IService[]>) => {
            state.services = action.payload
        },
        setSingleService: (state, action: PayloadAction<any>) => {
            state.service = action.payload
        },
        setServiceId: (state, action: PayloadAction<string>) => {
            state.serviceId = action.payload
        },
        createService: (state, action: PayloadAction<IService>) => {
            state.services = [action.payload, ...state.services]
        },
        setServiceCategories: (state, action: PayloadAction<IServiceCategory[]>) => {
            state.serviceCategories
        }
    }
})

export const { setServices, setSingleService, setServiceId, createService } = serviceSlice.actions;
export default serviceSlice.reducer;
