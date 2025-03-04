import React, { useReducer } from "react";
import { Button, Card } from "react-bootstrap";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <Card className="p-4">
      <div className="counter-container">
        <h3>Counter: {state.count}</h3>
        <Button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="me-2"
        >
          +
        </Button>
        <Button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="me-2"
        >
          -
        </Button>
        <Button onClick={() => dispatch({ type: "RESET" })}>Reset</Button>
      </div>
    </Card>
  );
}

export default Counter;
