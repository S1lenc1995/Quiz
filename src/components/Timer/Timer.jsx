import { QuizeContext } from "../../context";
import { useContext } from "react";

import './Timer.scss'

const Timer = ()=>{
    const{time} = useContext(QuizeContext)
    return(
        <div className="timer">
            <span className="time">{(time.m > 9)? time.m: "0"+time.m }</span>&nbsp;:&nbsp;
            <span className="time">{(time.s > 9)? time.s: "0"+time.s }</span>&nbsp;:&nbsp;
            <span className="time">{(time.ms > 9)? time.ms: "0"+time.ms }</span>
        </div>
    )
}

export default Timer