import "../App.css";
import { Questions } from "../context/Questions";
import { connect } from "react-redux";
import { handleAnswerOptionClick } from "../actions/Actions";
import { store } from "../stores/store"

const Quiz = ({questions, currentQuestion, handleAnswerOptionClick}) => {
    
    const question = questions[currentQuestion];
    return (
        <div className="Quiz">
            <h1>{Questions[currentQuestion].prompt}</h1>
            <img className="image" alt="" src={Questions[currentQuestion].image} />
            <div className="questions">
                {question.answerOptions.map((answerOption, index) => (
                    <button className="answer-option" key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                        {answerOption.answer}
                    </button>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    questions: state.questions,
    currentQuestion: state.currentQuestion,
});

const mapDispatchToProps = {
    handleAnswerOptionClick
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);