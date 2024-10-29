import React, { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);

  const handleFocus = (event) => {
    event.preventDefault();
    inputRef.current.focus(); // Directly access the DOM input and focus it
  };

  return (
    <>
      <form action="" className="profile-form">
        <input type="text" ref={inputRef} placeholder="Enter your name" />
        <button onClick={handleFocus}>Focus the Input</button>
      </form>
    </>
  );
};

export default InputFocus;
