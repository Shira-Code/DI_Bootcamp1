Exercises XP
Last Updated: November 29th, 2023

// What we will learn
// React state
// Event handlers
// React Router
// Error Boundary
// JSON


// Exercise 1 : React Router Error Boundary
// Check the demo here http://di-react-router-error-boundary.surge.sh/



// In a new Javascript file, create an ErrorBoundary Class Component:
// Create a state with a property named hasError, set by default to false.
// Use a componentDidCatch() method to set the value of the hasError property.

// Install React Router Dom in your app and check out the NavLink documentation

// In the App.js file, add this line:

// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";


// You can also install React Bootstrap in your app. In the App.js file, add this line:

// import "bootstrap/dist/css/bootstrap.min.css";


// In the App.js file, display a Bootstrap navbar, containing three React Router <NavLink></NavLink>:

// the first one redirects to /
// the second one redirects to /profile
// the third one redirects to /shop

// In the App.js file, create three functional components : HomeScreen, ProfileScreen, and ShopScreen.

// HomeScreen and will display a header tag
// home
// ProfileScreen will display a header tag
// profile
// ShopScreen will throw an error
// shop


// 7. Add a Route for each of the functional component. Each one has a different path.


// 8. Wrap each of the functional component with the ErrorBoundary component.

//app.jsx
// import React from 'react';
// import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
// import ErrorBoundary from './components/ErrorBoundary'; 
// import './App.css';

// const HomeScreen = () => <h1>Home</h1>;
// const ProfileScreen = () => <h1>Profile</h1>;
// const ShopScreen = () => {
//   throw new Error("Shop encountered an error!");
// };

// function App() {
//   return (
//     <BrowserRouter>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/">Home</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/profile">Profile</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/shop">Shop</NavLink>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route 
//           path="/" 
//           element={
//             <ErrorBoundary>
//               <HomeScreen />
//             </ErrorBoundary>
//           } 
//         />
//         <Route 
//           path="/profile" 
//           element={
//             <ErrorBoundary>
//               <ProfileScreen />
//             </ErrorBoundary>
//           } 
//         />
//         <Route 
//           path="/shop" 
//           element={
//             <ErrorBoundary>
//               <ShopScreen />
//             </ErrorBoundary>
//           } 
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// //ErrorBoundary.jsx
// import React, { Component } from 'react';

// class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error("Error caught in ErrorBoundary:", error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong.</h1>;
//     }

//     return this.props.children; 
//   }
// }

// export default ErrorBoundary; 

//app.css
// body {
//     margin: 0;
//     display: flex;               
//     flex-direction: column;     
//     align-items: center;        
//     justify-content: flex-start; 
//     height: 100vh;              
//   }
  
//   .output-container {
//     text-align: center;         
//     margin-top: 10px;           
//   }
  

// Exercise 2 : Display JSON Data in React JS
// Create a json file, and copy/paste this data. https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%208/Day4/Exercises%20XP%20Ninja/Exercise%201-%20Display%20JSON%20Data%20in%20React%20JS/posts.json

// Create a component named PostList.js that displays the title and the content of each object from the json file.

// Render the PostList component in your App.js file.

// Expected output (without the grey border):

// App.jsx
// import React from 'react';
// import PostList from './components/PostList'; // Adjust the path if needed
// import './App.css'; // Import your CSS file

// const App = () => {
//     return (
//         <div>
//             <PostList />
//         </div>
//     );
// };

// export default App;

//// src/components/PostList.js
// import React, { useEffect, useState } from 'react';
// import postsData from '../posts.json'; 

// const PostList = () => {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         setPosts(postsData); 
//     }, []);

//     return (
//         <div style={{ textAlign: 'center' }}>
//             <h1>Hi This is a Title</h1>
//             {posts.map((post, index) => (
//                 <div key={index} style={{ margin: '20px 0', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
//                     <h2>{post.title}</h2>
//                     <p>{post.content}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default PostList;

//posts.json
// [ 
//     {
//         "id": 1,
//         "title": "Hello World",
//         "content": "Try Reactjs is awesome. Can't wait to learn more",
//         "date": "12-04-2017",
//         "slug": "hello-world"
//     },
//     {
//         "id": 2,
//         "title": "Setup React",
//         "content": "Setting up react is easy. Learn more about it!",
//         "date": "1-28-2018",
//         "slug": "setup-react"
//     }
// ]

//App.css
// body {
//     margin: 0;
//     display: flex;               
//     flex-direction: column;     
//     align-items: center;        
//     justify-content: flex-start; 
//     height: 100vh;              
//   }
  
//   .output-container {
//     text-align: center;         
//     margin-top: 10px;           
//   }
  




// Exercise 3 : Display JSON Data and parse it
// Create a json file and copy/paste this data. https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%208/Day4/Exercises%20XP%20Ninja/Exercise%202-%20Display%20JSON%20Data%20in%20React%20JS/data.json The file contains complex data with inner arrays up-to first and second level.

// In a new Javascript file, create a Class Component named Example1 that displays the SocialMedias array data.

// In a new Javascript file, create a Class Component named Example2 that displays the Skills data.

// In a new Javascript file, create a Class Component named Example3 that displays the Experiences array data. Add a key attribute to every new <div>.

// Import those components to the App.js file.

// src/App.js
// import React from 'react';
// import Example1 from './components/Example1';
// import Example2 from './components/Example2';
// import Example3 from './components/Example3';
// import './App.css'; // Import your CSS file

