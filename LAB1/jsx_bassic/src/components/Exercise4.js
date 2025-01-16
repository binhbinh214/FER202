import React from "react";

function Exercise4() {
    const people = [
      { name: "Alice", age: 26, occupation: "Engineer" },
      { name: "Bob", age: 15, occupation: "Student" },
      { name: "Charlie", age: 22, occupation: "Developer" },
    ];
  
    return (
      <div>
        <h2>Exercise 4: Table of People</h2>
        <table border="1" style={{ width: "50%", margin: "auto", textAlign: "center" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Occupation</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.occupation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Exercise4;
  