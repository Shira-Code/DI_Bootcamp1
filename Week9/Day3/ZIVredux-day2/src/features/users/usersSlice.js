import { createSlice, nanoid } from "@reduxjs/toolkit";

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
    adduser: (state, action) => {
      state.users.push({
        id: nanoid(),
        name: action.payload.name,
        email: action.payload.email,
      });
    },
    addUserPrepare: {
      prepare(name, email) {
        return { payload: { id: nanoid(), name, email } };
      },
      reducer(state, action) {
        state.users.push(action.payload);
      },
    },
  },
});

export const { adduser, addUserPrepare } = usersSlice.actions;
export default usersSlice.reducer;
