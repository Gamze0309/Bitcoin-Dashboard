import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    hour: number
    minute: number
    second: number
}

const initialState = {hour: 10, minute:0, second:0} as CounterState

const changeCounterSlice = createSlice({
    name: 'changeCounter',
    initialState,
    reducers: {
        changeCounter: (state, action: PayloadAction<CounterState>) => {
            return {
                hour: action.payload.hour,
                minute: action.payload.minute,
                second: action.payload.second
            }
        },
    },
})

export const { changeCounter } = changeCounterSlice.actions
export default changeCounterSlice.reducer