// Daily Challenge: Calculator
// Last Updated: March 7th, 2024


// What you will learn:
// React
// React state
// React Component
// Event Handler


// What you will create
// React Calculator

// For this challenge, you will receive two numbers from an input element and add both numbers. Display the sum of these numbers on the same page.


// calculator



// Instructions :
// The functionalities:
// The user enters two numbers in two different inputs. When he clicks on the button “Add Them”, both numbers are added and the result is displayed on the page

// Bonus : In order to make a more universal calculator, add a <select> form, where the user will be able to select the type of operation: addition, substraction, mutiplication or division.

//app.jsx
// import React from 'react';
// import Calculator from './components/Calculator';
// import './style.css'; // Ensure this is imported if you're styling

// const App = () => {
//   return (
//     <div>
//       <Calculator />
//     </div>
//   );
// };

// export default App;

//calculator.jsx
// import React, { useState } from 'react';
// import '../style.css';

// const Calculator = () => {
//   const [num1, setNum1] = useState('');
//   const [num2, setNum2] = useState('');
//   const [result, setResult] = useState(null);
//   const [operation, setOperation] = useState('add');

//   const handleCalculate = () => {
//     let calculatedResult;
//     const number1 = parseFloat(num1);
//     const number2 = parseFloat(num2);

//     if (isNaN(number1) || isNaN(number2)) {
//       alert("Please enter valid numbers in both fields.");
//       return;
//     }

//     switch (operation) {
//       case 'add':
//         calculatedResult = number1 + number2;
//         break;
//       case 'subtract':
//         calculatedResult = number1 - number2;
//         break;
//       case 'multiply':
//         calculatedResult = number1 * number2;
//         break;
//       case 'divide':
//         calculatedResult = number2 !== 0 ? number1 / number2 : "Cannot divide by zero!";
//         break;
//       default:
//         calculatedResult = 0;
//     }

//     setResult(calculatedResult);
//   };

//   return (
//     <div className="calculator">
//       <h1>React Calculator</h1>
//       <input
//         type="number"
//         value={num1}
//         onChange={(e) => setNum1(e.target.value)}
//         placeholder="First Number"
//       />
//       <input
//         type="number"
//         value={num2}
//         onChange={(e) => setNum2(e.target.value)}
//         placeholder="Second Number"
//       />
//       <select onChange={(e) => setOperation(e.target.value)} value={operation}>
//         <option value="add">Addition</option>
//         <option value="subtract">Subtraction</option>
//         <option value="multiply">Multiplication</option>
//         <option value="divide">Division</option>
//       </select>
//       <button onClick={handleCalculate}>Calculate</button>
//       {result !== null && <h2>Result: {result}</h2>}
//     </div>
//   );
// };

// export default Calculator;

//style.css
// .calculator {
//   text-align: center;
//   margin: 20px;
//   background-color: blueviolet;
// }

// input {
//   margin: 5px;
//   padding: 10px;
// }

// button {
//   padding: 10px 15px;
//   margin: 10px;
//   background-color: indigo;
// }

// h2 {
//   margin-top: 20px;
// }

//index.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

