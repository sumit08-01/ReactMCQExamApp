import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Quiz } from './components/Quiz.jsx'
import { QuizProvider } from './context/quiz'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </>,
)
