import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

import counterReducer from "../features/counter/counterSlice";
import usersReducer from "../features/users/usersSlice";

const appReducer = combineReducers({
  counterReducer,
  usersReducer,
});

// const myLogger = (store) => (next) => (action) => {
//   console.log("prev state=>", store.getState());
//   console.log("action=>", action);
//   next(action)
//   console.log("next state=>", store.getState());
// };

const store = configureStore({
  reducer: appReducer,
  // middleware: () => [myLogger, logger],
  // middleware: (getDefaultMiddleware) => {
  //   // console.log(getDefaultMiddleware());
  //   return getDefaultMiddleware()
  // }
});

export default store;
