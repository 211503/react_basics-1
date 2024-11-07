import React, { useReducer } from "react";

// Reducer function to handle different actions
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: action.payload };
    default:
      return state;
  }
};

const Counter = ({ initialCount }) => {
  const [state, dispatch] = useReducer(counterReducer, { count: initialCount });

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button
        onClick={() => dispatch({ type: "RESET", payload: initialCount })}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
