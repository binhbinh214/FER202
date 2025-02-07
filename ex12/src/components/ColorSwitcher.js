import React, { useState } from "react";

function ColorSwitcher() {
  const [color, setColor] = useState("");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <select
        onChange={handleColorChange}
        value={color}
        style={{
          padding: "10px",
          fontSize: "16px",
          marginBottom: "20px",
        }}
      >
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>

      {/* changes color */}
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color || "transparent",
          transition: "background-color 0.3s ease",
        }}
      ></div>
    </div>
  );
}

export default ColorSwitcher;
