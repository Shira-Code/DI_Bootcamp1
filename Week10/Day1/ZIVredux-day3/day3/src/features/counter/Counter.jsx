import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import {
  increment,
  decrement,
  reset,
  incrementByNum,
  incrementBy2Nums,
  incrementWithPrepare,
  delay2secAsync,
} from "./counterSlice";
// import { actions } from "./counterSlice";

const Counter = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);

  const numRef = useRef();

  const num1Ref = useRef();
  const num2Ref = useRef();

  const addNum = () => {
    const num = numRef.current.value;
    dispatch(incrementByNum(Number(num)));
  };

  const add2Nums = () => {
    const num1 = num1Ref.current.value;
    const num2 = num2Ref.current.value;
    // dispatch(incrementBy2Nums([Number(num1), Number(num2)]));
    // dispatch(incrementBy2Nums({num1: Number(num1), num2: Number(num2)}));
    dispatch(incrementWithPrepare(Number(num1), Number(num2)));
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
      <button onClick={() => dispatch(reset())}> Reset </button>
      <button onClick={() => dispatch(delay2secAsync())}> Delay by 2s </button>
      <div>
        <h2>Increment By Number</h2>
        <input ref={numRef} />
        <button onClick={() => addNum()}> Add Number</button>
      </div>
      {/* <div>
        <h2>Increment By 2 Number</h2>
        <input ref={num1Ref} />
        <input ref={num2Ref} />
        <button onClick={() => add2Nums()}> Add 2 Number</button>
      </div> */}
    </>
  );
};
export default Counter;
