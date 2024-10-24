import React, { useState, useEffect } from "react";

const UseEffectCounter = ({ initialValue, incrementValue }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + incrementValue);
  };

  useEffect(() => {
    console.log("Always");
  });

  useEffect(() => {
    console.log("Counter Component Mounted");

    return () => {
      console.log("Counter Component is unMounted");
    };
  }, []);

  useEffect(() => {
    console.log("Counter Component prop is updated");
  }, [initialValue, incrementValue]);

  useEffect(() => {
    console.log("Counter Component state is updated");
  }, [count]);

  return (
    <>
      <div className="counter">
        <p>Count: {count}</p>
        <button onClick={increment}>Increment Count</button>
      </div>
    </>
  );
};

export default UseEffectCounter;
