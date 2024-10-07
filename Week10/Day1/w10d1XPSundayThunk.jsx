// <!-- What You will learn :
// Redux
// Connect
// React Form


// Exercise 1: Fetching User Data with Redux Thunk
// Instructions
// Create a simple React-Redux application that fetches and displays user data from an API using Redux Thunk for asynchronous logic.



// Step 1: Set up Redux Store with Thunk Middleware
// Initialize Store:
// Use Redux Toolkit’s configureStore to create the Redux store.
// Include the necessary middleware, such as redux-thunk, to handle asynchronous logic.

// Step 2: Define Redux Slice for User Data
// User Data Slice:
// Utilize createSlice from Redux Toolkit to define a slice for managing user data.
// Define initial state to hold user information or an empty object.
// Create reducers for:
// Handling successful fetching and storing of user data.
// Handling errors if the API request fails.


// Step 3: Implement Thunk Action Creator
// Thunk Action Creator:
// Create a Thunk action creator that makes an API call to fetch user data.
// Use asynchronous logic within the Thunk to perform the API request.
// Dispatch appropriate actions based on the response (success/failure).


// Step 4: Create React Component for Displaying User Data
// UserData Component:
// Develop a component to display the fetched user data.
// Use useSelector to access user data from the Redux store state.


// Step 5: Connect Component to Redux Store
// Use useSelector and useDispatch Hooks:
// Within the UserData component, utilize useSelector to access user data from the Redux store.
// Dispatch the Thunk action using useDispatch to trigger the API call and update the store.


// Step 6: Test Functionality
// Fetch User Data:

// Test fetching user data by triggering the Thunk action creator.
// Verify that the user data is retrieved from the mock API endpoint.

// Display User Data:

// Ensure that the UserData component displays the fetched user data obtained from the Redux store.

// Error Handling:

// Test error handling by simulating a failed API request and verify that the appropriate error actions are dispatched and handled in the store.


// By following these steps, you’ll build a React-Redux application utilizing Redux Thunk to fetch user data from an API. Testing the functionality ensures the successful retrieval and display of user data while handling errors in case of unsuccessful API requests. -->

//App.jsx
// import React from 'react';
// import UserData from './features/user/UserData';

// const App = () => {
//   return (
//     <div>
//       <UserData />
//     </div>
//   );
// };

// export default App;

//main.jsx
// src/main.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import store from './app/store';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

//stor.js
// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from '../features/user/userSlice';

// const store = configureStore({
//     reducer: {
//         user: userReducer,
//     },
// });

// export default store;

//userSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchUsers = createAsyncThunk(
//     'user/fetchUsers',
//     async (_, { rejectWithValue }) => {
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users');
//             const data = await response.json();
//             return data; 
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );

// const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         userData: [],
//         loading: false,
//         error: null,
//     },
//     reducers: {
//         // No additional reducers needed for this example
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchUsers.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchUsers.fulfilled, (state, action) => {
//                 state.userData = action.payload;
//                 state.loading = false;
//             })
//             .addCase(fetchUsers.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             });
//     },
// });

// export default userSlice.reducer;

//UserData.jsx
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from './userSlice';

// const UserData = () => {
//   const dispatch = useDispatch();
  
//   const { userData, loading, error } = useSelector((state) => state.user);

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>User Data</h1>
//       <ul>
//         {userData.map((user) => (
//           <li key={user.id}>
//             <h2>{user.name}</h2>
//             <p>Username: {user.username}</p>
//             <p>Email: {user.email}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserData;




