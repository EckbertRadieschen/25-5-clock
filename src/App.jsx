import './App.css'
import BreakSetup from "./BreakSetup.jsx"
import SessionSetup from "./SessionSetup.jsx"
import Clock from "./Clock.jsx"
import Buttons from "./Buttons.jsx"
import {useSelector} from "react-redux"

function App() {
  
  const untouchable = useSelector((state) => state.setup.untouchable)

  return (
    <div>
      <div id="setup-div" style={untouchable? {display: "none"} : {display: "flex"}}>
        <BreakSetup />
        <SessionSetup />
      </div>
      <div id="clock-div" style={untouchable? {marginTop: "170px"} : {marginTop: "20px"}}>
        <Clock />
      </div>
      <Buttons />
    </div>
  )
}

export default App