// const App = () => {
//     return (
//         <div>
//             <Example1 />
//             <Example2 />
//             <Example3 />
//         </div>
//     );
// };

// export default App;

// src/components/Example1.js
// import React, { Component } from 'react';
// import data from '../data.json'; 

// class Example1 extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Social Media Links</h2>
//                 <ul>
//                     {data.SocialMedias.map((link, index) => (
//                         <li key={index}>
//                             <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }

// export default Example1;

// src/components/Example2.js
// import React, { Component } from 'react';
// import data from '../data.json'; 

// class Example2 extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Skills</h2>
//                 {data.Skills.map((skillCategory, index) => (
//                     <div key={index}>
//                         <h3>{skillCategory.Area}</h3>
//                         <ul>
//                             {skillCategory.SkillSet.map((skill, skillIndex) => (
//                                 <li key={skillIndex}>
//                                     {skill.Name} {skill.Hot ? '🔥' : ''}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }

// export default Example2;

// src/components/Example3.js
// import React, { Component } from 'react';
// import data from '../data.json'; 

// class Example3 extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Experience</h2>
//                 {data.Experiences.map((experience, index) => (
//                     <div key={index}>
//                         <h3>{experience.companyName}</h3>
//                         <img src={experience.logo} alt={`${experience.companyName} logo`} style={{ width: '50px', height: '50px' }} />
//                         <a href={experience.url} target="_blank" rel="noopener noreferrer">Company Link</a>
//                         {experience.roles.map((role, roleIndex) => (
//                             <div key={roleIndex}>
//                                 <h4>{role.title}</h4>
//                                 <p>{role.description}</p>
//                                 <p>{role.startDate} - {role.endDate} ({role.location})</p>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }

// export default Example3;

//data.json
// {
//     "SocialMedias": [
    
//       "https://github.com/",
//       "https://www.linkedin.com/",
//       "https://www.facebook.com/"
//     ],
    
//     "Experiences": [
//         {
//           "companyName": "Demo1 Technologies",
//           "logo": "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
//           "url": "https://www.google.com/",
//           "roles": [
//             {
//               "title": "Full Stack Developer",
//               "description": "Built and updated various Chrome Extensions.",
//               "startDate": "2017-01-01",
//               "endDate": "2017-05-01",
//               "location": "New York, USA"
//             }
//           ]
//         },
//         {
//           "companyName": "Demo2 Technologies",
//           "logo": "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
//           "url": "https://www.google.com/",
//           "roles": [
//             {
//               "title": "UI Designer",
//               "description": "Design user-fridendly web page",
//               "startDate": "2016-05-01",
//               "endDate": "2016-09-01",
//               "location": "Beijing, China"
//             }
//           ]
//         }
//       ],
    
//       "Skills": [
//         {
//           "Area": "Programming Language",
//           "SkillSet": [
//             {
//               "Name": "Java",
//               "Hot": true
//             },
//             {
//               "Name": "C#",
//               "Hot": false
//             },
//             {
//               "Name": "Python",
//               "Hot": false
//             }
//           ]
//         },
//         {
//           "Area": "Web-Based Application Development",
//           "SkillSet": [
//             {
//               "Name": "JavaScript (ES5, ES6)",
//               "Hot": true
//             },
//             {
//               "Name": "TypeScript",
//               "Hot": false
//             },
//             {
//               "Name": "HTML5",
//               "Hot": true
//             },
//             {
//               "Name": "CSS (SCSS/SASS)",
//               "Hot": true
//             },
//             {
//               "Name": "React",
//               "Hot": true
//             }
//           ]
//         }      
//       ]
    
//     }

//App.css
// body {
//     margin: 0;
//     display: flex;               
//     flex-direction: column;     
//     align-items: center;        
//     justify-content: flex-start; 
//     height: 100vh;              
//   }
  
//   .output-container {
//     text-align: center;         
//     margin-top: 10px;           
//   }
  




// Exercise 4 : Post JSON Data with React JS
// Go to webhook https://webhook.site/ 
// and copy the link of “Your unique URL”.

// Remember to turn on “Enable CORS” on the webhook website.

// In the App.js file, create an async await function to fetch the json data from the URL you copied.
// Use a POST method and some headers.
// Send this hardcoded stringified json data to your body.
// key1: 'myusername',
// email: 'mymail@gmail.com',
// name: 'Isaac',
// lastname: 'Doe',
// age: 27


// 4. In the App.js file, create a button, that when clicked on, displays the response in the console.


// Expected output in the console after the button was clicked:
// image



// 5. Finally, open the webhook https://webhook.site/
//  site again, and check the output in the API.

// //App.jsx
// import React from 'react';

// const App = () => {
//     const uniqueURL = "https://webhook.site/f57532a6-3299-4378-b81a-b933f2560f5d"; 

//     const postData = async () => {
//         const data = {
//             key1: 'myusername',
//             email: 'mymail@gmail.com',
//             name: 'Isaac',
//             lastname: 'Doe',
//             age: 27
//         };

//         try {
//             const response = await fetch(uniqueURL, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(data)
//             });

//             const text = await response.text(); 
//             console.log("Response status:", response.status);
//             console.log("Response text:", text);

            
//             if (response.ok) {
                
//                 console.log("Received successful response but not JSON:", text);
//             } else {
//                 console.error("Error: Response not OK", response.status);
//             }
//         } catch (error) {
//             console.error("Error posting data:", error);
//         }
//     };

//     return (
//         <div>
//             <button onClick={postData}>Press Me to Post Some Data</button>
//         </div>
//     );
// };

// export default App;

