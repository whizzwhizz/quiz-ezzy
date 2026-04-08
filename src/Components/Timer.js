import React, { useState, useEffect } from 'react';

function Timer({ initialTime, onTimeOut }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeOut();
      return;
    }

    // JavaScript setInterval for the countdown requirement
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(intervalId);
  }, [timeLeft, onTimeOut]);

  return (
    <div className="timer-text">
      Time Remaining: {timeLeft}s
    </div>
  );
}

export default Timer;