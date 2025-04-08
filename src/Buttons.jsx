import React from "react"
import {useDispatch, useSelector} from "react-redux"
import { switchBreakRunning, switchSessionRunning, resetClock } from "./clockSlice.js";
import { setUntouchable, resetSetup } from "./setupSlice.js";


function Buttons () {

    const label = useSelector((state) => state.clock.label);
    const runningSession = useSelector((state) => state.clock.runningSession);
    const runningBreak = useSelector((state) => state.clock.runningBreak);
    const audio = document.getElementById("beep");

    const dispatch = useDispatch();

    const clickHandlerPlayPause = () => {
        if (label === "Session") {
            dispatch(switchSessionRunning())
        } else {
            dispatch(switchBreakRunning())
        }
        dispatch(setUntouchable())
    }   

    const clickHandlerReset = () => {
        audio.pause();
        audio.currentTime = 0;
        dispatch(resetSetup());
        dispatch(resetClock())
    }

    return(
        <div id="buttons-div">
            <div className="play-pause-div">
                <p className="play-pause-label">{runningSession || runningBreak ? "Pause" : "Play"}</p>
                <button id="start_stop" onClick={clickHandlerPlayPause}><img style={runningSession || runningBreak ? {display: "none"} : {display: "inline"}} className="startImg" src="https://cdn-icons-png.flaticon.com/512/0/375.png" alt="playLogo" /><img style={runningSession || runningBreak ? {display: "inline"} : {display: "none"}} className="pauseImg" src="https://cdn-icons-png.flaticon.com/512/16/16427.png" alt="pauseLogo" /></button>
            </div>
            <div className="reset-div">    
                <p className="reset-label">Press to change the length of Session and Break</p>
                <button id="reset" onClick={clickHandlerReset}><img className="resetImg" src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/refresh-r1u3qdp9gb8jvyi5gp4oi.png/refresh-x9k2twcdqairztqp5b0tae.png?_a=DAJFJtWIZAAC" alt="resetLogo" /></button>
            </div>
        </div>
    )
    
} 

export default Buttons