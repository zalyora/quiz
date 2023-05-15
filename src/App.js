import './App.css';
import { useState } from "react";
import { GameStateContext } from "./context/Context";
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import QuizEnd from './components/QuizEnd';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <QuizEnd />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
