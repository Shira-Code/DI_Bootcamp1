import { useState, useReducer, useRef } from "react";
import "./App.css";

const initialState = {
  count: 5,
};

const ADD = "1";
const MINUS = "2";
const INPUT_VALUE = "INPUT_VALUE";

const reducer = (state, action) => {
  console.log(action);
  // if (action.type === "INCREMENT") {
  //   return { ...state, count: state.count + 1 };
  // }
  // else if(action.type === 'DECREMENT') {
  //   return { ...state, count: state.count - 1 };
  // }
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + 1 };
    case MINUS:
      return { ...state, count: state.count - 1 };
    case INPUT_VALUE:
      return { ...state, count: state.count + Number(action.payload) };
    default:
      return state;
  }

  // return state;
};

function App() {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);

  const inputRef = useRef();

  const addInputValue = () => {
    const inputNumValue = inputRef.current.value;
    dispatch({ type: INPUT_VALUE, payload: inputNumValue });
  };

  return (
    <>
      <h2>useReducer</h2>
      <div>
        <h2>useState</h2>
        <button onClick={() => setCount((prev) => prev + 1)}> + </button>
        {count}
        <button onClick={() => setCount((prev) => prev - 1)}> - </button>
      </div>
      <div>
        <h2>useReducer</h2>
        <button onClick={() => dispatch({ type: ADD })}> + </button>
        <br />
        <input ref={inputRef} />
        <button onClick={() => addInputValue()}> Add by Input Value </button>
        <br />
        {state.count}
        <br />
        <button onClick={() => dispatch({ type: MINUS })}> - </button>
      </div>
    </>
  );
}

export default App;
