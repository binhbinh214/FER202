import React, { useState } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import EventHandlingDemo from "./components/EventHandlingDemo";
import MyAlert from "./components/MyAlert";
import MyDropdown from "./components/MyDropdown";
import MyModal from "./components/MyModal";
import MyRadioButton from "./components/MyRadioButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [key, setKey] = useState("counter");

  return (
    <Container className="mt-5">
      <h1 className="text-center">Demo Event Handling in React</h1>
      <Tabs
        id="event-handling-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="counter" title="Counter">
          <EventHandlingDemo />
        </Tab>
        <Tab eventKey="alert" title="Alert">
          <MyAlert />
        </Tab>
        <Tab eventKey="dropdown" title="Dropdown">
          <MyDropdown />
        </Tab>
        <Tab eventKey="modal" title="Modal">
          <MyModal />
        </Tab>
        <Tab eventKey="radio" title="Radio Button">
          <MyRadioButton />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;
