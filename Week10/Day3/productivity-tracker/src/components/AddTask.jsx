import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';

const AddTask = ({ selectedCategoryId }) => { // Accept selectedCategoryId as prop
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      dispatch(addTask({ name: taskName, categoryId: selectedCategoryId }));
      setTaskName(''); // Clear the input field after adding
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
        placeholder="Enter task name" 
      />
      <select value={selectedCategoryId} onChange={(e) => setTaskName(e.target.value)}>
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
