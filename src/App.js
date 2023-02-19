import MainPage from "./pages";
import StartScreen from "./components/StartScreen";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { useState, useContext } from "react";
import {QuizeContext} from "./context";

function App() {
  
  const {partOfGame, setPartOfGame} = useContext(QuizeContext)
  return (
    <MainPage>
      {partOfGame === 'start' && <StartScreen/>}
      {partOfGame === 'game' && <Quiz/>}
      {partOfGame === 'finish' && <EndScreen/>}
    </MainPage>
  );
}

export default App;
