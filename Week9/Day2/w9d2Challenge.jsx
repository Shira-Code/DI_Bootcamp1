// DailyChallenge: Planner Application
// Last Updated: November 23rd, 2023

// Create a daily planner application allowing users to manage tasks for specific days. The application should allow users to view tasks for different days, add new tasks, edit existing tasks, and delete tasks.



// Instructions


// Redux Store Configuration
// 1. Store Setup:

// Initialize a Redux store with the necessary structure to manage tasks for different days.
// Consider using an object structure where each day holds an array of tasks or any suitable structure to organize tasks by day.


// Defining Actions and Reducers
// 2. Action Definitions:

// Define action types for adding, editing, and deleting tasks for specific days.
// Create action creators that handle these operations, considering day identifiers and task details.


// 3. Reducer Implementation:

// Implement reducers that manage tasks for different days based on the dispatched actions.
// Ensure reducers update the state immutably and handle various action types appropriately.


// Building React Components
// 4. Calendar/Date Picker:

// Design and implement a calendar or date picker component to enable users to select different days.
// Link the selected day to display tasks for that specific day.

// 5. Task Display Component:

// Create a component responsible for rendering tasks for the selected day.
// Display existing tasks with options for editing and deleting individual tasks.

// 6. Task Management Components:

// Develop UI elements for adding new tasks, editing existing tasks, and deleting tasks.
// Implement forms or modals for task creation and editing with suitable input fields.

// Integrating Components with Redux Store
// 7. Connecting Components to Store:

// Utilize connect from react-redux to connect the date picker and task display components to the Redux store.
// Map state properties (tasks for selected day) and action dispatchers to component props.

// 8. Task Actions Dispatch:

// Dispatch actions (add, edit, delete) based on user interactions in the task management components.
// Ensure dispatched actions correspond to the correct day and contain necessary payload data.

// Testing and Functionality Validation
// 9. Testing User Interactions:

// Validate the functionality by interacting with the date picker to view tasks for different days.
// Test adding, editing, and deleting tasks to verify proper interaction with the Redux store.


// Additional Considerations:
// Validation and Error Handling: Implement validation for task inputs and handle edge cases gracefully, such as empty tasks or invalid inputs.
// User Experience (UX): Ensure the application provides an intuitive and smooth user experience while managing tasks and navigating between days.
// Persistence: Consider implementing local storage or backend integration for persisting tasks across sessions or users.
// Scalability: Structure components and state management in a scalable way to accommodate potential future feature expansions or changes.
// Regular testing, incremental development, and continuous validation of functionalities will help ensure the daily planner application operates smoothly and effectively.

//App.jsx
// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import Calendar from './components/Calendar';
// import TaskList from './components/TaskList';


// const App = () => {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <h1>Daily Planner</h1>
//         <Calendar />
//         <TaskList />
//       </div>
//     </Provider>
//   );
// };

// export default App;

//main.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//reducer.js
// import { ADD_TASK, EDIT_TASK, DELETE_TASK } from './actions';

// const initialState = {
//   tasks: {},
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TASK:
//       const { date, task } = action.payload;
//       return {
//         ...state,
//         tasks: {
//           ...state.tasks,
//           [date]: [...(state.tasks[date] || []), task],
//         },
//       };

//     case EDIT_TASK:
//       const { taskId, updatedTask } = action.payload;
//       return {
//         ...state,
//         tasks: {
//           ...state.tasks,
//           [action.payload.date]: state.tasks[action.payload.date].map((t, id) =>
//             id === taskId ? updatedTask : t
//           ),
//         },
//       };

//     case DELETE_TASK:
//       return {
//         ...state,
//         tasks: {
//           ...state.tasks,
//           [action.payload.date]: state.tasks[action.payload.date].filter(
//             (_, id) => id !== action.payload.taskId
//           ),
//         },
//       };

//     default:
//       return state;
//   }
// };

// export default reducer;

//actions.js
// export const ADD_TASK = 'ADD_TASK';
// export const EDIT_TASK = 'EDIT_TASK';
// export const DELETE_TASK = 'DELETE_TASK';

// export const addTask = (date, task) => ({
//   type: ADD_TASK,
//   payload: { date, task },
// });

// export const editTask = (date, taskId, updatedTask) => ({
//   type: EDIT_TASK,
//   payload: { date, taskId, updatedTask },
// });

// export const deleteTask = (date, taskId) => ({
//   type: DELETE_TASK,
//   payload: { date, taskId },
// });

//Calendar.jsx
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addTask } from '../redux/actions';

// const Calendar = () => {
//   const dispatch = useDispatch();
//   const [date, setDate] = React.useState('');
//   const [task, setTask] = React.useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addTask(date, { id: Date.now(), text: task }));
//     setTask('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="New task"
//         required
//       />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default Calendar;

//TaskList.jsx
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteTask } from '../redux/actions';

// const TaskList = () => {
//   const dispatch = useDispatch();
//   const tasks = useSelector((state) => state.tasks);

//   return (
//     <div>
//       {Object.keys(tasks).map((date) => {
//         const dateTasks = tasks[date];
//         return (
//           dateTasks.length > 0 && ( // Only render the date if there are tasks
//             <div key={date}>
//               <h2>{date}</h2>
//               <ul>
//                 {dateTasks.map((task, id) => (
//                   <li key={task.id}>
//                     {task.text}
//                     <button onClick={() => dispatch(deleteTask(date, id))}>
//                       Delete
//                     </button>
//                     {/* You can add edit functionality here */}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )
//         );
//       })}
//     </div>
//   );
// };

// export default TaskList;


