import React, { useState, useEffect } from 'react';

function QuestionCard({ questionData, questionNumber, totalQuestions, handleAnswer }) {
  const [showHint, setShowHint] = useState(false);

  // Reset hint when the question changes
  useEffect(() => {
    setShowHint(false);
  }, [questionData]);

  return (
    <div>
      <p style={{ color: '#00ffff', marginBottom: '10px' }}>
        Question {questionNumber} of {totalQuestions}
      </p>
      <h2>{questionData.question}</h2>
      
      <div className="options-grid">
        {questionData.options.map((option, index) => (
          <button 
            key={index} 
            className="option-btn"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Hint System */}
      {!showHint ? (
        <button className="hint-btn" onClick={() => setShowHint(true)}>
          ? Need a Hint?
        </button>
      ) : (
        <div className="hint-text">
          Hint: {questionData.hint}
        </div>
      )}
    </div>
  );
}

export default QuestionCard;