// CustomInput.js
import React, { forwardRef } from "react";

// Create a custom input component that forwards refs
const CustomInput = forwardRef((props, ref) => {
  return (
    <div className="profile-form">
      <h2>{props.label}</h2>
      <input
        type="text"
        ref={ref} // Attach the forwarded ref to the input element
        {...props} // Spread any other props (like onChange, value, etc.)
      />
    </div>
  );
});

export default CustomInput;
