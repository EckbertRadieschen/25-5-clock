import {configureStore} from "@reduxjs/toolkit"
import setupReducer from "./setupSlice.js"
import clockReducer from "./clockSlice.js"

const store = configureStore({
    reducer: {
        clock: clockReducer,
        setup: setupReducer,
    }
})

export default store