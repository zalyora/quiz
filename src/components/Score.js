import { connect } from 'react-redux';
import { handleRestartQuiz } from '../actions/Actions';


const Score = ({questions, score, handleRestartQuiz}) => {

    return (
        <div className="EndScreen">
            <h2>
                Правильних відповідей {score} з {questions.length}!
            </h2>
            <div>
                <button className='again' onClick={handleRestartQuiz}>
                Пройти знову
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    questions: state.questions,
    score: state.score
})
const mapDispatchToProps = {
    handleRestartQuiz
}


export default connect(mapStateToProps, mapDispatchToProps)(Score);
