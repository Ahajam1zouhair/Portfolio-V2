import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    value: boolean
}

const initialState: CounterState = {
    value: false,
}

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        switchMode: (state) => {
            state.value = !state.value
        },
    },
})

// Action creators are generated for each case reducer function
export const { switchMode } = modeSlice.actions

export default modeSlice.reducer
