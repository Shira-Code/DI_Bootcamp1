import { createSlice, createSelector } from '@reduxjs/toolkit';

// Initial state for tasks
const initialState = {
  tasks: [],
};

// Create the tasks slice
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(), // Unique ID for each task
        name: action.payload.name,
        completed: false,
        categoryId: action.payload.categoryId,
      };
      state.tasks.push(newTask);
    },
    editTask: (state, action) => {
      const { id, name, categoryId } = action.payload;
      const existingTask = state.tasks.find(task => task.id === id);
      if (existingTask) {
        existingTask.name = name;
        existingTask.categoryId = categoryId;
      }
    },
    deleteTask: (state, action) => {
      const idToDelete = action.payload;
      state.tasks = state.tasks.filter(task => task.id !== idToDelete);
    },
    toggleTaskCompletion: (state, action) => {
      const taskToToggle = state.tasks.find(task => task.id === action.payload);
      if (taskToToggle) {
        taskToToggle.completed = !taskToToggle.completed;
      }
    },
  },
});

// Export actions
export const { addTask, editTask, deleteTask, toggleTaskCompletion } = tasksSlice.actions;

// Selectors
export const selectTasks = (state) => state.tasks.tasks;

// Memoized selector to filter tasks by category
export const selectTasksByCategory = createSelector(
  [selectTasks, (state, categoryId) => categoryId],
  (tasks, categoryId) => tasks.filter(task => task.categoryId === categoryId)
);

// Export reducer
export default tasksSlice.reducer;
