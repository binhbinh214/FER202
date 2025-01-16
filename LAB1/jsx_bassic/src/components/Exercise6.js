import React from "react";

  function Exercise6() {
    const people = [
      { name: "Alice", age: 26, occupation: "Engineer" },
      { name: "Bob", age: 15, occupation: "Student" },
      { name: "Charlie", age: 22, occupation: "Developer" },
    ];
  
    const allTeenagers = people.every((person) => person.age >= 13 && person.age <= 19);
  
    return (
      <div>
        <h2>Exercise 6: Are All Teenagers?</h2>
        <p>{allTeenagers ? "Yes, all are teenagers." : "No, not all are teenagers."}</p>
      </div>
    );
  }
  
  export default Exercise6;
  