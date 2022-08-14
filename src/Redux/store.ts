import { configureStore } from '@reduxjs/toolkit'
import changeCounterSliceReducer from './Slice/changeCounter'
import bitcoinPriceSliceReducer from './Slice/bitcoinPrice'

export const Store = configureStore({
    reducer: {
        changeCounter: changeCounterSliceReducer,
        bitcoinPrice : bitcoinPriceSliceReducer
    }
})
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch