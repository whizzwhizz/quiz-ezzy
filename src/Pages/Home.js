import React from 'react';

function Home({ startQuiz }) {
  return (
    <div className="glass-card">
      <h2>Welcome to the Arena</h2>
      <p>Test your knowledge in the ultimate synthwave quiz experience. You have limited time to answer.</p>
      <button className="neon-btn" onClick={startQuiz}>START QUIZ</button>
    </div>
  );
}

export default Home;