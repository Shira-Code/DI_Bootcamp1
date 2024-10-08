import { configureStore, combineReducers } from "@reduxjs/toolkit";

import tasksReducer from "../features/tasks/state/slice";

const appReducer = combineReducers({
  tasksReducer,
});

const store = configureStore({
  reducer: appReducer,
});

export default store;
