import './App.css';
import Quiz from './components/Quiz';
import Score from './components/Score';
import store from './stores/store';
import { connect } from 'react-redux';
import { handleAnswerOptionClick, handleRestartQuiz } from './actions/Actions'
import { Questions } from './context/Questions';

const App = ({
  currentQuestion,
  showScore,
  score,
  handleAnswerOptionClick,
  handleRestartQuiz
}) => {
  const restartQuiz = () => {
    handleRestartQuiz();
  };

  return (
    <div className="App">
      {showScore ? (
        <Score
          score={score}
          totalQuestions={Questions.length}
          handleRestartQuiz={restartQuiz}
        />
      ) : (
        <Quiz
          currentQuestion={currentQuestion}
          handleAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentQuestion: state.currentQuestion,
  showScore: state.showScore,
  score: state.score,
});

const mapDispatchToProps = {
  handleAnswerOptionClick,
  handleRestartQuiz
};
export default connect(mapStateToProps, mapDispatchToProps)(App);