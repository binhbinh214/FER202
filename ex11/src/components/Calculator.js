import React, { useState } from "react";
import "../style/Calculator.css";

function Calculator() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  const handleCompute = () => {
    let result;
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Invalid input");
      return;
    }

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          setResult("Cannot divide by 0");
          return;
        }
        result = num1 / num2;
        break;
      default:
        result = 0;
    }
    setResult(result);
  };

  return (
    <div className="container-calculator">
      <div className="form">
        <div>
          <label>First:</label>
          <input
            type="number"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            className="input"
          />
        </div>
        <div>
          <label>Second:</label>
          <input
            type="number"
            value={second}
            onChange={(e) => setSecond(e.target.value)}
            className="input"
          />
        </div>
        <div>
          <label>Operator:</label>
          <select
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
            className="select"
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </div>
        <div>
          <button onClick={handleCompute} className="button">
            Compute
          </button>
        </div>
        <div>
          <label>Result:</label>
          <input
            type="text"
            value={result !== null ? result : ""}
            readOnly
            className="input"
          />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
