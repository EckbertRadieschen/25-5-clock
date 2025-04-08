import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    sessionLength: 25,
    breakLength: 5,
    untouchable: false
}

const setupSlice = createSlice({
    name: "setup",
    initialState,
    reducers: {
        decrementSessionLength: (state) => {
            state.sessionLength = state.sessionLength - 1
        },

        incrementSessionLength: (state) => {
            state.sessionLength = state.sessionLength + 1
        },

        decrementBreakLength: (state) => {
            state.breakLength = state.breakLength - 1
        },

        incrementBreakLength: (state) => {
            state.breakLength = state.breakLength + 1
        },

        setUntouchable: (state) => {
            state.untouchable = true
        },

        resetSetup: (state) => {
            state.sessionLength = 25;
            state.breakLength = 5;
            state.untouchable = false
        }
    }
})


export const {decrementSessionLength} = setupSlice.actions
export const {incrementSessionLength} = setupSlice.actions
export const {decrementBreakLength} = setupSlice.actions
export const {incrementBreakLength} = setupSlice.actions
export const {setUntouchable} = setupSlice.actions
export const {resetSetup} = setupSlice.actions
export default setupSlice.reducer