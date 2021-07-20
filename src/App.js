import React, { useState } from "react";
import { useInput } from "./hooks/useInput";
import { useTabs } from "./hooks/useTabs";

const content = [
  { tab: "Section 1", content: "I'm the content of the Section 1" },
  { tab: "Section 2", content: "I'm the content of the Section 2" },
];

function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  const maxLen = (value) => value.length < 10;
  const name = useInput("Ms.", maxLen);

  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className="App">
      {content.map((section, index) => (
        <button type="button" key={index} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
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
