import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // counter/increment
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = initialState.count;
    },
    incrementByNum: (state, action) => {
      //   console.log(action);
      state.count += action.payload;
    },
    incrementBy2Nums: (state, action) => {
      console.log(action.payload);
      state.count += action.payload.num1 + action.payload.num2;
      //   state.count = action.payload.reduce((total,item) => {
      //     return total + item
      //   }, state.count)
    },
    incrementWithPrepare: {
      reducer(state, action) {
        console.log(action);
      },
      prepare(num1, num2) {
        return { payload: num1 + num2 };
      },
    },
  },
});

// export const actions =  counterSlice.actions;

export const {
  increment,
  decrement,
  reset,
  incrementByNum,
  incrementBy2Nums,
  incrementWithPrepare,
} = counterSlice.actions;

export default counterSlice.reducer;
