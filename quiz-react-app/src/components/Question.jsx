import { useContext } from "react";
import Answer from "./Answer";
import { QuizProvider } from "./Quiz";

const Question = () => {
  const [questions] = useContext(QuizProvider);

  console.log("questions", questions);
  return (
    <div>
      <div className="question">{questions.question}</div>
      <div className="answers">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </div>
  );
};

export default Question;
