import {useContext} from "react";
import { QuizeContext } from "../../context";
import Timer from "../Timer";

import './StartScreen.scss'


const StartScreen = () => {
    const {partOfGame, setPartOfGame, setName, name, startTimer} = useContext(QuizeContext)
  

  


    const onSubmit =(e)=>{
        e.preventDefault();
         setPartOfGame('game') 
        console.log(name)
        startTimer()
    }
    return (
        <div className="start-screen">
            <h1>Welcome</h1>
            <h2>Enter your name</h2>
            <Timer/>
            <form onSubmit={(e)=>onSubmit(e)} className="start-form">
                <input  onChange={(event) => setName(event.target.value)} type="text" className="input-name" minLength={2} maxLength={15} placeholder={'Enter your name'} required />
                <button className="btn-send-name" type="submit">START</button>
            </form>
        </div>

    )
}

export default StartScreen