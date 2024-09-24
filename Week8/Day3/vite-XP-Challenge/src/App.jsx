// import React from 'react';
// import BuggyCounter from './Components/BuggyCounter';

// function App() {
//   return (
//     <div className="App">
//       <h1>React Error Boundary Simulation 3</h1>
//       {}
//       <BuggyCounter />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import Color from './Components/Color';

// function App() {
//   return (
//     <div>
//       <Color />
//     </div>
//   );
// }

// export default App;

//Challenge
import React, { useState } from 'react';
import FormComponent from './Components/FormComponents'; // assuming your form component is in FormComponent.js
import './App.css';

const App = () => {
  // Initial state with all properties
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: 'Thailand',
    nutsFree: false,
    lactoseFree: false,
    vegan: false,
  });

  // Handle form changes
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission (this could be expanded based on requirements)
  const handleSubmit = (event) => {
    event.preventDefault();
    const queryString = Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
    console.log(`Submitted data: ${queryString}`);
    // You could navigate or append this to the URL if required
  };

  return (
    <div>
      <FormComponent data={data} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
