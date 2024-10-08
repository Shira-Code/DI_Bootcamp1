import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const delay2secAsync = createAsyncThunk("counter/delay", () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(10);
    }, 2 * 1000);
  });
});

export const delay2secAsync2 = createAsyncThunk("counter/delay2", () => {
  return Promise.resolve(4)
});

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
    /** not use like that */
    // delay2sec: (state) => {
    //   setTimeout(() => {
    //     state.count += 1;
    //   }, 2 * 1000);
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(delay2secAsync.fulfilled, (state, action) => {
        state.count += action.payload;
      })
      .addCase(delay2secAsync.rejected, (state, action) => {
        console.log(action);
        state.count -= Number(action.error.message);
      })
      .addCase(delay2secAsync.pending, (state, action) => {
        state.count += 100;
      })
      .addCase(delay2secAsync2.fulfilled, (state, action) => {
        state.count += action.payload;
      })
      .addCase(delay2secAsync2.rejected, (state, action) => {
        console.log(action);
        state.count -= Number(action.error.message);
      })
      .addCase(delay2secAsync2.pending, (state, action) => {
        state.count += 100;
      });
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
  delay2sec,
} = counterSlice.actions;

export default counterSlice.reducer;
