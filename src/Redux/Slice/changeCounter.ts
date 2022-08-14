import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    hour: number
    minute: number
    second: number
    plus: boolean
    minus: boolean
}

const initialState = {hour: 10, minute:0, second:0, plus: false, minus: false} as CounterState

const changeCounterSlice = createSlice({
    name: 'changeCounter',
    initialState,
    reducers: {
        changeSecond: (state, action: PayloadAction<{plus:boolean, minus: boolean}>) => {
            if(action.payload.plus){
                return{
                    ...state,
                    hour: (state.minute == 59 && state.second == 59) ? state.hour + 1 : state.hour,
                    minute: state.second == 59 ? (state.minute == 59 ? 0 : state.minute + 1) : state.minute,
                    second: state.second == 59 ? 0 : state.second + 1,
                    plus: action.payload.plus,
                    minus: action.payload.minus
                }
            }
            else{
                return {
                    ...state,
                    second: state.second == 0 ? 59 : state.second - 1,
                    plus: action.payload.plus,
                    minus: action.payload.minus
                }
            }
        },
        changeMinute: (state, action: PayloadAction<{plus:boolean, minus: boolean}>) => {
            if(action.payload.plus){
                return{
                    ...state,
                    hour: (state.minute == 59) ? state.hour + 1 : state.hour,
                    minute: state.minute == 59 ? 0 : state.minute + 1,
                    plus: action.payload.plus,
                    minus: action.payload.minus
                }
            }
            else if (action.payload.minus){
                return{
                    ...state,

                }
            }
            else {
                return {
                    ... state,
                    minute: state.minute == 0 ? 59 : state.minute - 1,
                    plus: action.payload.plus,
                    minus: action.payload.minus
                }
            }
        },
        changeHour: (state, action: PayloadAction<{plus:boolean, minus: boolean}>) => {
            if(action.payload.plus){
                return{
                    ...state,
                    hour: state.hour + 1,
                    plus: action.payload.plus,
                    minus: action.payload.minus
                }
            }
            else{
                return {
                    ...state,
                    hour: state.hour == 0 ? 10 : state.hour - 1,
                    plus: action.payload.plus,
                    minus: action.payload.minus
                }
            }
        }
    },
})

export const { changeSecond, changeMinute, changeHour } = changeCounterSlice.actions
export default changeCounterSlice.reducer