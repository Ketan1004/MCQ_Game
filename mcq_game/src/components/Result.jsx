import React from 'react';

function Result({ score, total }) {
  return (
    <div className="result-container">
      <h2>Quiz Completed!</h2>
      <p>
        You scored {score} out of {total}
      </p>
    </div>
  );
}

export default Result;