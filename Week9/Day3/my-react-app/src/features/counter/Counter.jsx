import { useSelector, useDispatch } from "react-redux";
import{ increment, decrement, reset, incrementByNum, incrementBy2Nums } from "./counterSlice";

const Counter = (props) => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counterReducer.count);

    const num1Ref = useRef();
    const num2Ref = useRef();

    const addNum = () => {
        const num = numRef.current.value;
        dispatch(incrementByNum(Number(num)));
    };

    const add2Num = () => {
        const num1 = num1Ref.current.value;
        const num2 = num2Ref.current.value;
        //dispatch(incrementBy2Nums(Number(num1), Number(num2)));
        dispatch(incrementBy2Nums(Number(num1), Number(num2)));
    };

    return (
        <>
             <h2>Count: {count}</h2>
             <button onClick={() => dispatch(increment())}> + </button>
             <button onClick={() => dispatch(decrement())} > - </button>
             <button onClick={() => dispatch(reset())} > Reset </button>
             <div>
                <h2>Increment By Number</h2>
                <input ref={numRef} />
                <button onClick={() => addNum()}> Add Number</button>
             </div>
             <div>
                <h2>Increment By 2 Number</h2>
                <input />
                <input />

                <button onClick={() => add2Num()}> Add 2 Numbers</button>
             </div>
        </>
    );
};
export default Counter;