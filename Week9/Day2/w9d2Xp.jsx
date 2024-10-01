
// 🌟 Exercise 1: Basic Todo List with React-Redux
// Instructions
// Create a todo list application using React and Redux to manage the state of the todos.

// Certainly! Here’s a more detailed set of instructions for creating a basic todo list application using React and Redux:



// Setting Up the Redux Store and Actions
// 1. Initialize a Redux Store:

// Install the necessary packages (redux and react-redux) using npm or yarn.
// Create a Redux store using createStore from Redux.
// Define the initial state for your todo list within the store.

// 2. Define Actions:

// Create action types for adding a todo, toggling a todo’s completion status, and removing a todo.
// Build action creators for each action type. These functions should return action objects with a type and payload where necessary.


// Implementing Reducers
// 3. Create Reducers:

// Write reducers for each action type defined earlier.
// Handle each action type within the reducers to update the state accordingly.
// Ensure immutability by creating new state objects instead of modifying the existing state.


// Developing React Components
// 4. Design React Components:

// Create components for displaying the list of todos, adding new todos, marking todos as complete, and removing todos.
// Structure the components to interact with the Redux store by dispatching actions through props.

// 5. Connect Components to Redux Store:

// Use connect from react-redux to connect your React components to the Redux store.
// Map state properties and action dispatchers to the component’s props using mapStateToProps and mapDispatchToProps.

// Testing Functionality
// 6. Test the Application:

// Render the components within your main application container.
// Verify that the todos display correctly and that adding, completing, and removing todos work as expected.
// Dispatch actions from your components to trigger changes in the Redux store and ensure that the UI updates reflect these changes.


// Additional Tips:
// Redux DevTools: Consider integrating Redux DevTools Extension to visualize and debug your Redux store state changes.
// Organize Code Structure: Keep your code organized by separating Redux-related files (reducers, actions) from React component files.
// CSS Styling: Apply CSS or styling frameworks to enhance the visual presentation of your todo list application.
// Remember to break down each step into smaller tasks and test frequently as you progress through building the application. This approach helps in identifying and fixing issues early in the development process.

//App.jsx
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import AddTodo from './components/AddToDo';
// import TodoList from './components/TodoList';
// import { addTodo, toggleTodo, removeTodo } from './redux/actions';

// const App = () => {
//   const todos = useSelector((state) => state.todos);
//   const dispatch = useDispatch();

//   const handleAddTodo = (text) => {
//     dispatch(addTodo(text));
//   };

//   const handleToggleTodo = (id) => {
//     dispatch(toggleTodo(id));
//   };

//   const handleRemoveTodo = (id) => {
//     dispatch(removeTodo(id));
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <AddTodo addTodo={handleAddTodo} />
//       <TodoList
//         todos={todos}
//         onToggleTodo={handleToggleTodo}
//         onRemoveTodo={handleRemoveTodo}
//       />
//     </div>
//   );
// };

// export default App;

//src/redux/actions.js
// action types
// export const ADD_TODO = 'ADD_TODO';
// export const TOGGLE_TODO = 'TOGGLE_TODO';
// export const REMOVE_TODO = 'REMOVE_TODO';

// export const addTodo = (text) => ({
//   type: ADD_TODO,
//   payload: text,
// });

// export const toggleTodo = (id) => ({
//   type: TOGGLE_TODO,
//   payload: id,
// });

// export const removeTodo = (id) => ({
//   type: REMOVE_TODO,
//   payload: id,
// });

//src/redux/reducers.js
// import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions';

// const initialState = {
//   todos: [],
// };

// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           { id: Date.now(), text: action.payload, completed: false },
//         ],
//       };
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.payload
//             ? { ...todo, completed: !todo.completed }
//             : todo
//         ),
//       };
//     case REMOVE_TODO:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export default todoReducer;

//src/redux/store.js
// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import todoReducer from './reducers';

// const store = createStore(todoReducer, composeWithDevTools());

// export default store;

//src/components/AddToDo.jsx
// import React, { useState } from 'react';

// const AddTodo = ({ addTodo }) => {
//   const [text, setText] = useState('');

//   const handleAddTodo = () => {
//     if (text.trim() !== '') {
//       addTodo(text);
//       setText('');
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Add a new todo"
//       />
//       <button onClick={handleAddTodo}>Add Todo</button>
//     </div>
//   );
// };

// export default AddTodo;

//src/components/ToDoList.jsx
// import React from 'react';
// import TodoItem from './ToDoItem';

// const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
//   return (
//     <ul>
//       {todos.map((todo) => (
//         <TodoItem
//           key={todo.id}
//           todo={todo}
//           onToggle={onToggleTodo}
//           onRemove={onRemoveTodo}
//         />
//       ))}
//     </ul>
//   );
// };

// export default TodoList;

//src/components/ToDoItem.jsx
// import React from 'react';

// const TodoItem = ({ todo, onToggle, onRemove }) => {
//   return (
//     <li>
//       <span
//         style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
//         onClick={() => onToggle(todo.id)}
//       >
//         {todo.text}
//       </span>
//       <button onClick={() => onRemove(todo.id)}>Remove</button>
//     </li>
//   );
// };

// export default TodoItem;

//index.css
// body {
//     font-family: Arial, sans-serif;
//   }
  
//   ul {
//     list-style-type: none;
//     padding: 0;
//   }
  
//   li {
//     margin: 10px 0;
//   }
  
//   button {
//     margin-left: 10px;
//     cursor: pointer;
//   }
  
//main.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { Provider } from 'react-redux';
// import store from './redux/store'; // assuming you have a redux store setup
// import './index.css';

// const rootElement = document.getElementById('root');

// const root = ReactDOM.createRoot(rootElement);

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );






