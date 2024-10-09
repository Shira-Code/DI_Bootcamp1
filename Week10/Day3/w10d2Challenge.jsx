// Daily Challenge: Productivity Tracker
// Last Updated: October 7th, 2024

// What You will learn :
// Redux Performance Optimizations
// Enhancing Redux Performance


// Instructions:
// You’re tasked with building a productivity tracker that allows users to log their daily tasks and track their progress.

// Redux Setup:

// Set up a Redux store with reducers to manage tasks and categories.
// Define initial states for tasks and categories.
// Actions and Reducers:

// Implement actions to add, edit, delete tasks, add, edit, delete categories, and update task progress.
// Create reducers to handle these actions and update the state accordingly.
// Selectors Creation:

// Use createSelector to build selectors:
// selectTasksByCategory: Returns tasks belonging to a specific category.
// selectCompletedTasks: Computes the count of completed tasks.
// selectCategoryById: Returns category details based on ID.
// Functional Components - TaskList and CategorySelector:

// Build a TaskList component using useSelector to fetch and display tasks based on the selected category.
// Implement a CategorySelector component that utilizes useSelector to fetch categories and enable selection.
// Task Editing and Completion:

// Utilize useCallback to handle task editing and completion efficiently.
// Implement UI elements to edit tasks and mark them as completed.

//app.jsx
// import React, { useEffect } from 'react';
// import { Provider, useSelector, useDispatch } from 'react-redux';
// import { store } from './app/store'; 
// import { fetchCategories, setSelectedCategoryId } from './features/categories/categoriesSlice'; 
// import Category from './components/CategorySelector'; 

// const App = () => {
//   const dispatch = useDispatch();
//   const categories = useSelector((state) => state.categories.items);

//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   return (
//     <Provider store={store}>
//       <div>
//         <h1>Category List</h1>
//         {categories.map((category) => (
//           <Category key={category.id} category={category} />
//         ))}
//       </div>
//     </Provider>
//   );
// };

// export default App;

//main.jsx
// src/main.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

//store.js
// src/app/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import categoriesReducer from '../features/categories/categoriesSlice';
// import tasksReducer from '../features/tasks/tasksSlice';

// export const store = configureStore({
//   reducer: {
//     categories: categoriesReducer,
//     tasks: tasksReducer,
//   },
// });

// tasksSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   tasks: [
//     { id: 1, title: 'Complete Project Report', categoryId: 1, completed: false },
//     { id: 2, title: 'Buy Groceries', categoryId: 2, completed: true },
//   ],
// };

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState,
//   reducers: {
//     addTask: (state, action) => {
//       state.tasks.push(action.payload);
//     },
//     editTask: (state, action) => {
//       const task = state.tasks.find((task) => task.id === action.payload.id);
//       if (task) {
//         task.title = action.payload.title;
//         task.categoryId = action.payload.categoryId;
//       }
//     },
//     deleteTask: (state, action) => {
//       state.tasks = state.tasks.filter((task) => task.id !== action.payload);
//     },
//     toggleTaskCompletion: (state, action) => {
//       const task = state.tasks.find((task) => task.id === action.payload);
//       if (task) {
//         task.completed = !task.completed;
//       }
//     },
//   },
// });

// export const { addTask, editTask, deleteTask, toggleTaskCompletion } = tasksSlice.actions;
// export default tasksSlice.reducer;

// tasksSelectors.js
// import { createSelector } from '@reduxjs/toolkit';

// export const selectTasks = (state) => state.tasks.tasks;

// export const selectTasksByCategory = (categoryId) =>
//   createSelector(
//     [selectTasks],
//     (tasks) => tasks.filter((task) => task.categoryId === categoryId)
//   );

// export const selectCompletedTasks = createSelector(
//   [selectTasks],
//   (tasks) => tasks.filter((task) => task.completed)
// );

//categoriesSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchCategories = createAsyncThunk(
//   'categories/fetchCategories',
//   async () => {
//     const response = await fetch('/api/categories');
//     return response.json();
//   }
// );

// const categoriesSlice = createSlice({
//   name: 'categories',
//   initialState: {
//     items: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     addCategory: (state, action) => {
//       state.items.push(action.payload);
//     },
//     setSelectedCategoryId: (state, action) => {
//       state.selectedCategoryId = action.payload;
//     },
//     deleteCategory: (state, action) => {
      
