import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    count: 0
};

//the name of the action is important in this case, below, it's ounter
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            //No longer need to return clonereturn { ...state, count: state.count + action + 1 }
            
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state)  => {
            state.count = initialState.count;
        },
        incrementByNum: (state, action) => {
            console.log(action);
            state.count += action.payload;
        },
        incrementBy2Nums: (state, action) => {
            console.log(action.payload);
            state.count += action.payload.num1 + action.payload.num2;

            },
        },  
}); 
export const action = counterSlice.actions;
export const { increment, decrement, reset, incrementByNum, incrementBy2Nums } = counterSlice.actions;
export default counterSlice.reducer;