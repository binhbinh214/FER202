import React from 'react';
import UserPosts from './Components/UserPosts';
import CountdownTimer from './Components/CountdownTimer';
import WindowSize from './Components/WindowSize';
import ValidatedInput from './Components/ValidatedInput';

function App() {
  return (
    <div className="App">
      <h1>React Hook Exercises</h1>

      <UserPosts userId={1} />

      <CountdownTimer initialValue={20} />

      <WindowSize />

      <ValidatedInput
        validationFunction={(value) => value.length > 3}
        errorMessage="Input must be longer than 3 characters"
      />
    </div>
  );
}

export default App;
