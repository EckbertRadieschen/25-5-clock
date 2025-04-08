import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {decrementSessionLength, incrementSessionLength} from "./setupSlice.js"
import {setSessionTime} from "./clockSlice.js"

function SessionSetup () {
    const dispatch = useDispatch()
    const sessionLength = useSelector((state) => state.setup.sessionLength)

    const clickHandlerDec = () => {
        if (sessionLength > 1) {
            dispatch(decrementSessionLength());
            dispatch(setSessionTime(sessionLength - 1))
        }        
    }

    const clickHandlerInc = () => {
        if (sessionLength < 60) {
            dispatch(incrementSessionLength());
            dispatch(setSessionTime(sessionLength + 1))
        }
    }

    return(
        <div id="session-setup">
            <h2 id="session-label">Session Length</h2>
            <div id="session-buttons">
                <button id="session-decrement" onClick={clickHandlerDec}><img src="https://www.svgrepo.com/show/403209/down-arrow.svg" alt="down-arrow"/></button>
                <p id="session-length">{sessionLength}</p>
                <button id="session-increment" onClick={clickHandlerInc}><img src="https://www.svgrepo.com/show/404271/up-arrow.svg" alt="up-arrow" /></button>
            </div>       
        </div>
    )
}

export default SessionSetup