//       state.items = state.items.filter(category => category.id !== action.payload);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCategories.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchCategories.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchCategories.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { addCategory, setSelectedCategoryId, deleteCategory } = categoriesSlice.actions;
// export default categoriesSlice.reducer;

//TaskList.jsx
// import { createSlice, createSelector } from '@reduxjs/toolkit';

// const initialState = {
//   tasks: [],
// };

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState,
//   reducers: {
//     addTask: (state, action) => {
//       const newTask = {
//         id: Date.now(), 
//         name: action.payload.name,
//         completed: false,
//         categoryId: action.payload.categoryId,
//       };
//       state.tasks.push(newTask);
//     },
//     editTask: (state, action) => {
//       const { id, name, categoryId } = action.payload;
//       const existingTask = state.tasks.find(task => task.id === id);
//       if (existingTask) {
//         existingTask.name = name;
//         existingTask.categoryId = categoryId;
//       }
//     },
//     deleteTask: (state, action) => {
//       const idToDelete = action.payload;
//       state.tasks = state.tasks.filter(task => task.id !== idToDelete);
//     },
//     toggleTaskCompletion: (state, action) => {
//       const taskToToggle = state.tasks.find(task => task.id === action.payload);
//       if (taskToToggle) {
//         taskToToggle.completed = !taskToToggle.completed;
//       }
//     },
//   },
// });

// export const { addTask, editTask, deleteTask, toggleTaskCompletion } = tasksSlice.actions;

// export const selectTasks = (state) => state.tasks.tasks;

// export const selectTasksByCategory = createSelector(
//   [selectTasks, (state, categoryId) => categoryId],
//   (tasks, categoryId) => tasks.filter(task => task.categoryId === categoryId)
// );

// export default tasksSlice.reducer;

//AddTask.jsx
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTask } from '../features/tasks/tasksSlice';

// const AddTask = ({ selectedCategoryId }) => { 
//   const dispatch = useDispatch();
//   const categories = useSelector(state => state.categories.categories);
//   const [taskName, setTaskName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (taskName.trim() !== '') {
//       dispatch(addTask({ name: taskName, categoryId: selectedCategoryId }));
//       setTaskName(''); 
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input 
//         type="text" 
//         value={taskName} 
//         onChange={(e) => setTaskName(e.target.value)} 
//         placeholder="Enter task name" 
//       />
//       <select value={selectedCategoryId} onChange={(e) => setTaskName(e.target.value)}>
//         {categories.map(category => (
//           <option key={category.id} value={category.id}>{category.name}</option>
//         ))}
//       </select>
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default AddTask;

//CategorySelector.jsx
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectCategories, addCategory, deleteCategory, editCategory } from '../features/categories/categoriesSlice';

// const CategorySelector = ({ selectedCategoryId, setSelectedCategoryId }) => {
//   const categories = useSelector(selectCategories);
//   const dispatch = useDispatch();

//   const handleCategoryChange = (event) => {
//     setSelectedCategoryId(Number(event.target.value));
//   };

//   const handleAddCategory = () => {
//     const newCategory = { id: Date.now(), name: 'New Category' }; 
//     dispatch(addCategory(newCategory));
//   };

//   const handleDeleteCategory = () => {
//     dispatch(deleteCategory(selectedCategoryId));
//   };

//   const handleEditCategory = (id, newName) => {
//     dispatch(editCategory({ id, name: newName }));
//   };

//   return (
//     <div>
//       <h2>Select Category</h2>
//       <select value={selectedCategoryId} onChange={handleCategoryChange}>
//         {categories.map((category) => (
//           <option key={category.id} value={category.id}>
//             {category.name}
//           </option>
//         ))}
//       </select>
//       <button onClick={handleAddCategory}>Add Category</button>
//       <button onClick={handleDeleteCategory}>Delete Selected Category</button>
//       <button onClick={() => handleEditCategory(selectedCategoryId, 'Updated Category Name')}>
//         Edit Selected Category
//       </button>
//     </div>
//   );
// };

// export default CategorySelector;

//categoriesSelectors.js
import { createSelector } from '@reduxjs/toolkit';

export const selectCategories = (state) => state.categories.categories;

export const selectCategoryById = (categoryId) =>
  createSelector(
    [selectCategories],
    (categories) => categories.find((cat) => cat.id === categoryId)
  );









