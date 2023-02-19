import { createContext, useState } from "react";


export const QuizeContext = createContext({})

const QuizProvider =({children}) =>{
    const [partOfGame, setPartOfGame] = useState('start')
    const [name, setName] = useState('')
    const [score, setScore] = useState(0)
    const [finishTime, setFinishTime] = useState()
    const[goAhead, setGoAhead] = useState(false)
    const [time, setTime] = useState({ms:0, s:0, m:0})
    

    const startTimer = ()=>{
        run()
        setFinishTime(setInterval(run,10))
    }

    let updateMs = time.ms
    let updateS = time.s
    let updateM = time.m

    const run =()=>{
        if(updateS === 60){
            updateM++
            updateS =0; 
        }
        if(updateMs == 99){
            updateS++
            updateMs = 0
        }
        updateMs++
        return setTime({ms:updateMs, s:updateS, m:updateM })
    }

    const stopTimer = ()=>{
        clearInterval(finishTime)
    }
    
    return(
        <QuizeContext.Provider value={{partOfGame, setPartOfGame, setName, name, score, setScore, time, setTime,  startTimer, stopTimer, goAhead, setGoAhead }}>
            {children}
        </QuizeContext.Provider>
    )

} 

export default QuizProvider