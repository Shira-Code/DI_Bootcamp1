// Exercises XP
// Last Updated: September 22nd, 2023

// What we will learn
// JSX
// Components
// React Lifecycle
// Event Handlers


// NOTE: You will use the same React App for all the Exercises XP
// Create a React App and start your app



// Exercise 1 : Car and components
// Instructions
// Part I : A Car Component

// In App.js create an object const carinfo = {name: "Ford", model: "Mustang"};

// In your React app create a new folder in the src path, name it Components. It should contain a Functional Component named Car.js.

// In the Car.js component render a header with the carInfo model, for example This car is <model>.

// Import the Car.js component to the App.js.
//Car.js
// import React from 'react';

// function Car({ carInfo }) {
//   return (
//     <div>
//       <h2>This car is {carInfo.model}</h2>
//     </div>
//   );
// }

// export default Car;

//App.js
// import React from 'react';
// import Car from './Components/Car';

// const carinfo = { name: "Ford", model: "Mustang" };

// function App() {
//   return (
//     <div>
//       <Car carInfo={carinfo} />
//     </div>
//   );
// }

// export default App;



// Part II : useState Hook

// Use the state hook in the Car component to add a color variable to the state.

// Return the color property, for example This car is <color> <model>.
//app.jsx
// import React from 'react';
// import Car from './Components/Car';

// const carInfo = { name: 'Ford', model: 'Mustang' };

// const App = () => {
//   return (
//     <div>
//       <Car model={carInfo.model} />
//     </div>
//   );
// };

// export default App;

// //car.js
// import React, { useState } from 'react';

// const Car = ({ model }) => {
  
//   const [color, setColor] = useState('red'); 

//   return (
//     <div>
//       {}
//       <h2>This car is a {color} {model}.</h2>

//       {}
//       <button onClick={() => setColor('blue')}>Change color to blue</button>
//     </div>
//   );
// };

// export default Car;



// Part III : Garage

// Create another Functional Component inside your Components folder, called Garage.js.

// Use an attribute to pass a size to the Garage component, <Garage size="small" />.

// Use the Garage component inside the Car component and pass the size ‘small’. The Garage component should render Who lives in my <size> Garage?
//Cars.js
// import React, { useState } from 'react';
// import Garage from './Garage';

// const Car = () => {
//   const carInfo = { name: 'Ford', model: 'Mustang' };
//   const [color] = useState('red');

//   return (
//     <div>
//       <h1>This car is a {color} {carInfo.model}</h1>
//       <Garage size="small" />
//     </div>
//   );
// }

// export default Car;

// //Garage.js
// import React from 'react';

// const Garage = (props) => {
//   return (
//     <div>
//       <h2>Who lives in my {props.size} Garage?</h2>
//     </div>
//   );
// }

// export default Garage;

// //main.js
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';

// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<App />);

// Exercise 2 : Events
// Instructions
// Part I:

// Create a new Functional component named Events.

// Create an arrow function called clickMe. It should alert the string ‘I was clicked’.

// In the return, create a button that when clicked on, calls the clickMe function. Use the onClick event handler.

// Expected output (without the grey border):
// events7

//Events.js

// import React from 'react';

// const Events = () => {
//   const clickMe = () => {
//     alert('I was clicked');
//   };

//   return (
//     <div>
//       <button onClick={clickMe}>Click me</button>
//     </div>
//   );
// };

// export default Events;
//App.jsx

// import React from 'react';
// import Events from './Components/Events';

// function App() {
//   return (
//     <div className="App">
//       <h1>React Event Example</h1>
//       <Events />
//     </div>
//   );
// }

// export default App;



// Part II:

// In the Events Functional component, in the return, create an input tag that has an onKeyDown event handler, that listens to a function called handleKeyDown.

// keyEnter


// When you type something in the input field and press the ‘Enter key’, the handleKeyDown function will check if the ‘Enter key’ was pressed and will alert a message with the input text value:

// keyEnter2

//events.js
// import React, { useState } from 'react';

// const Events = () => {
//   const [inputValue, setInputValue] = useState('');

