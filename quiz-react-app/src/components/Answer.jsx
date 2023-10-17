import React from 'react'

const Answer = ({ answerText, onSelectAnswer, index, currentAnswer, correctAnswer }) => {
    const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
    const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer
    const correctAnswerClass = isCorrectAnswer ? "correct-answer" : ""
    const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : ""
    const disableClass = currentAnswer ? "disabled-answer" : ""
    const answerLetter = ['A', 'B', 'C', 'D']
    return (
        <div className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disableClass}`} onClick={() => onSelectAnswer(answerText)}>
            <div className='answer-letter'>{answerLetter[index]}</div>
            <div className='answer-text'>{answerText}</div>
        </div>
    )
}

export default Answer