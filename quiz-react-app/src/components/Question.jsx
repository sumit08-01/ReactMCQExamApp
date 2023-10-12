import { useContext } from "react";
import Answer from "./Answer";
import { QuizProvider } from "./Quiz";

const Question = () => {
  const state = useContext(QuizProvider);
  console.log("state", state);
  return (
    <div>
      <div className="question">{state.question[state.currentQuestionIndex].question}</div>
      <div className="answers">
        {
          state.answers.map((answer, index) => (
            <Answer answerText={answer} key={index} index={index} onSelectAnswer={(answerText) => (state.currentAnswer = answerText)} />
          ))
        }
      </div>
    </div>
  );
};

export default Question;
