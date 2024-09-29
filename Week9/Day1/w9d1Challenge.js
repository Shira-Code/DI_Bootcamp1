// Daily Challenge: Enhanced Task Manager
// Last Updated: September 22nd, 2023

// Objective: Enhance the Task Manager application by adding new features, including the ability to edit tasks and filter tasks by completion status, using useContext, useReducer, and useRef.

// Instructions
// Set up a new React project using create-react-app or your preferred method.

// Extend the existing Task Manager application (from the previous exercise) by adding the following features:

// Edit Tasks: Allow users to edit existing tasks by clicking on them.

// Filter Tasks: Implement buttons to filter tasks by completion status (e.g., show all, show completed, show active).

// Use useRef to enable task editing and update the task text when the user makes changes.

// Implement actions in the reducer for editing tasks and filtering tasks.

// Hints:

// To enable task editing, you can add an “Edit” button next to each task that, when clicked, activates an input field for editing the task text.

// Use a state variable or a ref to track the edited task text before saving.

// Implement actions like EDIT_TASK and FILTER_TASKS in the reducer to handle task editing and filtering.

// Use conditional rendering to display tasks based on the selected filter.

// Example Starter Code:

// You can start with the Task Manager code provided in the previous exercise and extend it to include the new features described above.

// Feel free to adapt and customize the example code to create your enhanced Task Manager application. This daily challenge will help you practice combining multiple React concepts to build a more complex application.

//app.jsx
// import React from "react";
// import { TaskProvider } from "./TaskContext";
// import TaskList from "./TaskList";
// import TaskForm from "./TaskForm";
// import FilterButtons from "./FilterButtons";

// function App() {
//   return (
//     <TaskProvider>
//       <div className="App">
//         <h1>Task Manager</h1>
//         <TaskForm />
//         <FilterButtons />
//         <TaskList />
//       </div>
//     </TaskProvider>
//   );
// }

// export default App;

//TaskContext.jsx
// import React, { createContext, useContext, useReducer } from "react";

// const TaskContext = createContext();

// const initialState = {
//   tasks: [],
//   filter: "all", // 'all', 'completed', 'active'
// };

// function taskReducer(state, action) {
//   switch (action.type) {
//     case "ADD_TASK":
//       return {
//         ...state,
//         tasks: [...state.tasks, { id: Date.now(), text: action.text, completed: false }],
//       };
//     case "REMOVE_TASK":
//       return {
//         ...state,
//         tasks: state.tasks.filter((task) => task.id !== action.id),
//       };
//     case "TOGGLE_TASK":
//       return {
//         ...state,
//         tasks: state.tasks.map((task) =>
//           task.id === action.id ? { ...task, completed: !task.completed } : task
//         ),
//       };
//     case "EDIT_TASK":
//       return {
//         ...state,
//         tasks: state.tasks.map((task) =>
//           task.id === action.id ? { ...task, text: action.text } : task
//         ),
//       };
//     case "SET_FILTER":
//       return {
//         ...state,
//         filter: action.filter,
//       };
//     default:
//       return state;
//   }
// }

// export function TaskProvider({ children }) {
//   const [state, dispatch] = useReducer(taskReducer, initialState);

//   return (
//     <TaskContext.Provider value={{ state, dispatch }}>
//       {children}
//     </TaskContext.Provider>
//   );
// }

// export function useTasks() {
//   return useContext(TaskContext);
// }

//TaskList.jsx
// import React, { useRef, useState } from "react";
// import { useTasks } from "./TaskContext";

// function TaskList() {
//   const { state, dispatch } = useTasks();
//   const [editingTaskId, setEditingTaskId] = useState(null);
//   const editRef = useRef(null);

//   const handleEditTask = (id) => {
//     const newText = editRef.current.value;
//     dispatch({ type: "EDIT_TASK", id, text: newText });
//     setEditingTaskId(null);
//   };

//   const filteredTasks = state.tasks.filter((task) => {
//     if (state.filter === "completed") return task.completed;
//     if (state.filter === "active") return !task.completed;
//     return true;
//   });

//   return (
//     <ul>
//       {filteredTasks.map((task) => (
//         <li key={task.id}>
//           {editingTaskId === task.id ? (
//             <>
//               <input ref={editRef} defaultValue={task.text} />
//               <button onClick={() => handleEditTask(task.id)}>Save</button>
//             </>
//           ) : (
//             <>
//               <span
//                 style={{ textDecoration: task.completed ? "line-through" : "none" }}
//                 onClick={() => dispatch({ type: "TOGGLE_TASK", id: task.id })}
//               >
//                 {task.text}
//               </span>
//               <button onClick={() => setEditingTaskId(task.id)}>Edit</button>
//               <button onClick={() => dispatch({ type: "REMOVE_TASK", id: task.id })}>
//                 Remove
//               </button>
//             </>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default TaskList;

//TaskForm.jsx
// import React, { useState } from "react";
// import { useTasks } from "./TaskContext";

// function TaskForm() {
//   const [taskText, setTaskText] = useState("");
//   const { dispatch } = useTasks();

//   const handleAddTask = () => {
//     if (taskText.trim() === "") return;
//     dispatch({ type: "ADD_TASK", text: taskText });
//     setTaskText("");
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={taskText}
//         onChange={(e) => setTaskText(e.target.value)}
//         placeholder="Add a new task"
//       />
//       <button onClick={handleAddTask}>Add Task</button>
//     </div>
//   );
// }

// export default TaskForm;

//FilterButtons.jsx
// import React from "react";
// import { useTasks } from "./TaskContext";

// function FilterButtons() {
//   const { dispatch } = useTasks();

//   return (
//     <div>
//       <button onClick={() => dispatch({ type: "SET_FILTER", filter: "all" })}>All</button>
//       <button onClick={() => dispatch({ type: "SET_FILTER", filter: "completed" })}>Completed</button>
//       <button onClick={() => dispatch({ type: "SET_FILTER", filter: "active" })}>Active</button>
//     </div>
//   );
// }

// export default FilterButtons;

//main.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './styles.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//styles.css
// body {
//     font-family: Arial, sans-serif;
//     padding: 20px;
//     background-color: #f0f0f0;
//   }
  
//   .App {
//     max-width: 600px;
//     margin: 0 auto;
//   }
  
//   ul {
//     list-style-type: none;
//     padding: 0;
//   }
  
//   li {
//     background-color: white;
//     margin: 10px 0;
//     padding: 10px;
//     border-radius: 4px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
  
//   button {
//     margin-left: 10px;
//   }
  
//   input[type="text"] {
//     padding: 8px;
//     width: 80%;
//     margin-right: 10px;
//   }
  
//   button {
//     padding: 8px 12px;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//   }
  



