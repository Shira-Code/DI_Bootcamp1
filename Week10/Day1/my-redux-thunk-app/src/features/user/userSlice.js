// src/features/user/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk for fetching user data
export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            return data; // This will be the payload of the fulfilled action
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: [],
        loading: false,
        error: null,
    },
    reducers: {
        // No additional reducers needed for this example
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.userData = action.payload;
                state.loading = false;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

// Export the reducer as default
export default userSlice.reducer;
