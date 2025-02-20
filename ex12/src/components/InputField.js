import React, { useState } from "react";
import "../style/InputField.css";
function InputField() {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="input-field-container">
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        className="input-field"
      />
      <h2>Input text: {inputText}</h2>
    </div>
  );
}

export default InputField;
