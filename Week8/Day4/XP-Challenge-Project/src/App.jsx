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

// src/App.js

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

//exercise 3
// src/App.js
// // src/App.js
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

//exercise 4
// import React from 'react';

// const App = () => {
//     const uniqueURL = "https://webhook.site/f57532a6-3299-4378-b81a-b933f2560f5d"; // Replace with your unique URL

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
