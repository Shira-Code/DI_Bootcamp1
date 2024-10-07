// 🌟 Exercise 1: Basic Todo List with React-Redux and Redux Toolkit


// Instructions
// Step 1: Create a Redux Toolkit Slice
// Create a Todo Slice:
// Use createSlice from Redux Toolkit to define a slice for managing todos.
// Define initial state with an array of todos.
// Include reducers for:
// Adding a todo (addTodo).
// Toggling a todo’s completion status (toggleTodo).
// Removing a todo (removeTodo).

// Step 2: Implement Redux Store
// Initialize Store:
// Set up the Redux store using configureStore from Redux Toolkit.
// Include the Todo Slice created in the store’s reducer.


// Step 3: Create React Components
// TodoList Component:

// Create a component to display the list of todos.
// Use useSelector hook to access todos from the Redux store state.
// Map through todos to render each todo item.

// AddTodo Component:

// Implement a component to add new todos.
// Use useDispatch hook to dispatch the addTodo action to the Redux store.

// TodoItem Component:

// Build a component to represent individual todo items.
// Include functionality to toggle a todo’s completion status and remove a todo.
// Dispatch actions (toggleTodo, removeTodo) using useDispatch.


// Step 4: Connect Components to Redux Store
// Use useSelector and useDispatch:
// Within each React component, use useSelector to access state from the Redux store.
// Dispatch actions using useDispatch to interact with the store.


// Step 5: Test Functionality
// Add Todos:

// Test adding new todos using the AddTodo component.
// Ensure new todos are correctly dispatched and added to the Redux store.

// Complete Todos:

// Test toggling the completion status of todos.
// Verify that the completion status is updated in the Redux store.

// Remove Todos:

// Test removing todos using the TodoItem component.
// Confirm that todos are correctly removed from the Redux store.

// Overall Functionality:

// Test the overall functionality of the Todo List by adding, completing, and removing todos to ensure smooth interaction between React components and the Redux store.
// By following these steps, you’ll create a basic Todo List application using React-Redux and Redux Toolkit, ensuring proper state management and interaction between React components and the Redux store.

//main.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

//app.jsx
// import React from 'react';
// import AddTodo from './features/todos/AddTodo';
// import TodoList from './features/todos/TodoList';

// function App() {
//   return (
//     <div className="App">
//       <h1>Todo List</h1>
//       <AddTodo />
//       <TodoList />
//     </div>
//   );
// }

// export default App;


//store.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

//todoSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   todos: []
// };

// const todoSlice = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       state.todos.push({ id: Date.now(), text: action.payload, completed: false });
//     },
//     toggleTodo: (state, action) => {
//       const todo = state.todos.find(todo => todo.id === action.payload);
//       if (todo) {
//         todo.completed = !todo.completed;
//       }
//     },
//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter(todo => todo.id !== action.payload);
//     }
//   }
// });

// export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
// export default todoSlice.reducer;

//AddTodo.jsx
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTodo } from './todoSlice';

// const AddTodo = () => {
//   const [text, setText] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (text.trim()) {
//       dispatch(addTodo(text));
//       setText('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Add a new todo"
//       />
//       <button type="submit">Add Todo</button>
//     </form>
//   );
// };

// export default AddTodo;

//TodoItem.jsx
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { toggleTodo, removeTodo } from './todoSlice';

// const TodoItem = ({ todo }) => {
//   const dispatch = useDispatch();

//   return (
//     <li>
//       <span
//         style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
//         onClick={() => dispatch(toggleTodo(todo.id))}
//       >
//         {todo.text}
//       </span>
//       <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
//     </li>
//   );
// };

// export default TodoItem;

//TodoList.jsx
// import React from 'react';
// import { useSelector } from 'react-redux';
// import TodoItem from './TodoItem';

// const TodoList = () => {
//   const todos = useSelector((state) => state.todos.todos);

//   return (
//     <ul>
//       {todos.map((todo) => (
//         <TodoItem key={todo.id} todo={todo} />
//       ))}
//     </ul>
//   );
// };

// export default TodoList;

