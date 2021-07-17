import React, { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    setValue(event.target);
  };
  return { value, onChange };
};

function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  const name = useInput("Ms.");

  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <input placeholder="Name" {...name} />
      <h2>Start editing to see some magic happen!</h2>
      <button type="button" onClick={incrementItem}>
        Increment
      </button>
      <button type="button" onClick={decrementItem}>
        Decrement
      </button>
    </div>
  );
}

export default App;
