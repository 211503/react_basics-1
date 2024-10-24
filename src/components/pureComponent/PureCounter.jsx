import React from "react";

// Pure functional component wrapped in React.memo
const PureCounter = ({ count }) => {
  console.log("Counter component rendered!");
  return (
    <>
      <div className="counter">
        <h2>Count: {count}</h2>
      </div>
    </>
  );
};

export default React.memo(PureCounter);
