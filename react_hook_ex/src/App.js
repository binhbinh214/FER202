import React from "react";
import Counter from "./components/Counter";
import NameAndAge from "./components/NameAndAge";
import ProductList from "./components/ProductList";
import SearchFilter from "./components/SearchFilter";

function App() {
  return (
    <div>
      <h1>React useState Examples</h1>

      <h2>Example 1: Counter</h2>
      <Counter />

      <hr />

      <h2>Example 2: Name and Age</h2>
      <NameAndAge />

      <hr />

      <h2>Example 3: Product List</h2>
      <ProductList />

      <hr />

      <h2>Example 4: Search Filter</h2>
      <SearchFilter />
    </div>
  );
}

export default App;
