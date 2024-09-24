// Daily Challenge : Form Container
// Last Updated: September 22nd, 2023

// What You will learn :
// JSX
// Components
// React State
// Forms


// Instructions : React Form Container
// image

// Check the demo

// In this challenge you will process Form data as the user enters or selects any option of the given form.

// In the App.js You will create a stateful component with props.

// Create a function named handleChange:
// that retrieves the event.target of the inputs.
// and checks the status of the checkboxes (ie. “checked” or not). Use a ternary operator.

// Render a FormComponent that displays the form, and the value of the inputs.

// Expected Output:





// 4. On submit you will pass the entered data in the URL. This should be the output in the url:

// http://localhost:3000/?firstName=John&lastName=Doe&age=25&gender=male&destination=Japan&lactoseFree=on 


// What You will learn :
// JSX
// Components
// React State
// Forms


// Instructions : React Form Container

// with the same design as this demo https://di-form-challenge.surge.sh/

// In this challenge you will process Form data as the user enters or selects any option of the given form.

// In the App.js You will create a stateful component with props.

// Create a function named handleChange:
// that retrieves the event.target of the inputs.
// and checks the status of the checkboxes (ie. “checked” or not). Use a ternary operator.

// Render a FormComponent that displays the form, and the value of the inputs.

// Expected Output each on a separate line:
// "Entered information", "Your Name: Jon Doe", "Your gender: Male", "Your destination: Japan", "Your dietary restrictions:",  "**Nuts Free: NO", "**Lactose Free: Yes", "Vegan Meal: No"




// 4. On submit you will pass the entered data in the URL. This should be the output in the url:

// http://localhost:3000/?firstName=John&lastName=Doe&age=25&gender=male&destination=Japan&lactoseFree=on 

//app.js
// import React, { useState } from 'react';
// import FormComponent from './Components/FormComponents'; // assuming your form component is in FormComponent.js
// import './App.css';

// const App = () => {
 
//   const [data, setData] = useState({
//     firstName: '',
//     lastName: '',
//     age: '',
//     gender: '',
//     destination: 'Thailand',
//     nutsFree: false,
//     lactoseFree: false,
//     vegan: false,
//   });

 
//   const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

  
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const queryString = Object.keys(data)
//       .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
//       .join('&');
//     console.log(`Submitted data: ${queryString}`);
    
//   };

//   return (
//     <div>
//       <FormComponent data={data} handleChange={handleChange} handleSubmit={handleSubmit} />
//     </div>
//   );
// };

// export default App;

//FormComponents.jsx
// import React from 'react';

// const FormComponent = ({ data, handleChange, handleSubmit }) => {
//   return (
//     <div className="inputForm">
//       <h1>Sample form</h1>
//       <form onSubmit={handleSubmit}>
//         <label className="text">
//           First Name:
//           <input
//             type="text"
//             name="firstName"
//             value={data.firstName}
//             onChange={handleChange}
//             className="text"
//           />
//         </label>
//         <br />
//         <label className="text">
//           Last Name:
//           <input
//             type="text"
//             name="lastName"
//             value={data.lastName}
//             onChange={handleChange}
//             className="text"
//           />
//         </label>
//         <br />
//         <label className="text">
//           Age:
//           <input
//             type="number"
//             name="age"
//             value={data.age}
//             onChange={handleChange}
//             className="text"
//           />
//         </label>
//         <br />
//         <label className="radiobutton">
//           Gender:
//           <input
//             type="radio"
//             name="gender"
//             value="male"
//             checked={data.gender === 'male'}
//             onChange={handleChange}
//             className="radiobutton"
//           /> Male
//           <input
//             type="radio"
//             name="gender"
//             value="female"
//             checked={data.gender === 'female'}
//             onChange={handleChange}
//             className="radiobutton"
//           /> Female
//         </label>
//         <br />
//         <label className="destination-header">Your Destination:</label>
//         <select
//           name="destination"
//           value={data.destination}
//           onChange={handleChange}
//           className="destination-input"
//         >
//           <option value="Thailand">Thailand</option>
//           <option value="Japan">Japan</option>
//           <option value="Brazil">Brazil</option>
//         </select>
//         <br />
//         <label className="restrictions-title">Dietary Restrictions:</label>
//         <br />
//         <label className="restrictions">
//           <input
//             type="checkbox"
//             name="nutsFree"
//             checked={data.nutsFree}
//             onChange={handleChange}
//           /> Nuts Free
//         </label>
//         <br />
//         <label className="restrictions">
//           <input
//             type="checkbox"
//             name="lactoseFree"
//             checked={data.lactoseFree}
//             onChange={handleChange}
//           /> Lactose Free
//         </label>
//         <br />
//         <label className="restrictions">
//           <input
//             type="checkbox"
//             name="vegan"
//             checked={data.vegan}
//             onChange={handleChange}
//           /> Vegan Meal
//         </label>
//         <br />
//         <button type="submit" className="submit">Submit</button>
//       </form>

//       <div className="entered-info">
//         <h2>Entered information:</h2>
//         <p>Your Name: {data.firstName} {data.lastName}</p>
//         <p>Your Gender: {data.gender}</p>
//         <p>Your Destination: {data.destination}</p>
//         <p>Your Dietary Restrictions:</p>
//         <p>**Nuts Free: {data.nutsFree ? "YES" : "NO"}</p>
//         <p>**Lactose Free: {data.lactoseFree ? "YES" : "NO"}</p>
//         <p>**Vegan Meal: {data.vegan ? "YES" : "NO"}</p>
//       </div>
//     </div>
//   );
// };

// export default FormComponent;

//App.css
// body {
//     margin: 0;
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }
  
//   code {
//     font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
//   }
  
//   .inputForm {
//     background-color: #deb887;
//     margin: 0 auto;
//     padding: 20px;
//     width: 100%;
//     max-width: 500px; 
//     box-sizing: border-box;
//   }
  
//   h1 {
//     background-color: #3b3636;
//     color: #fff;
//     padding: 10px;
//     margin: 0;
//   }
  
//   .text {
//     margin: 8px 0 8px 10px;
//     width: 100%; 
//     max-width: 450px; 
//     border-radius: 3px;
//     height: 25px;
//     font-weight: 700;
//   }
  
//   .radiobutton {
//     margin-left: 10px;
//     height: 20px;
//   }
  
//   .destination-header {
//     font-weight: 600;
//     margin: 10px;
//   }
  
//   .destination-input {
//     margin-left: 10px;
//     font-weight: 700;
//   }
  
//   .restrictions-title {
//     margin-left: 10px;
//     font-weight: 600;
//   }
  
//   .restrictions {
//     margin-left: 10px;
//   }
  
//   .submit {
//     padding: 10px;
//     width: 100px;
//     margin: 10px;
//     position: relative;
//     left: 10px;
//     font-weight: 700;
//     font-size: 14px;
//     cursor: pointer;
//   }
  
//   .entered-info {
//     background-color: #1e5555;
//     color: #fff;
//   }
  
//   .entered-info h2 {
//     margin: 10px;
//     padding: 10px;
//     font-weight: 650;
//   }
  
//   .entered-info p {
//     font-size: 18px;
//     margin-left: 20px;
//     font-style: oblique;
//   }
  
//   .restrictions {
//     margin-left: 30px;
//     padding-bottom: 25px;
//   }
  
 
//   @media (min-width: 768px) {
//     .inputForm {
//       max-width: 600px;
//     }
//     .text {
//       max-width: 550px;
//     }
//     .submit {
//       width: 150px;
//     }
//   }
  