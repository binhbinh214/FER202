import React from "react";
import ValidatedInput from "./components/ValidatedInput";
import FormWithValidation from "./components/FormWithValidation";
import ComplexForm from "./components/ComplexForm";
import "./App.css";
function App() {
  return (
    <div className="App">
      <h2>Exercise 4: Validated Input</h2>
      <ValidatedInput />
      <h2>Exercise 5: Email and Password Validation</h2>
      <FormWithValidation />
      <h2>Exercise 6: Complex Form Validation</h2>
      <ComplexForm />
    </div>
  );
}

export default App;
