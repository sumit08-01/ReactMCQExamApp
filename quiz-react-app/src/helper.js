import React from 'react'

const ShufflerAnswers = (question) => {
    const unShufflerAnswers = [
        question.correctAnswer,
        ...question.incorrectAnswers
    ];
    return unShufflerAnswers.map((unShufflerAnswer) => ({
        sort: Math.random(),
        value: unShufflerAnswer
    })).sort((a, b) => a.sort - b.sort).map((a) => a.value)
}

export default ShufflerAnswers;

export const normalizedQuestions = (backendQuestions) => {
    // console.log(backendQuestions);
    return backendQuestions.map((backendQuestion) => {
        const incorrectAnswers = backendQuestion.incorrect_answers
            .map((incorrectAnswer) => (
                decodeURIComponent(incorrectAnswer)
            ));
        return {
            correctAnswer: decodeURIComponent(backendQuestion.correct_answer),
            question: decodeURIComponent(backendQuestion.question),
            incorrectAnswers,
        }
    })
}