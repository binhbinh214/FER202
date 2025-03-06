import React, { useState } from "react";
import { Button } from "react-bootstrap";

function EventHandlingDemo() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="mb-4">
      <h3>Ví dụ 1: Counter</h3>
      <p>Count: {count}</p>
      <Button onClick={handleButtonClick}>Increase Count</Button>
    </div>
  );
}

export default EventHandlingDemo;
