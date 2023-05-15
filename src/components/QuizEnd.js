import React from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../context/Context";
import { Questions } from "../context/Questions";

export default function QuizEnd() {
    const { score, setScore, setGameState} = useContext(
        GameStateContext
    );
    
    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    };
    return (
        <div className="EndScreen">
            <h1>Quiz Finished</h1>
            <h2>
                {score} / {Questions.length}
            </h2>
            <button onClick={restartQuiz}>Пройти знову</button>
    </div>
    )
}