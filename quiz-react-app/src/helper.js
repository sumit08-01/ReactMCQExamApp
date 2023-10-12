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