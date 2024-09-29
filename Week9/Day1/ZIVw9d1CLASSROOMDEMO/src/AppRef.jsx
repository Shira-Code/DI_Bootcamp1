import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  // const myRef = useRef()
  // const inputRef = useRef()
  const [count, setCount] = useState(0);

  let name = "Dan";
  const nameRef = useRef("Jonn");

  // console.log(myRef);

  useEffect(() => {
    // console.log(myRef);
  }, []);

  // const showRef = () => {
  //   console.log(inputRef.current.value);
  //   myRef.current.style.backgroundColor = 'yellow'
  // }

  const changeName = () => {
    name = "Anne";
    nameRef.current = "Marry";

    console.log(name);
    console.log(nameRef);
  };

  return (
    <>
      <h2>useRef</h2>
      <h2>Name: {name}</h2>
      <h2>Name Ref: {nameRef.current}</h2>

      <button onClick={changeName}>Change Names</button>
      {/* <input type="text" ref={inputRef}/> */}
      {/* <button onClick={showRef}>Show</button> */}
      <button onClick={() => setCount((count) => count + 1)}>
        Count: {count}
      </button>
    </>
  );
}

export default App;
