import { createContext, useReducer } from "react";
import Question from "./Question";
import questions from "../data/data";
import ShufflerAnswers from "../helper";

const initialState = {
  currentQuestionIndex: 0,
  question: questions,
  showResult: false,
  answers: ShufflerAnswers(questions[0]),
  currentAnswer: ""
};

export const reducer = (state, action) => {
  console.log(state.currentAnswer);
  switch (action.type) {
    case "SELECT_ANSWER": {
      return {
        ...state,
        currentAnswer: action.payload
      }

    }
    case "NEXT_QUESTION": {
      const showResult = state.currentQuestionIndex === state.question.length - 1 // here if currentquestionIndex ===8 and length of the question array is === 8 then , showResult is update to TURE
      const currentQuestionIndex = showResult ? state.currentQuestionIndex : state.currentQuestionIndex + 1;
      const answers = showResult ? [] : ShufflerAnswers(state.question[currentQuestionIndex])
      return {
        ...state,
        currentQuestionIndex,
        showResult,
        answers
      };
    }
    case "RESTART": {
      return initialState;
      // return { //OR you can return like this, but this is not a good practice
      // ...state,
      // currentQuestionIndex: state.currentQuestionIndex = 0,
      // showResult: false, 
      // };
    }
    default: {
      return state
    }
  }
};

export const QuizProvider = createContext();

const Quiz = () => {
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state", state);

  return (

    <QuizProvider.Provider value={state} >
      <>
        {state.showResult &&
          <div className="results">
            <div className="congratulations">Congratulations</div>
            <div className="result-info">
              <div>You have completed you Quiz</div>
              <div>You've got 4 of {state.question.length}</div>
            </div>
            <div className="next-button" onClick={() => dispatch({ type: "RESTART" })}>Restart</div>
          </div>}
        {!state.showResult &&
          <div className="quiz">
            <div className="score">
              Question {state.currentQuestionIndex + 1}/ {questions.length}
            </div>
            <div>
              <Question />
            </div>
            <div
              className="next-button"
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
            >
              Next Question
            </div>
          </div>
        }
      </>
    </QuizProvider.Provider>
  );
};

export default Quiz;
