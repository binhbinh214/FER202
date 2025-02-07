import React, { useState } from "react";

function ToggleComponent() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={toggleVisibility}
        style={{ padding: "10px 20px", fontSize: "16px", marginBottom: "20px" }}
      >
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <h2>Toggle me!</h2>}
    </div>
  );
}

export default ToggleComponent;
