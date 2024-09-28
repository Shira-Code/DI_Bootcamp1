Daily Challenge: Calculator
Last Updated: March 7th, 2024


What you will learn:
React
React state
React Component
Event Handler


What you will create
React Calculator

For this challenge, you will receive two numbers from an input element and add both numbers. Display the sum of these numbers on the same page.


calculator



Instructions :
The functionalities:
The user enters two numbers in two different inputs. When he clicks on the button “Add Them”, both numbers are added and the result is displayed on the page

Bonus : In order to make a more universal calculator, add a <select> form, where the user will be able to select the type of operation: addition, substraction, mutiplication or division.

To create a simple React Calculator using **React Vite** for adding two numbers (with a bonus for other operations like subtraction, multiplication, and division), follow these steps:

### Steps to Set Up the Project

1. **Create a New React Vite Project**
   Run these commands in your terminal:

   ```bash
   npm create vite@latest react-calculator --template react
   cd react-calculator
   npm install
   npm run dev
   ```

2. **Create the Calculator Component**

   In the `src` folder, create a file named `Calculator.js` and add the following code:

   ```jsx
   import React, { useState } from "react";

   const Calculator = () => {
     // State for input values and result
     const [num1, setNum1] = useState('');
     const [num2, setNum2] = useState('');
     const [result, setResult] = useState(null);
     const [operation, setOperation] = useState('+'); // default operation is addition

     // Handle input change
     const handleNum1Change = (e) => setNum1(e.target.value);
     const handleNum2Change = (e) => setNum2(e.target.value);

     // Function to perform the selected operation
     const calculateResult = () => {
       const number1 = parseFloat(num1);
       const number2 = parseFloat(num2);

       if (isNaN(number1) || isNaN(number2)) {
         setResult('Please enter valid numbers');
         return;
       }

       let calcResult;
       switch (operation) {
         case '+':
           calcResult = number1 + number2;
           break;
         case '-':
           calcResult = number1 - number2;
           break;
         case '*':
           calcResult = number1 * number2;
           break;
         case '/':
           calcResult = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
           break;
         default:
           calcResult = 'Invalid operation';
       }
       setResult(calcResult);
     };

     return (
       <div style={{ padding: "20px" }}>
         <h2>React Calculator</h2>

         <div style={{ marginBottom: "10px" }}>
           <input
             type="number"
             value={num1}
             onChange={handleNum1Change}
             placeholder="Enter first number"
             style={{ marginRight: "10px" }}
           />
           <input
             type="number"
             value={num2}
             onChange={handleNum2Change}
             placeholder="Enter second number"
           />
         </div>

         <div style={{ marginBottom: "10px" }}>
           <select value={operation} onChange={(e) => setOperation(e.target.value)}>
             <option value="+">Addition (+)</option>
             <option value="-">Subtraction (-)</option>
             <option value="*">Multiplication (*)</option>
             <option value="/">Division (/)</option>
           </select>
         </div>

         <button onClick={calculateResult}>Calculate</button>

         {result !== null && (
           <div style={{ marginTop: "20px" }}>
             <h3>Result: {result}</h3>
           </div>
         )}
       </div>
     );
   };

   export default Calculator;
   ```

3. **Use the Calculator Component in App.js**

   Now, import and use this `Calculator` component in your `App.js` file:

   ```jsx
   import React from "react";
   import Calculator from "./Calculator";
   import "./App.css";

   const App = () => {
     return (
       <div className="App">
         <Calculator />
       </div>
     );
   };

   export default App;
   ```

4. **Style the Calculator (Optional)**
   
   You can add basic CSS styles to `App.css` to make it look more polished:

   ```css
   .App {
     font-family: Arial, sans-serif;
     text-align: center;
     margin-top: 50px;
   }

   input, select, button {
     padding: 10px;
     margin: 10px;
     font-size: 16px;
   }

   button {
     cursor: pointer;
     background-color: #4caf50;
     color: white;
     border: none;
     border-radius: 5px;
   }

   button:hover {
     background-color: #45a049;
   }
   ```

5. **Run the Application**

   Finally, start the Vite development server to see the calculator in action:

   ```bash
   npm run dev
   ```

### How It Works:

- The calculator takes two numbers as input (`num1` and `num2`).
- The `operation` is selected from a dropdown (`+`, `-`, `*`, `/`).
- When the "Calculate" button is clicked, it calls `calculateResult`, 
which performs the selected mathematical operation.
- The result is displayed below the button.

### Bonus: Explanation of Select Form for Operations
The `<select>` dropdown lets the user choose between different mathematical 
operations (addition, subtraction, multiplication, division). Depending on 
the selected operation, the calculator will either add, subtract, multiply, or divide the two numbers entered.