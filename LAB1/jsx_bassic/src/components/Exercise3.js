import React from "react";

function Exercise3() {
    const people = [
      { name: "Alice", age: 26, occupation: "Engineer" },
      { name: "Bob", age: 15, occupation: "Designer" },
    ];
    return (
      <div>
        <h2>Exercise 3: List of People</h2>
        {people.map((person, index) => (
          <div key={index}>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <p>Occupation: {person.occupation}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Exercise3;
  