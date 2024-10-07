# <!-- ### **Daily Challenge: Age Tracker with Redux Toolkit and Thunk**  
# **Last Updated: October 6th, 2024**

# #### **What You Will Learn**:
# - Redux Toolkit  
# - Async Actions with Thunk  
# - React Form Handling  

# #### **Objective**:  
# Create a new "Age Tracker" app from scratch, utilizing Redux Toolkit with Thunk middleware to manage asynchronous actions such as age incrementing and decrementing.

# ---

# ### **What You Will Create**:  
# A React app called **Age Tracker** that allows users to asynchronously increase and decrease their age using Redux Toolkit and Thunk middleware. While performing these actions, a loading icon will appear, indicating an ongoing update.

# ---

# ### **Instructions**:

# #### **1. Setup Redux Toolkit**:
# - Initialize a new React project using Vite or Create React App.
# - Install Redux Toolkit and React-Redux (`npm install @reduxjs/toolkit react-redux`).
# - Set up Redux Toolkit by creating a store using `configureStore` from Redux Toolkit.

# #### **2. Redux Actions with Thunk**:
# - Define two asynchronous action creators, `ageUpAsync` and `ageDownAsync`, using Redux Toolkit's `createAsyncThunk`.
#   - `ageUpAsync`: Simulate a delay using `setTimeout`, then increment the user's age.
#   - `ageDownAsync`: Simulate a delay using `setTimeout`, then decrement the user's age.

# #### **3. Create the Age Reducer**:
# - Create a slice using `createSlice` that includes:
#   - An initial state with `age` and `loading` properties.
#   - Reducers to handle loading states and updating the age.
#   - Extra reducers for `ageUpAsync` and `ageDownAsync`, handling the asynchronous loading process.

# #### **4. Modify Components**:
# - **AgeDisplay Component**:
#   - Create a component that displays the current age from the Redux store.
#   - Show a loading icon (you can use a simple React logo or any spinner) while the age is being updated.
  
# - **AgeControls Component**:
#   - Create a form with two buttons: "Age Up" and "Age Down" to trigger `ageUpAsync` and `ageDownAsync`.
  
# #### **5. Applying Redux and Thunk**:
# - Use `Provider` from `react-redux` to wrap your app and pass the Redux store.
# - Apply the Thunk middleware (already included with Redux Toolkit) when configuring the store. -->



# Daily Challenge:Age Counter with Redux
# Last Updated: December 5th, 2023

# What You will learn :
# Redux
# Connect
# React Form


# Objective:
# Enhance the Age Counter app by integrating Redux Toolkit with Thunk middleware to handle asynchronous actions.



# What You Will Create:
# Building upon the existing Age Counter app, you’ll implement Redux Toolkit’s features combined with Thunk middleware to manage asynchronous actions.



# Daily Challenge : Age Counter with Redux Toolkit and Thunk
# Instructions
# Setup Redux Toolkit:

# Initialize Redux Toolkit in the existing project if not already done.
# Ensure Redux Toolkit is installed and configured properly.

# Redux Actions with Thunk:

# Create ageUpAsync and ageDownAsync functions using Redux Toolkit’s createAsyncThunk.
# Define ageUpAsync to increment the age after a delay using setTimeout.
# Define ageDownAsync to decrement the age after a delay using setTimeout.

# Reducer Modification:

# Adjust the existing reducer to handle the loading state.
# Add a case for LOADING in the reducer to set loading to true.
# Ensure the loading state is set to false when the age increment/decrement is completed.

# Component Modifications:

# Update the existing components to use the new async action creators (ageUpAsync, ageDownAsync) instead of the older synchronous ones.
# Import the React logo (logo.svg) to display as a loading message during asynchronous age changes.
# Update mapStateToProps to include the loading state from the Redux store.
# Conditionally render the logo based on the loading state.

# Applying Thunk Middleware:

# Import applyMiddleware from Redux to apply middleware to the store.
# Use applyMiddleware to pass thunk middleware (included by default in Redux Toolkit) to the createStore function.

# Testing:

# Test the functionality by incrementing and decrementing the age.
# Verify that the loading logo appears during asynchronous age changes and disappears after the update.

# By completing these steps, you’ll enhance the Age Counter app by integrating Redux Toolkit with Thunk middleware, enabling the management of asynchronous actions for age incrementing and decrementing.

//app.jsx
// import React from 'react';
// import AgeDisplay from './features/age/AgeDisplay';
// import AgeControls from './features/age/AgeControls';

// const App = () => {
//   return (
//     <div>
//       <AgeDisplay />
//       <AgeControls />
//     </div>
//   );
// };

// export default App;

//main.jsx
// src/main.jsx or src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

//store.js
// import { configureStore } from '@reduxjs/toolkit';
// import ageReducer from '../features/age/ageSlice';

// export const store = configureStore({
//   reducer: {
//     age: ageReducer,
//   },
// });

//ageSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const ageUpAsync = createAsyncThunk('age/ageUpAsync', async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(1); 
//     }, 1000); 
//   });
// });

// export const ageDownAsync = createAsyncThunk('age/ageDownAsync', async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(1); 
//     }, 1000); 
//   });
// });

// const ageSlice = createSlice({
//   name: 'age',
//   initialState: {
//     value: 0,  
//     loading: false, 
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(ageUpAsync.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(ageUpAsync.fulfilled, (state, action) => {
//         state.loading = false;
//         state.value += action.payload; 
//       })
//       .addCase(ageDownAsync.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(ageDownAsync.fulfilled, (state, action) => {
//         state.loading = false;
//         state.value -= action.payload; 
//       });
//   },
// });

// export default ageSlice.reducer;

//AgeControls.jsx
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { ageUpAsync, ageDownAsync } from './ageSlice';

// const AgeControls = () => {
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <button onClick={() => dispatch(ageUpAsync())}>Age Up</button>
//       <button onClick={() => dispatch(ageDownAsync())}>Age Down</button>
//     </div>
//   );
// };

// export default AgeControls;

//AgeDisplay.jsx
// import React from 'react';
// import { useSelector } from 'react-redux';

// const AgeDisplay = () => {
//   const age = useSelector((state) => state.age.value);
//   const loading = useSelector((state) => state.age.loading);

//   return (
//     <div>
//       <h1>Age: {age}</h1>
//       {loading && <p>Loading...</p>}
//     </div>
//   );
// };

// export default AgeDisplay;




