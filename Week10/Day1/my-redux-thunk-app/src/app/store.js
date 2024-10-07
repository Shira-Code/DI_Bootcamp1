import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice'; // Make sure this path is correct

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;
