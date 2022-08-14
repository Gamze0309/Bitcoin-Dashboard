import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    hour: number
    plus: boolean
    value: number
}

const initialState = {hour: 36000, plus: false, value: 1} as CounterState

const changeCounterSlice = createSlice({
    name: 'changeCounter',
    initialState,
    reducers: {
        changeCounter: (state, action: PayloadAction<{plus:boolean, value: number}>) => {
            if(action.payload.plus){
                return{
                    ...state,
                    hour: state.hour + action.payload.value
                }
            }
            else{
                return{
                    ...state,
                    hour: state.hour - action.payload.value
                }
            }
            
        },
        startCounter: (state) => {
            return{
                ...state,
                hour: 36000
            }
        }
    },
})

export const { changeCounter, startCounter } = changeCounterSlice.actions
export default changeCounterSlice.reducer