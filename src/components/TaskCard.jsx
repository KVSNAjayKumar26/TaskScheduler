import React from 'react'
import { motion } from 'framer-motion'
const TaskCard = ({ task, deleteTask }) => {
    const priorityColors = {
        low: "green",
        medium: "orange",
        high: "red",
    }
  return (
    <motion.div
    className='task-card'
    style={{ borderColor: priorityColors[task.priority] }}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    >
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Due: {task.dueDate.toLocaleDateString()}</p>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
    </motion.div>
  );
}

export default TaskCard;