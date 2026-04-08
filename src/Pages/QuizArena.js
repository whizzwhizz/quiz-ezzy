import React, { useState } from 'react';
import QuestionCard from '../Components/QuestionCard';
import Timer from '../Components/Timer';
import ScoreSummary from '../Components/ScoreSummary';
import { quizContent } from '../quizData';

function QuizArena({ category, goHome }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Load questions for the selected category
  const questions = quizContent[category] || [];

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleTimeOut = () => {
    nextQuestion(); // Auto-advances when timer hits 0
  };

  if (questions.length === 0) {
    return (
      <div className="glass-card">
        <h2>Under Construction</h2>
        <p>Questions for {category} are being loaded into the mainframe...</p>
        <button className="neon-btn" onClick={goHome}>Go Back</button>
      </div>
    );
  }

  if (isFinished) {
    return <ScoreSummary score={score} total={questions.length} goHome={goHome} />;
  }

  return (
    <div className="arena-wrapper">
      <div className="glass-card">
        <h3 style={{ color: '#b300ff', textTransform: 'uppercase', marginBottom: '10px' }}>
          {category}
        </h3>
        
        {/* Progress Bar */}
        <div className="progress-container">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        <Timer key={currentQuestionIndex} initialTime={30} onTimeOut={handleTimeOut} />
        
        <QuestionCard 
          questionData={questions[currentQuestionIndex]} 
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          handleAnswer={handleAnswer} 
        />
      </div>
    </div>
  );
}

export default QuizArena;