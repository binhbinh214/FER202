import React from "react";
import UserPosts from "./Components/UserPosts";
import CountdownTimer from "./Components/CountdownTimer";
import WindowSize from "./Components/WindowSize";
import ValidatedInput from "./Components/ValidatedInput";

function App() {
  return (
    <div className="App">
      <h1>React Hook Exercises</h1>
      <h2>Eg1: Data Fetching</h2>
      <UserPosts userId={1} />
      <hr />
      <h2>Eg2: Countdown Timer</h2>
      <CountdownTimer initialValue={20} />
      <h2>Eg3: Window size</h2>
      <WindowSize />
      <h2>Eg4: Validate input</h2>
      <ValidatedInput
        validationFunction={(value) => value.length > 3}
        errorMessage="Input must be longer than 3 characters"
      />
    </div>
  );
}

export default App;
