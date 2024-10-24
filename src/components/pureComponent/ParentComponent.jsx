import React, { useState } from "react";
import PureCounter from "./PureCounter";
import PureItem from "./PureItem";

const ParentCounter = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [items, setItems] = useState([1, 2, 3]);

  const addItem = () => {
    // Create a new array reference with updated items
    setItems([...items, items.length + 1]);
  };

  return (
    <>
      <div className="container">
        <h1>React.memo Example</h1>

        {/* Only re-renders when `count` changes */}
        <PureCounter count={count} />

        <form
          action=""
          className="profile-form"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          {/* Changing this input won't re-render Counter */}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something"
          />

          <button type="submit" onClick={() => setCount(count + 1)}>
            Increment Count
          </button>

          <button type="submit" onClick={addItem}>
            Add Item
          </button>
        </form>

        <PureItem items={items} />
      </div>
    </>
  );
};

export default ParentCounter;
