import React from "react";

function Exercise2() {
    const person = { name: "Alice", age: 26, occupation: "Engineer" };
    return (
      <div>
        <h2>Exercise 2: Person Details</h2>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <p>Occupation: {person.occupation}</p>
      </div>
    );
  }
  
  export default Exercise2;
  