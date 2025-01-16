import React from "react";

function Exercise7() {
  const people = [
    { name: "Alice", age: 26, occupation: "Engineer" },
    { name: "Bob", age: 15, occupation: "Student" },
    { name: "Charlie", age: 22, occupation: "Developer" },
    { name: "David", age: 30, occupation: "Engineer" },
    { name: "Eve", age: 20, occupation: "Student" },
  ];

  const sortedPeople = people.sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    if (a.age < b.age) return -1;
    if (a.age > b.age) return 1;
    return 0;
  });

  return (
    <div>
      <h2>Exercise 7: Sorted by Occupation and Age</h2>
      <table border="1" style={{ width: "50%", margin: "auto", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {sortedPeople.map((person, index) => (
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

export default Exercise7;
