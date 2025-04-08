import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {countDownSession, countDownBreak, switchRunningState, setSessionTime, setBreakTime} from "./clockSlice.js"

function Clock () {

    const timerLabel = useSelector((state) => state.clock.label);
    const runningSession = useSelector((state) => state.clock.runningSession);
    const runningBreak = useSelector((state) => state.clock.runningBreak);
    const sessionTime = useSelector((state) => state.clock.sessionTime);
    const breakTime = useSelector((state) => state.clock.breakTime);
    const sessionLength = useSelector((state) => state.setup.sessionLength);
    const breakLength = useSelector((state) => state.setup.breakLength);
    const audio = document.getElementById("beep");

    const dispatch = useDispatch();

    useEffect(() => {
        if (sessionTime !== 0) {
            let interval = null;
            if (runningSession) {
                interval = setInterval(() => {
                    dispatch(countDownSession());
                }, 1000);
            } else if (!runningSession && interval !== null) {
                clearInterval(interval);
            }
            return () => clearInterval(interval);
        } else {
            audio.play();
            dispatch(switchRunningState());
            dispatch(setSessionTime(sessionLength))
        }
    }, [runningSession, dispatch, sessionTime]) 

    useEffect(() => {
        if (breakTime !== 0) {
            let interval = null;
            if (runningBreak) {
                interval = setInterval(() => {
                    dispatch(countDownBreak());
                }, 1000);
            } else if (!runningBreak && interval !== null) {
                clearInterval(interval);
            }
            return () => clearInterval(interval);
        } else {
            dispatch(switchRunningState());
            dispatch(setBreakTime(breakLength))
            audio.play()
        }
    }, [runningBreak, dispatch, breakTime])


    
    const formatTime = (val) => {
        const minutes = Math.floor(val / 60) 
        const seconds = val - 60 * minutes
        
        return (
            `${minutes < 10 ? "0" + minutes.toString() : minutes.toString()} : ${seconds < 10 ? "0" + seconds.toString() : seconds.toString()}`
        )
    }
    

return(
    <div id="clock">
        <div id="timer-label">
           - {timerLabel} -
        </div>
        <div id="time-left" style={sessionTime < 60 || breakTime < 60 ? {color: "red"} : {color: "black"}}>
            {timerLabel === "Session" ? formatTime(sessionTime) : formatTime(breakTime)}
            <audio id="beep" src="https://www.soundjay.com/buttons/sounds/beep-01a.mp3"></audio>
        </div>
    </div>
)
    
} 

export default Clock