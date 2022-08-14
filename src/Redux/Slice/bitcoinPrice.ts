import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'

interface PriceState {
    usd: number
    gbp: number
    eur: number
    time: String
}

interface BitcoinState {
    chartName: String
    price: Array<PriceState>
}

const initialState = {chartName: '', price: []} as BitcoinState

const bitcoinPriceSlice = createSlice({
    name: 'bitcoinPrice',
    initialState,
    reducers: {
        bitcoinPrice: (state, action: PayloadAction<{chartName: String, usd: number, gbp: number, eur: number, time: String}>) => {
            if(state.price.length == 0 || (state.price.at(-1).usd != action.payload.usd || state.price.at(-1).gbp != action.payload.gbp || state.price.at(-1).eur) != action.payload.eur)
            {
                return{
                    ...state,
                    chartName: action.payload.chartName,
                    price: state.price.concat({usd: action.payload.usd, gbp: action.payload.gbp, eur: action.payload.eur, time: action.payload.time})
                }
            }
            else{
                return{...state}
            }
        },
    },
})

export const { bitcoinPrice } = bitcoinPriceSlice.actions
export default bitcoinPriceSlice.reducer