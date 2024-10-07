import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";



const initialState = {
    users: [
        { id: 1, name: "Jhon", email: "jjj@gmail.com" },
        { id: 2, name: "Anne", email: "aaa@gmail.com" },
        { id: 3, name: "Dan", email: "ddd@gmail.com" },
    ],
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push({
                id: nanoid(),
                name: action.payload.name,
                email: action.payload.email,
            });
    },
        addUserPrepare: {
            reducer: (state, action) {
                state.users.push(action.payload);
                
            },
            prepare: (name, email) {
                return { payload: { id: nanoid(), name, email } };
            },
        }
},
});

export default userSlice.reducer;
export const { addUser, addUserPrepare } = usersSlice.actions;
     