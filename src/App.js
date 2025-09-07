import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Deploy to AWS', completed: false },
    { id: 3, text: 'Set up CloudFront', completed: false }
  ]);

  const addTask = () => {
    if (name.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: name,
        completed: false
      }]);
      setName('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 My React AWS Demo NEW 1234</h1>
        <p>Built with React • Deployed on S3 • Delivered by CloudFront</p>
        
        {/* Counter Component */}
        <div className="counter-section">
          <h2>Interactive Counter</h2>
          <div className="counter">
            <button onClick={() => setCount(count - 1)}>−</button>
            <span className="count">{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        </div>

        {/* Todo List Component */}
        <div className="todo-section">
          <h2>Task Manager</h2>
          <div className="add-task">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Add a new task..."
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
            />
            <button onClick={addTask}>Add Task</button>
          </div>
          
          <ul className="task-list">
            {tasks.map(task => (
              <li key={task.id} className={task.completed ? 'completed' : ''}>
                <span onClick={() => toggleTask(task.id)}>
                  {task.completed ? '✅' : '⭕'} {task.text}
                </span>
                <button 
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Info Cards */}
        <div className="info-cards">
          <div className="card">
            <h3>⚛️ React Features</h3>
            <ul>
              <li>useState Hook</li>
              <li>Event Handling</li>
              <li>Conditional Rendering</li>
              <li>Component State</li>
            </ul>
          </div>
          
          <div className="card">
            <h3>☁️ AWS Services</h3>
            <ul>
              <li>S3 Static Hosting</li>
              <li>CloudFront CDN</li>
              <li>Global Distribution</li>
              <li>HTTPS Security</li>
            </ul>
          </div>
        </div>

        <footer className="footer">
          <p>
            Created for learning React and AWS deployment 🎓
          </p>
        </footer>
      </header>
    </div>
  );
}

export default App;
