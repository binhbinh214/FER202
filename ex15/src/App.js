import React from "react";
import Counter from "./components/Counter";
import { QuizProvider } from "./context/QuizContext";
import QuestionBank from "./components/QuestionBank";
import "./App.css";
const App = () => {
  return (
    <QuizProvider>
      <div>
        <Counter />
        <h1>Quiz App</h1>
        <QuestionBank />
      </div>
    </QuizProvider>
  );
};

export default App;
