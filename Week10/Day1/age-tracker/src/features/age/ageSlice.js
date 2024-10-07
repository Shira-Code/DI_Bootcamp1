// src/features/age/ageSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate async age increment action
export const ageUpAsync = createAsyncThunk('age/ageUpAsync', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1); // Returning the value to increment
    }, 1000); // Simulating 1 second delay
  });
});

// Simulate async age decrement action
export const ageDownAsync = createAsyncThunk('age/ageDownAsync', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1); // Returning the value to decrement
    }, 1000); // Simulating 1 second delay
  });
});

const ageSlice = createSlice({
  name: 'age',
  initialState: {
    value: 0,  // Initial age value
    loading: false, // Loading state
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.value += action.payload; // Increment age
      })
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.value -= action.payload; // Decrement age
      });
  },
});

export default ageSlice.reducer;
