import {useContext} from "react";
import { QuizeContext } from "../../context/index.js";
import { QuestionList } from "../../helpers/QuestionList.js";
import Timer from "../Timer/Timer.jsx";

import './EndScreen.scss'

const EndScreen=()=>{
    const{setPartOfGame, setName, score, setScore, setTime, name } = useContext(QuizeContext) 
    
    const tryAgain =()=>{
        setPartOfGame('start')
        setName('')
        setScore(0)
        setTime({ms:0, s:0, m:0})
    } 

    return(
        <div className="result">
            <h1 className="result-item">{name} your time: </h1>
            <Timer/>
            <h2 className="result-item">Yor result: <br/>{ Math.round(score/QuestionList.length*100)}%</h2>
            <h3 className="result-item">Corect answers:  <br/> {score} </h3>
            <h3 className="result-item">Wrong answers:  <br/> {QuestionList.length - score} </h3>
            <button className="btn-try-again" onClick={()=>tryAgain()}>Try again</button>
            
        </div>
     
    )
}

export default EndScreen