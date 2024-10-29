import React from "react";
import WithCounter from "./WithCounter";

const HoverCounter = ({ count, incrementCount, name }) => {
  return (
    <>
      <div className="counter">
        <h2 onMouseOver={incrementCount}>
          {name} {count} times
        </h2>
      </div>
    </>
  );
};

// Wrap the HoverCounter component with the HOC
export default WithCounter(HoverCounter, 10);
