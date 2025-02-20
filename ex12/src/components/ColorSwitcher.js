import React, { useState } from "react";
import "../style/ColorSwitcher.css"; // Import CSS

function ColorSwitcher() {
  const [color, setColor] = useState("");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="container">
      <select onChange={handleColorChange} value={color} className="select">
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>

      {/* changes color */}
      <div
        className="colorBox"
        style={{
          backgroundColor: color || "transparent",
        }}
      ></div>
    </div>
  );
}

export default ColorSwitcher;
