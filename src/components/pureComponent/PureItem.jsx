import React from "react";

function PureItem({ items }) {
  console.log("Items Component Rendered");
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default React.memo(PureItem);
