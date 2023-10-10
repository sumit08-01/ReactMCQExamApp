import { createContext, useReducer } from "react";
import Question from "./Question";
import questions from "../data/data";

const initialState = {
  currentQuestionIndex: 0,
  question: questions,
};

const reducer = (state, action) => {
  if (action.type === "NEXT_QUESTION") {
    return {
      ...state,
      currentQuestionIndex: state.currentQuestionIndex + 1,
    };
  }
  return state;
};

export const QuizProvider = createContext();

const Quiz = () => {
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state", state);

  return (
    <QuizProvider.Provider value={state.question}>
      <div className="quiz">
        <div className="score">
          Question {state.currentQuestionIndex + 1}/{questions.length}
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
    </QuizProvider.Provider>
  );
};

export default Quiz;
