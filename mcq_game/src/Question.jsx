
import React from 'react';

function Question({ question, handleAnswerOptionClick }) {
  return (
    <div className="question-container">
      <div className="question-text">{question.questionText}</div>
      <div className="answer-options">
        {question.answerOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(option.isCorrect)}
          >
            {option.answerText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
