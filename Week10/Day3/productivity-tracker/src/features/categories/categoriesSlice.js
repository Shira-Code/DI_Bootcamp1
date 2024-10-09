import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await fetch('/api/categories');
    return response.json();
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addCategory: (state, action) => {
      state.items.push(action.payload);
    },
    setSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
    deleteCategory: (state, action) => {
      // This will filter out the category with the given ID
      state.items = state.items.filter(category => category.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the actions and the reducer
export const { addCategory, setSelectedCategoryId, deleteCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
