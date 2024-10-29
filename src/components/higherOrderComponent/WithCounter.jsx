import React, { useState } from "react";

// Higher-Order Component
const withCounter = (WrappedComponent, incrementNumber) => {
  return (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prevCount) => prevCount + incrementNumber);
    };

    console.log("HOC", props.name); // Log the name prop

    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        {...props} // Spread the remaining props
      />
    );
  };
};

export default withCounter;
