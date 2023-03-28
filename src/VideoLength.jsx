import { useState, useEffect } from "react"

const VideoLength = ({ totalTime }) => {

  let [hours, setHours] = useState(0)
  let [minutes, setMinutes] = useState(0)
  let [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const calculateHours = Math.floor(totalTime / 3600);
    const calculateMinutes = Math.floor((totalTime % 3600) / 60);
    const calculateSeconds = Math.floor(totalTime % 60);


    setHours(calculateHours)
    calculateMinutes < 10 ? setMinutes(`0${calculateMinutes}`) : setMinutes(calculateMinutes)
    setSeconds(calculateSeconds)

  }, [])

  return (
    <span> {hours > 0 && `${hours}:`}{minutes > 0 && `${minutes}:`}{seconds} </span>
  )
}

export default VideoLength