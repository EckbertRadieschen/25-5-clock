import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    label: "Session",
    sessionTime: 1500,
    breakTime: 300,
    runningSession: false,
    runningBreak: false,
}

const clockSlice = createSlice({
    name: "clock",
    initialState,
    reducers: {
        switchRunningState: (state) => {
            if(state.label === "Session") {
                state.label = "Break";
                state.runningSession = false;
                state.runningBreak = true;
            } else {
                state.label = "Session";
                state.runningBreak = false;
                state.runningSession = true;
            }
        },

        countDownSession: (state) => {
            state.sessionTime = state.sessionTime - 1
        },

        countDownBreak: (state) => {
            state.breakTime = state.breakTime - 1
        },

        setSessionTime: (state, action) => {
            state.sessionTime = action.payload * 60
        },

        setBreakTime: (state, action) => {
            state.breakTime = action.payload * 60
        },

        switchSessionRunning: (state) => {
            if(state.runningSession) {
                state.runningSession = false;
            } else {
                state.runningSession = true;
            }
        },

        switchBreakRunning: (state) => {
            if(state.runningBreak) {
                state.runningBreak = false;
            } else {
                state.runningBreak = true;
            }
        },

        resetClock: (state) => {
            state.label = "Session";
            state.sessionTime = 1500;
            state.breakTime = 300;
            state.runningSession = false;
            state.runningBreak = false
        }

    }
})

export const {setSessionTime} = clockSlice.actions
export const {setBreakTime} = clockSlice.actions
export const {countDownSession} = clockSlice.actions
export const {countDownBreak} = clockSlice.actions
export const {switchRunningState} = clockSlice.actions
export const {switchSessionRunning} = clockSlice.actions
export const {switchBreakRunning} = clockSlice.actions
export const {resetClock} = clockSlice.actions
export default clockSlice.reducer