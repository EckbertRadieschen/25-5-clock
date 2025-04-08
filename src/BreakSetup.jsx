import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {decrementBreakLength, incrementBreakLength} from "./setupSlice.js"
import {setBreakTime} from "./clockSlice"

function BreakSetup () {
    const dispatch = useDispatch()
    const breakLength = useSelector((state) => state.setup.breakLength)

    const clickHandlerDec = () => {
            if (breakLength > 1) {
                dispatch(decrementBreakLength())
                dispatch(setBreakTime(breakLength - 1))
            }        
        
        }
    
        const clickHandlerInc = () => {
            if (breakLength < 60) {
                dispatch(incrementBreakLength())
                dispatch(setBreakTime(breakLength + 1))
            }
        }

    return(
        <div id="break-setup">                
            <h2 id="break-label">Break Length</h2>
            <div id="break-buttons">
                <button id="break-decrement" onClick={clickHandlerDec}><img src="https://www.svgrepo.com/show/403209/down-arrow.svg" alt="down-arrow" /></button>
                <p id="break-length">{breakLength}</p>
                <button id="break-increment" onClick={clickHandlerInc}><img src="https://www.svgrepo.com/show/404271/up-arrow.svg" alt="up-arrow" /></button>
            </div>
        </div>
    )
}

export default BreakSetup