import React from 'react';

function ScoreSummary({ score, total, goHome }) {
  return (
    <div className="glass-card">
      <h2>Quiz Complete!</h2>
      <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>
        Your Score: <span style={{ color: '#00ffff' }}>{score}</span> / {total}
      </p>
      <button className="neon-btn" onClick={goHome}>Return Home</button>
    </div>
  );
}

export default ScoreSummary;