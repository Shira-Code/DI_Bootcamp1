// Exercises XP
// Last Updated: March 7th, 2024

// What we will learn
// Create a React App
// JSX
// Styling in React


// NOTE: You will use the same React App for all the Exercises XP
// Create a React App and start your app

// Exercise 1: with JSX
// Instructions
// In the App.js file, display a “Hello World!” message in a paragraph.
// Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;, and render it on the page.
// Create a constant variable named sum, which value is 5 + 5. Render on the page, the following sentence "React is <sum> times better with JSX"

// app.js
// import React from 'react';

// export function App() {
//   const myElement = <h1>I Love JSX!</h1>;
//   const sum = 5 + 5;

//   return (
//     <div>
//       <p>Hello World!</p>
//       {myElement}
//       <p>React is {sum} times better with JSX</p>
//     </div>
//   );
// }

// export default App;



// Exercise 2 : Object
// Instructions
// Using the following object:

// const user = {
//   firstName: 'Bob',
//   lastName: 'Dylan',
//   favAnimals : ['Horse','Turtle','Elephant','Monkey']
// };
// In the App.js file, render the first name and the last name of the user in two <h3>.
// In a separate Javascript file named UserFavoriteAnimals.js, create a new Class Component called UserFavoriteAnimals. Use props to pass the favAnimals array to the UserFavoriteAnimals component.
// In the UserFavoriteAnimals component, use the map method to create <li> tags in a <ul> tag.
// Each <li> corresponds to one animal from the favAnimals array.
// Display the <li> tags. Tip : You can use the second parameter of the map function as a key to uniquely identify each HTML item
// //app.js
// import React from 'react';
// import './App.css';
// import UserFavoriteAnimals from './UserFavoriteAnimals';

// function App() {
//   const user = {
//     firstName: 'Bob',
//     lastName: 'Dylan',
//     favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
//   };

//   return (
//     <div className="App">
//       <h3>{user.firstName}</h3>
//       <h3>{user.lastName}</h3>
//       {}
//       <UserFavoriteAnimals favAnimals={user.favAnimals} />
//     </div>
//   );
// }

// export default App;

// // UserFavoriteAnimals.js
// import React, { Component } from 'react';

// class UserFavoriteAnimals extends Component {
//   render() {
//     const { favAnimals } = this.props;

//     return (
//       <div>
//         <h3>Favorite Animals:</h3>
//         <ul>
//           {favAnimals.map((animal, index) => (
//             <li key={index}>{animal}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default UserFavoriteAnimals;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';  // Ensure you're importing App like this

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



// Exercise 3 : HTML Tags in React
// Instructions
// PART I:

// In a separate Javascript file, named Exercise3.js, create a new Class Component called Exercise that contains some HTML tags.
// create a <h1> tag and set its color to red, and the background color to lightblue.
// create a paragraph, a link, a form, an image and a list.
// Import Exercise component to the App.js file and display it.

// Expected Output:(without the grey border)
// Exercise3.js
// import React, { Component } from 'react';

// class Exercise extends Component {
//   render() {
//     return (
//       <div>
//         <h1 style={{ color: 'red', backgroundColor: 'lightblue' }}>This is a Header</h1>
//         <p>This is a paragraph</p>
//         <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">This is a Link</a>
//         <form>
//           <h3>This is a Form</h3>
//           <label htmlFor="name">Enter your name:</label>
//           <br></br>
//           <input type="text" id="name" name="name" />
//           <input type="submit" value="Submit" />
//         </form>
//         <h3>This is an Image</h3>
//         <img 
            
//             src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" 
//             alt="placeholder"
//             style={{ width: '150px', height: 'auto' }}  />
//         <div>
//         <h3>This is a List</h3>
//         <ul style={{ paddingLeft: '20px', listStylePosition: 'inside' }}>
//           <li style={{ marginLeft: '10px' }}>Coffee</li>
//           <li style={{ marginLeft: '10px' }}>Tea</li>
//           <li style={{ marginLeft: '10px' }}>Milk</li>
//         </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default Exercise;

//index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//app.js
// import React from 'react';
// import './App.css';
// import Exercise from './Exercise3'; 

// function App() {
//   return (
//     <div className="App">
//       <Exercise />  {}
//     </div>
//   );
// }

// export default App;










// PART II:

// Add the below object to the component Exercise. Use this object to style the <h1>.
// const style_header = {
//   color: "white",
//   backgroundColor: "DodgerBlue",
//   padding: "10px",
//   fontFamily: "Arial"
// };

// PART III:

// Create a new css file named Exercise.css and import it in your Exercise component.
// Add the following CSS properties to the CSS file, and apply them to the paragraph tag:
// .para {
//   background-color: #282c34;
//   color: white;
//   padding: 40px;
//   font-family: Arial;
//   text-align: center;
// }

// // Exercise3.js
// import React, { Component } from 'react';
// import './Exercise.css'; 

// class Exercise extends Component {
//   render() {
//     const style_header = {
//         color: "white",
//         backgroundColor: "DodgerBlue",
//         padding: "10px",
//         fontFamily: "Arial"
//       };

//     return (
//       <div>
//         <h1 style={style_header}>This is a Header</h1>
//         <p className="para">This is a paragraph</p>
       
//         <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">This is a Link</a>
//         <form>
//           <h3>This is a Form</h3>
//           <label htmlFor="name">Enter your name:</label>
//           <br></br>
//           <input type="text" id="name" name="name" />
//           <input type="submit" value="Submit" />
//         </form>
//         <h3>This is an Image</h3>
//         <img 
            
//             src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" 
//             alt="placeholder"
//             style={{ width: '150px', height: 'auto' }}  />
//         <div>
//         <h3>This is a List</h3>
//         <ul style={{ paddingLeft: '20px', listStylePosition: 'inside' }}>
//           <li style={{ marginLeft: '10px' }}>Coffee</li>
//           <li style={{ marginLeft: '10px' }}>Tea</li>
//           <li style={{ marginLeft: '10px' }}>Milk</li>
//         </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default Exercise; 

// //app.js

// import React from 'react';
// import './App.css';
// import Exercise from './Exercise3'; 

// function App() {
//   return (
//     <div className="App">
//       <Exercise />  {}
//     </div>
//   );
// }

// export default App;

// //index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// //Exercise.css

// .para {
//     background-color: #282c34;
//     color: white;
//     padding: 40px;
//     font-family: Arial;
//     text-align: center;
//   }