// import React from 'react';
// import Color from './Components/Color.jsx'; 

// const App = () => {
//     return (
//         <div>
//             <h1>My React App</h1>
//             <Color /> {}
//         </div>
//     );
// };

// export default App;
import React, { useState } from 'react';
import './Components/styles.css';  

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const addVote = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages);
  };

  return (
    <div className="container">
      <h1>Vote for your favorite language</h1>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <span>{language.name}: {language.votes} votes</span>
            <button onClick={() => addVote(index)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
