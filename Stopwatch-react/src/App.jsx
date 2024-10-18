import { useState,useRef } from 'react'
import './App.css'

function App() {
  const [startTime, setStartTime] = useState(null)
  const [now, setNow] = useState(null)
  const intervalRef = useRef(null)
  
  function startWatch() {
    setStartTime(Date.now);
    setNow(Date.now());
  clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setNow(Date.now());
      }, 10);
  }
  function stopWatch() {
    clearInterval(intervalRef.current)
  }
let timepassed = 0;
if (startTime != null && now != null) {
  timepassed = (now-startTime)/1000;
}

  return (
    <>
      <div className="time"><h1>{timepassed.toFixed(3)}</h1></div>
      <button onClick={startWatch}>Start</button>
      <button onClick={stopWatch}>Stop</button>
    </>
  )
}

export default App
