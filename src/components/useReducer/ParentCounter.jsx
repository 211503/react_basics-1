import React, { useState } from "react";
import Counter from "./Counter";

const ParentCounter = () => {
  const [initialCount, setInitialCount] = useState(0);

  const handleInputChange = (event) => {
    setInitialCount(parseInt(event.target.value));
  };

  return (
    <div className="reducer-container">
      <h1>Counter App with useReducer and useState</h1>
      <label>
        Set Initial Count:
        <input
          type="number"
          value={initialCount}
          onChange={handleInputChange}
        />
      </label>
      <Counter initialCount={initialCount} />
    </div>
  );
};

export default ParentCounter;
