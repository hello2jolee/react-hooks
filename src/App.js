import React, { useState } from "react";
import useInput from './hooks/useInput'

function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  const maxLen = (value) => value.length < 10;
  const name = useInput("Ms.", maxLen);

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
