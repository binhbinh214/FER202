import React from "react";

function Exercise1() {
    const names = ["Alice", "Bob", "Charlie"];
    return (
      <div>
        <h2>Exercise 1: List of Names</h2>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Exercise1;
  