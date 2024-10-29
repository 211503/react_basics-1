import React from "react";
import WithCounter from "./WithCounter";

const ClickCounter = ({ count, incrementCount, name }) => {
  return (
    <>
      <div className="counter">
        <button onClick={incrementCount}>
          {name} {count} times
        </button>
      </div>
    </>
  );
};

// Wrap the ClickCounter component with the HOC
export default WithCounter(ClickCounter, 5);
