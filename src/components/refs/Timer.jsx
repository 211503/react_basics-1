import React, { useState, useRef, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null); // Mutable ref to hold the timer ID
  const [isRunning, setIsRunning] = useState(false); // State to track if the timer is running

  const startTimer = () => {
    if (!timerRef.current) {
      // Only start a new timer if one isn't running
      timerRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1); // Increment count every second
      }, 1000);
      setIsRunning(true); // Update state to indicate that the timer is running
    }
  };

  const pauseTimer = () => {
    clearInterval(timerRef.current); // Stop the timer
    timerRef.current = null; // Clear the timer ID
    setIsRunning(false); // Update state to indicate that the timer is paused
  };

  const stopTimer = () => {
    clearInterval(timerRef.current); // Stop the timer
    timerRef.current = null; // Clear the timer ID
    setCount(0); // Reset count to 0
    setIsRunning(false); // Update state to indicate that the timer is stopped
  };

  useEffect(() => {
    console.log("Compounted Mounted");
    // Cleanup function to clear the timer on component unmount
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="container">
      <div>
        <h1>Timer: {count}</h1>
        <div className="btns">
          <button onClick={startTimer} disabled={isRunning}>
            Start
          </button>
          <button onClick={pauseTimer} disabled={!isRunning}>
            Pause
          </button>
          <button onClick={stopTimer}>Stop</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
