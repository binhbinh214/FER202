import React from "react";

function Exercise9() {
  const people = [
    { name: "Alice", age: 26, occupation: "Engineer" },
    { name: "Bob", age: 15, occupation: "Student" },
    { name: "Charlie", age: 22, occupation: "Developer" },
    { name: "David", age: 30, occupation: "Engineer" },
    { name: "Eve", age: 20, occupation: "Student" },
  ];

  // Oldeast
  const oldestPerson = people.reduce((oldest, person) => {
    return (person.age > oldest.age) ? person : oldest;
  }, people[0]);

  // Youngest
  const youngestPerson = people.reduce((youngest, person) => {
    return (person.age < youngest.age) ? person : youngest;
  }, people[0]);

  return (
    <div>
      <h2>Exercise 9: Oldest and Youngest Person</h2>
      <p>Oldest Person: {oldestPerson.name}, Age: {oldestPerson.age}, Occupation: {oldestPerson.occupation}</p>
      <p>Youngest Person: {youngestPerson.name}, Age: {youngestPerson.age}, Occupation: {youngestPerson.occupation}</p>
    </div>
  );
}

export default Exercise9;
