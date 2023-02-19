import React from "react";
import { Children } from "react";
import { useContext } from "react";
import { QuizeContext } from "../context/index.js";
import './MainPage.scss'
 

const MainPage= ({children}) =>{

    const {setGoAhead} = useContext(QuizeContext)

    return(
        <div onClick={()=>  setGoAhead(false)} className="page">
            <div className="quiz-wraper">
                {children}
            </div>
        </div>
    )
}

export default MainPage