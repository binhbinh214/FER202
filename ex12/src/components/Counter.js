import React, { useState } from "react";
import "../style/Counter.css";
function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <button onClick={incrementCount} className="increment-button">
        Increment
      </button>
      <h2 className="count-display">Count: {count}</h2>
    </div>
  );
}

export default Counter;
