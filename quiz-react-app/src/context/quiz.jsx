import { createContext, useReducer } from "react";
import data from "../data/data";
import ShufflerAnswers, { normalizedQuestions } from "../helper";

export const QuizContext = createContext();


const initialState = {
    currentQuestionIndex: 0,
    // questions: data, // static data
    questions: [],
    showResults: false,
    // answers: ShufflerAnswers(data[0]), // static data 
    answers: [],
    currentAnswer: '',
    correctAnswerCount: 0

}

const reducers = (state, action) => {
    switch (action.type) {
        case "SELECT_ANSWER": {
            const correctAnswerCount = action.payload === state.questions[state.currentQuestionIndex].correctAnswer ? state.correctAnswerCount + 1 : state.correctAnswerCount;
            return {
                ...state,
                currentAnswer: action.payload,
                correctAnswerCount
            }
        }

        case "NEXT_QUESTION": {
            const showResults = state.currentQuestionIndex === state.questions.length - 1; // here if currentquestionIndex ===8 and length of the question array is === 8 then , showResult is update to TURE
            const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1
            const answers = showResults ? [] : ShufflerAnswers(state.questions[currentQuestionIndex])
            return {
                ...state,
                currentQuestionIndex,
                showResults,
                answers,
                currentAnswer: ""
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
        case "LOADED_QUESTIONS": {
            const normalizedQuestion = normalizedQuestions(action.payload)
            return {
                ...state,
                questions: normalizedQuestion,
                answers: ShufflerAnswers(normalizedQuestion[0])
            }
        }
        default: {
            return state
        }
    }
};

export const QuizProvider = ({ children }) => {
    const state = useReducer(reducers, initialState)

    return <QuizContext.Provider value={state}>{children}</QuizContext.Provider>
}