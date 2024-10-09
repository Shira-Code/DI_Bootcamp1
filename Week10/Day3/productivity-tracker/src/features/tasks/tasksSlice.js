// src/features/tasks/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, title: 'Complete Project Report', categoryId: 1, completed: false },
    { id: 2, title: 'Buy Groceries', categoryId: 2, completed: true },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.title = action.payload.title;
        task.categoryId = action.payload.categoryId;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTaskCompletion } = tasksSlice.actions;
export default tasksSlice.reducer;
