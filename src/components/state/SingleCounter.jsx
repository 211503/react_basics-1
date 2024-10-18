import React, { useState } from "react";

function SingleCounter({ initialvalue }) {
  const [count, setCount] = useState(initialvalue);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) increment();
  };

  return (
    <>
      <div className="counter">
        <h1>Count: {count}</h1>
        <button onClick={incrementFive}>Increment</button>
      </div>
    </>
  );
}

export default SingleCounter;
