// ParentComponent.js
import React, { useRef } from "react";
import CustomInput from "./CustomInput";

const ParentComponent = () => {
  const inputRef = useRef(null); // Create a ref to the input

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input when the button is clicked
    }
  };

  return (
    <>
      <div className="container">
        <h1>Ref Forwarding Example</h1>
        <CustomInput ref={inputRef} label="Enter your name:" />
        <div className="btns">
          <button onClick={handleFocus}>Focus Input</button>
        </div>
      </div>
    </>
  );
};

export default ParentComponent;
