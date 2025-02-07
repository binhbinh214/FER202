import React, { useState } from "react";

function Counter() {
  // Khởi tạo state count là 0
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={incrementCount}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Increment
      </button>
      <h2 style={{ marginTop: "20px" }}>Count: {count}</h2>
    </div>
  );
}

export default Counter;
