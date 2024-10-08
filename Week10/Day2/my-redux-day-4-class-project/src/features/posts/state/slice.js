import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POST URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
    posts: [],
    status: "",
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {

const postsSlice = createSlice({
    name: "posts",
    initialState,
    
    },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;