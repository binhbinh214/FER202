function App() {
  const people = [
    { id: 1, firstName: "John", lastName: "Doe", age: 28 },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 34 },
    { id: 3, firstName: "Alice", lastName: "Johnson", age: 22 },
    { id: 4, firstName: "Bob", lastName: "Brown", age: 40 },
    { id: 5, firstName: "Emma", lastName: "Davis", age: 30 }
  ];

  
  return (
    <div>
      <h1>Danh sách Person:</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.firstName} {person.lastName} - Tuổi: {person.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
