import React, { useState } from 'react'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles/App.css';
const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask: task)));
  };

  return (
    <div className='app-container'>
      <h1>Task Scheduler</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
}

export default App;