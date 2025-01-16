import React from "react";
import '../styles/App.css'; // Đường dẫn tương đối tới CSS

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

const App = () => {
  const person = new Person("John", 25);

  return (
    <div>
      <HelloWorld />
      <p>{person.sayHello()}</p>
    </div>
  );
};

export default App;
