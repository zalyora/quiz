import "../App.css";
import { Questions } from "../context/Questions";
import { useState } from "react";

import { useContext } from "react";
import { GameStateContext } from "../context/Context";

export default function Quiz() {
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const { score, setScore, setGameState } = useContext(
        GameStateContext
    );

    const chooseOption = (option) => {
        setOptionChosen(option);
    };

    const nextQuestion = () => {
        if (Questions[currentQuestion].asnwer === optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    };

    const finishQuiz = () => {
        if (Questions[currentQuestion].asnwer === optionChosen) {
            setScore(score + 1);
        }
        setGameState("finished");
    };
    return (
        <div className="Quiz">
        <h1>{Questions[currentQuestion].prompt}</h1>
        <img className="image" alt="" src={Questions[currentQuestion].image} />
        <div className="questions">
            <button className="option"
                onClick={() => {
                    chooseOption("optionA");
                }}
            >
                {Questions[currentQuestion].optionA}
            </button>
            <button className="option"
                onClick={() => {
                    chooseOption("optionB");
                }}
            >
                {Questions[currentQuestion].optionB}
            </button>
            <button className="option"
                onClick={() => {
                    chooseOption("optionC");
                }}
            >
                {Questions[currentQuestion].optionC}
            </button>
            <button className="option"
                onClick={() => {
                    chooseOption("optionD");
                }}
            >
                {Questions[currentQuestion].optionD}
            </button>
        </div>

        {currentQuestion === Questions.length - 1 ? (
            <button onClick={finishQuiz} id="nextQuestion">
                Завершити Quiz
            </button>
        ) : (
            <button onClick={nextQuestion} id="nextQuestion">
                Наступне Запитання
            </button>
        )}
    </div>
    )
}