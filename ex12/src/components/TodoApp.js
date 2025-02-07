import React, { useState } from "react";
import "../style/TodoApp.css";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <div className="header">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Please input a task"
          className="input"
        />
        <button onClick={handleAddTask} className="addButton">
          Add Todo
        </button>
      </div>

      <h2 className="title">Todo List</h2>

      <ul className="list">
        {tasks.map((task, index) => (
          <li key={index} className="listItem">
            <span>{task}</span>
            <button
              onClick={() => handleDeleteTask(index)}
              className="deleteButton"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
