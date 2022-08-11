import { configureStore } from '@reduxjs/toolkit'
import changeCounterSliceReducer from './Slice/changeCounter'

export const Store = configureStore({
    reducer: {
        changeCounter: changeCounterSliceReducer
    }
})
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch