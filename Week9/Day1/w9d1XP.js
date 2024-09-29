// Exercises XP
// Last Updated: September 22nd, 2023

// 🌟 Exercise 1: Implement a Theme Switcher
// Instructions
// Objective: Create a theme switcher component that allows users to toggle between light and dark themes using useContext and useState.

// Set up a new React project using create-react-app or your preferred method.

// Create a context for managing the theme (light/dark mode).

// Implement a theme switcher component that toggles between light and dark themes when clicked.

// Use useContext to access the current theme in other components and apply the theme styles.

// Hints:

// You can create a context with a default theme value (e.g., light) and a function to toggle the theme.

// The theme switcher component should have a button that, when clicked, calls the theme toggling function provided by the context.

// Apply different styles (CSS or inline styles) to your components based on the current theme.

// Example Starter Code:

// Here’s a simplified example to get you started:

// // ThemeContext.js
// import React, { createContext, useContext, useState } from "react";

// const ThemeContext = createContext();

// function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// function useTheme() {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// }

// export { ThemeProvider, useTheme };
// // App.js
// import React from "react";
// import { ThemeProvider, useTheme } from "./ThemeContext";

// function ThemeSwitcher() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//       <p>Current Theme: {theme}</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <div className="App">
//         <h1>Theme Switcher Example</h1>
//         <ThemeSwitcher />
//         {/* Other components here */}
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

//App.js
// src/App.js
// import React from "react";
// import { ThemeProvider, useTheme } from "./ThemeContext";
// import './App.css';

// function ThemeSwitcher() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div className={`app-container ${theme}`}>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//       <p>Current Theme: {theme}</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <div className="App">
//         <h1>Theme Switcher Example</h1>
//         <ThemeSwitcher />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

//ThemeContext.js

// import React, { createContext, useContext, useState } from "react";

// const ThemeContext = createContext();

// function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// function useTheme() {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// }

// export { ThemeProvider, useTheme };

//App.css
/* src/App.css */
// .app-container {
//     padding: 20px;
//     text-align: center;
//   }
  
//   .app-container.light {
//     background-color: #fff;
//     color: #000;
//   }
  
//   .app-container.dark {
//     background-color: #333;
//     color: #fff;
//   }
  
//   button {
//     padding: 10px 20px;
//     cursor: pointer;
//     background-color: #008cba;
//     color: white;
//     border: none;
//     border-radius: 4px;
//   }
  
//   button:hover {
//     background-color: #005f5f;
//   }
  


// 🌟 Exercise 2: Implement a Character Counter
// Instructions
// Objective: Create a React component that displays a character counter for a text input. The counter should update in real-time as the user types using the useRef hook.

// Set up a new React project using create-react-app or your preferred method.

// Create a component that includes a text input and a counter display.

// Use the useRef hook to create a reference to the text input element.

// Implement an event handler that listens for changes in the text input.

// Use the useRef reference to track the length of the text in the input and update the counter display accordingly.

// Hints:

// You can use the inputRef.current.value.length property to get the length of the text in the input.

// Attach an event listener to the text input’s input event to listen for changes in the input.

// Example Starter Code:

// Here’s a simplified example to get you started:

// import React, { useRef } from "react";
// import "./App.css";

// function CharacterCounter() {
//   const inputRef = useRef(null);

//   const handleInputChange = () => {
//     const textLength = inputRef.current.value.length;
//     // Update the character count based on textLength
//   };

//   return (
//     <div>
//       <h1>Character Counter</h1>
//       <textarea
//         ref={inputRef}
//         onChange={handleInputChange}
//         placeholder="Type something..."></textarea>
//       <p>Character Count: {/* Display character count here */}</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <CharacterCounter />
//     </div>
//   );
// }

// export default App;

//App.js
// import React, { useRef, useState } from "react";
// import "./App.css";

// function CharacterCounter() {
//   const inputRef = useRef(null);
//   const [charCount, setCharCount] = useState(0);

//   const handleInputChange = () => {
//     const textLength = inputRef.current.value.length;
//     setCharCount(textLength);
//   };

//   return (
//     <div className="character-counter">
//       <h1>Character Counter</h1>
//       <textarea
//         ref={inputRef}
//         onChange={handleInputChange}
//         placeholder="Type something..."
//       ></textarea>
//       <p>Character Count: {charCount}</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <CharacterCounter />
//     </div>
//   );
// }

// export default App;



// 🌟 Exercise 3: Implement a Todo List
// Instructions
// Objective: Create a React component that allows users to add and remove todo items using useReducer.

// Set up a new React project using create-react-app or your preferred method.

// Create a component that includes an input field for adding todos, a list to display todos, and a way to remove todos.

// Use the useReducer hook to manage the state of the todo list.

// Implement actions for adding and removing todos in your reducer.

// Hints:

// You can represent each todo as an object with properties like id and text.

// Use a unique id for each todo to identify them when removing.

// Example Starter Code:

// Here’s a simplified example to get you started:

// import React, { useReducer, useState } from "react";

// // Reducer function
// function todoReducer(state, action) {
//   switch (action.type) {
//     case "ADD_TODO":
//       // Add a new todo to the state
//       return [...state, { id: Date.now(), text: action.text }];
//     case "REMOVE_TODO":
//       // Remove a todo by its id
//       return state.filter((todo) => todo.id !== action.id);
//     default:
//       return state;
//   }
// }

// function TodoList() {
//   const [todos, dispatch] = useReducer(todoReducer, []);
//   const [todoText, setTodoText] = useState("");

//   const handleAddTodo = () => {
//     if (todoText.trim() === "") return;
//     dispatch({ type: "ADD_TODO", text: todoText });
//     setTodoText("");
//   };

//   const handleRemoveTodo = (id) => {
//     dispatch({ type: "REMOVE_TODO", id });
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <input
//         type="text"
//         placeholder="Add a new todo"
//         value={todoText}
//         onChange={(e) => setTodoText(e.target.value)}
//       />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.text}
//             <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <TodoList />
//     </div>
//   );
// }

// export default App;

//App.jsx
// import "./App.css";
// import React, { useReducer, useState } from "react";
// function todoReducer(state, action) {
//   switch (action.type) {
//     case "ADD_TODO":
//       // Add a new todo to the state
//       return [...state, { id: Date.now(), text: action.text }];
//     case "REMOVE_TODO":
//       // Remove a todo by its id
//       return state.filter((todo) => todo.id !== action.id);
//     default:
//       return state;
//   }
// }

// function TodoList() {
//   const [todos, dispatch] = useReducer(todoReducer, []);
//   const [todoText, setTodoText] = useState("");

//   
//   const handleAddTodo = () => {
//     if (todoText.trim() === "") return;
//     dispatch({ type: "ADD_TODO", text: todoText });
//     setTodoText("");
//   };

//   
//   const handleRemoveTodo = (id) => {
//     dispatch({ type: "REMOVE_TODO", id });
//   };

//   return (
//     <div className="todo-list">
//       <h1>Todo List</h1>
//       <input
//         type="text"
//         placeholder="Add a new todo"
//         value={todoText}
//         onChange={(e) => setTodoText(e.target.value)}
//       />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.text}
//             <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <TodoList />
//     </div>
//   );
// }

// export default App;

//App.css
// .todo-list {
//     text-align: center;
//     margin-top: 50px;
//   }
  
//   input {
//     padding: 10px;
//     margin-right: 10px;
//     border-radius: 5px;
//     border: 1px solid #ccc;
//   }
  
//   button {
//     padding: 10px 20px;
//     border-radius: 5px;
//     background-color: #007bff;
//     color: white;
//     border: none;
//     cursor: pointer;
//   }
  
//   button:hover {
//     background-color: #0056b3;
//   }
  
//   ul {
//     list-style-type: none;
//     padding: 0;
//   }
  
//   li {
//     margin-top: 10px;
//     font-size: 18px;
//   }
  
//   li button {
//     margin-left: 10px;
//     background-color: #ff4d4f;
//   }
  
//   li button:hover {
//     background-color: #cc3a3b;
//   }