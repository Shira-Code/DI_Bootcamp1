// import { useState } from "react";
// import { text } from "stream/consumers";
// import Counter from "./components/Counter";
// import CounterButton from "./components/CounterButton"; 
// create a form with:
//   1. input text
//2.  input submit
//3.  input select with options
//4. textarea
//5.  checkbox w/console log if checkbox is selected true or false
// console log the input value when submitting the form
import { useState } from 'react'
import './App.css';
function App() {

  // const [name, setName] = useState("");
  // const [num, setNum] = useState("");
  // const [text, setText] = useState("");
  // const [yesno, setYestNo] = useState(false);

  const [inputs, setInputs] = useState({
    name:'',
    num:'',
    text:'',
    yesno: false
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(name, e.target.name.value);
    console.log(inputs);
  };

  const handleInputs = (e) => {
    console.log(e.target.name, e.target.type);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setInputs({ ...inputs, [e.target.name]: value });
  };

  return (
    <>
      <h2>Forms in React</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input 
          name='name'
          placeholder='Name'
          onChange={(e) => handleInputs(e)} 
        />
        <br />   
        <select name ='num' onChange={(e) => setDefaultResultOrder(e.target.value)} />
          <option value={-1}>Please select a number...</option>
        <textarea />
        <br />
        <input type="submit" value='Submit' />
      </form>
    </>
  );
}

export default App;
