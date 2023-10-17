import React, { useContext } from 'react'
import Answer from './Answer'
import { QuizContext } from '../context/quiz';

const Question = () => {
    const [state, dispatch] = useContext(QuizContext)
    const currentQuestion = state.questions[state.currentQuestionIndex].question;
    return (
        <div>
            <div className='question'>{currentQuestion}</div>
            <div className='answers'>
                {state.answers.map((answer, index) => (
                    <Answer answerText={answer}
                        key={index}
                        index={index}
                        currentAnswer={state.currentAnswer}
                        correctAnswer={state.questions[state.currentQuestionIndex].correctAnswer}
                        onSelectAnswer={(answerText) => dispatch({ type: "SELECT_ANSWER", payload: answerText })} />
                ))}
            </div>
        </div>
    )
}

export default Question