//   const clickMe = () => {
//     alert('I was clicked');
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       alert(`The ENTER key was pressed, your input is: ${inputValue}`);
//     }
//   };

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <button onClick={clickMe}>Click me</button>
//       <br />
//       <input 
//         type="text" 
//         value={inputValue} 
//         onChange={handleChange} 
//         onKeyDown={handleKeyDown} 
//         placeholder="Press the ENTER key"
//       />
//     </div>
//   );
// };

// export default Events;

// Part III:

// In the Events Functional component, using the state hook, declare a state variable named isToggleOn and set it to true.

// In the return, create a button that has an onClick event that will switch the state variable between ‘ON’ and ‘OFF’

// Create a function that will be called by the onClick event handler. In the function you should toggle the value of the isToggleOn state variable.

// Output for ‘ON’:

// on

// Output for ‘OFF’:

// off
//Events.jsx
// import React, { useState } from 'react';

// const Events = () => {
//   const [isToggleOn, setIsToggleOn] = useState(true);

//   const handleToggle = () => {
//     setIsToggleOn(!isToggleOn);
//   };

//   return (
//     <div>
//       {}
//       <button onClick={handleToggle}>
//         {isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     </div>
//   );
// };

// export default Events;



// Exercise 3 : Phone and components
// Instructions
// Part I : Phone

// Create a new Functional Component named Phone. Use the state hook to create the following state variables:

// brand: "Samsung"
// model: "Galaxy S20"
// color: "black"
// year: 2020


// In the return of the Phone component, display the values of the state variables.


// Import the Phone component and display it in your App.js.

// Expected output (without the grey border):

//app.jsx
// import React from 'react';
// import Phone from './Components/Phone.jsx';

// function App() {
//   return (
//     <div>
//       <Phone />
//     </div>
//   );
// }

// export default App;

// Phone.jsx
// import React, { useState } from 'react';

// function Phone() {
  
//       const [phone, setPhone] = useState({
//         brand: 'Samsung', 
//         model: 'Galaxy S20', 
//         color: 'black', 
//         year: 2020 ,
//       });
    
//   return (
//          <div>
//            <h1>My phone is a {phone.brand}</h1>
//            <p>It is a {phone.color} {phone.model} from {phone.year}.</p>
           
//          </div>
//        );
//   }

// export default Phone;


// Part II : Change the Phone

// In the Phone component create a function named changeColor that updates the state variable to ‘blue’

// In the return, add a button with an onClick event that will call the changeColor function to change the color state variable.

// Expected output (without the grey border):when you click the button

// import React, { useState } from 'react';

// const Phone = () => {
    
//     const [brand, setBrand] = useState("Samsung");
//     const [model, setModel] = useState("Galaxy S20");
//     const [color, setColor] = useState("black"); 
//     const [year, setYear] = useState(2020);

    
//     const changeColor = () => {
//         setColor('blue'); 
//     };

//     return (
//         <div>
//               <h1>My phone is a {brand}</h1>
//               <p>It is a {color} {model} from {year}.</p>
           
//             <button onClick={changeColor}>Change Color</button> {}
//         </div>
//     );
// };

// export default Phone;

// Exercise 4 : useEffect hook
// Instructions
// Create a new Functional Component named Color, with a state variable favoriteColor which value is “red”.

// Output the value in a header tag.

// Expected output (without the grey border):

// red


// Note : The useEffect() hook is called after the component is rendered.
// In the useEffect(), alert “useEffect reached”

// Expected output (without the grey border):

// yellow


// Note: The return is called when a component gets updated. It re-renders the DOM, with the new changes.
// Create a button that when clicked on, calls a function that changes the value of the favoriteColor property to “blue”.

// Expected output (without the grey border):

// blue

//app.jsx
// import React, { useState, useEffect } from 'react';

// const Color = () => {
   
//     const [favoriteColor, setFavoriteColor] = useState("red");

//     useEffect(() => {
//         alert(`useEffect reached: My favorite color is ${favoriteColor}`);
//     }, [favoriteColor]); 

//     const changeColorToBlue = () => {
//         setFavoriteColor("blue");
//     };

//     const changeColorToYellow = () => {
//         setFavoriteColor("yellow");
//     };

//     return (
//         <div>
//             <h1>My favorite color is {favoriteColor}</h1>
//             <button onClick={changeColorToBlue}>Change Color to Blue</button>
//             <button onClick={changeColorToYellow}>Change Color to Yellow</button>
//         </div>
//     );
// };

// export default Color;


