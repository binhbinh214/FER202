import React from "react";

function Exercise5() {
    const people = [
      { name: "Alice", age: 26, occupation: "Engineer" },
      { name: "Bob", age: 15, occupation: "Student" },
      { name: "Charlie", age: 22, occupation: "Developer" },
    ];
  
    const firstTeenager = people.find((person) => person.age >= 13 && person.age <= 19);
  
    return (
      <div>
        <h2>Exercise 5: First Teenager</h2>
        {firstTeenager ? (
          <p>
            Name: {firstTeenager.name}, Age: {firstTeenager.age}, Occupation: {firstTeenager.occupation}
          </p>
        ) : (
          <p>No teenagers found.</p>
        )}
      </div>
    );
  }
  
  export default Exercise5;
  