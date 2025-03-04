import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import Counter from "./components/Counter";
import ChangeNameAge from "./components/ChangeNameAge";
import ItemList from "./components/ItemList";
import QuestionBank from "./components/QuestionBank";
import "./App.css";

function App() {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Exercise 15: useReducer </h1>
      <Tabs defaultActiveKey="exercise1" id="exercise-tabs" className="mb-3">
        <Tab eventKey="exercise1" title="Exercise 1: Counter">
          <Counter />
        </Tab>
        <Tab eventKey="exercise2" title="Exercise 2: Change Name & Age">
          <ChangeNameAge />
        </Tab>
        <Tab eventKey="exercise3-4" title="Exercise 3 & 4: Item List">
          <ItemList />
        </Tab>
        <Tab eventKey="exercise5-6" title="Exercise 5 & 6: Question Bank">
          <QuestionBank />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;
