

import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import './App.css';

const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "Berlin", isCorrect: false },
      { answerText: "Madrid", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Lisbon", isCorrect: false }
    ]
  },
  {
    questionText: "Who is the CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false }
    ]
  },
 
  {
    questionText: "What is the Capital of India?",
    answerOptions: [
      { answerText: "Mumbai", isCorrect: false },
      { answerText: "Ahamdabad", isCorrect: false },
      { answerText: "Delhi", isCorrect: true },
      { answerText: "Banglore", isCorrect: false }
    ]
  },
  {
    questionText: "Who is the Founder of Zomato?",
    answerOptions: [
      { answerText: "Aman Gupta", isCorrect: false },
      { answerText: "Depender Goyal", isCorrect: true },
      { answerText: "Ashneer Grover", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false }
    ]
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="app">
      {showResult ? (
        <Result score={score} total={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestion]}
          handleAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
}

export default App;
