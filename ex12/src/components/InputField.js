import React, { useState } from "react";

function InputField() {
  // Declare state to hold the input text
  const [inputText, setInputText] = useState("");

  // Handle input change
  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          marginBottom: "20px",
        }}
      />
      <h2>Input text: {inputText}</h2>
    </div>
  );
}

export default InputField;
