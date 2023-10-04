import React, { useState } from 'react';
import './about.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Введите текст"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button
          onClick={() => {
            if (taskInput.trim() !== '') {
              setTasks([...tasks, taskInput]);
              setTaskInput('');
            }
          }}
        >
          +
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;