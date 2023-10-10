import { createContext, useReducer } from "react";
import Question from "./Question";

const initialState = {
  currentQuestionIndex: 0,
  question: [],
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
        <div className="score">Question 1/8</div>
        <div>
          <Question questions={state.question} />
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
