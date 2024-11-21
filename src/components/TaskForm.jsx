import React, { useState } from 'react'
import DatePicker from 'react-datepicker';

const TaskForm = ({ addTask }) => {
    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("low");
    const [dueDate, setDueDate] = useState(new Date());

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addTask({
                id: Date.now(),
                title,
                description,
                priority,
                dueDate,
            });
            setTitle("");
            setDescription("");
        }
    };

  return (
    <form className='task-form' onSubmit={handleSubmit}>
        <input
        type='text'
        placeholder='Task Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        />
        <textarea
        placeholder='Task Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <DatePicker selected={dueDate} onChange={(date) => setDueDate(date)} />
            <button type='submit'>Add Task</button>
    </form>
  );
};

export default TaskForm;