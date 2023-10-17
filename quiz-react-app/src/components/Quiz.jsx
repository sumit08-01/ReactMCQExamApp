import React, { useContext, useEffect, useReducer, useState } from 'react'
import Question from './Question'
import { QuizContext } from '../context/quiz';


export const Quiz = () => {

    // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [state, dispatch] = useContext(QuizContext)

    const openApi = "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple&encode=url3986";
    useEffect(() => {
        if (state.questions.length > 0) {
            return
        }
        fetch(openApi).then((res) => res.json()).then((data) => {
            dispatch({ type: "LOADED_QUESTIONS", payload: data.results })
        })
    }) // if we are not pass empty array then, it will render every state change


    return (
        <div className='quiz'>
            {state.showResults &&
                <div className="results">
                    <div className="congratulations">Congratulations</div>
                    <div className="result-info">
                        <div>You have completed you Quiz</div>
                        <div>You've got {state.correctAnswerCount} of {state.questions.length}</div>
                    </div>
                    <div className="next-button" onClick={() => dispatch({ type: "RESTART" })}>Restart</div>
                </div>}
            {
                !state.showResults && state.questions.length > 0 && (
                    <div>
                        <div className='score'>Question {state.currentQuestionIndex + 1}/ {state.questions.length}</div>
                        <Question question={state} />
                        <div className='next-button' onClick={() => dispatch({ type: "NEXT_QUESTION" })}>Next Question</div>
                    </div>
                )
            }

        </div>
    )
}


//