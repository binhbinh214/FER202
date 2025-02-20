import React, { useState } from "react";
import "../style/ToggleComponent.css";
function ToggleComponent() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="toggle-container">
      <button onClick={toggleVisibility} className="toggle-button">
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <h2 className="toggle-text">Toggle me!</h2>}
    </div>
  );
}

export default ToggleComponent;
