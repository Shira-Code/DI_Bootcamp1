// Mini-Project Day - Snap Shot
// Last Updated: March 7th, 2024


// What you will learn:
// React
// React state
// React Component
// React Router
// Event Handler


// What you will create
// Build a Snap Shot Page


// snapshot


// Check out the demo here https://yog9.github.io/SnapShot/#/SnapScout/mountain



// Instructions
// Snap Shot is a gallery created using React and React Router.
// The Routes need to be setup for four default pages and a search page.
// The images are displayed using an Image API, you could use the Pexel API
// Sign in to Pexel, receive an API KEY and start making requests.

// The functionalities
// The user can search for a specific image type. As soon as the user click on the button, you will display 30 images corresponding to the category.
// The user can also click on one of the 4 categories that you present on the page. In the demo the categories are Mountain,Beaches,Birds and Food but fell free to add your own personal categories.
// When the user hovers on a image, add some nice CSS transitions.

// Bonus: Add some kind of pagination, so on a click of a button, the user will be able to change the number of images displayed on the page.
// Good luck!

// npm create vite@latest snap-shot
//npm install react-router-dom axios
// npm install axios
//npm install -D tailwindcss
// run the app npm install
// start server npm run dev

// //app.jsx
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Mountain from './pages/Mountain';
// import Beaches from './pages/Beaches';
// import Birds from './pages/Birds';
// import Food from './pages/Food';
// import Search from './pages/Search';


// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/mountain" element={<Mountain />} />
//         <Route path="/beaches" element={<Beaches />} />
//         <Route path="/birds" element={<Birds />} />
//         <Route path="/food" element={<Food />} />
//         <Route path="/search/:query" element={<Search />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

//gallery.jsx
// import React from 'react';

// const Gallery = ({ images }) => {
//   return (
//     <div className="gallery">
//       {images.map((image) => (
//         <div key={image.id} className="image-card">
//           <img src={image.src.medium} alt={image.photographer} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Gallery;

//api.jsx
// import axios from 'axios';

// const API_KEY = '79NpwIGCaCBqzEy2sBjTi0c28cu1jGcQzv1EMrz2TBIg18oB9hvoxGZR';

// export const fetchImages = async (query) => {
//   const response = await axios.get(`https://api.pexels.com/v1/search`, {
//     headers: {
//       Authorization: API_KEY,
//     },
//     params: {
//       query: query,
//       per_page: 30,
//     },
//   });
//   return response.data.photos;
// };

//navbar.jsx
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/search/${searchTerm}`);
//     }
//   };

//   return (
//     <nav>
//       <ul>
//         <li><Link to="/mountain">Mountain</Link></li>
//         <li><Link to="/beaches">Beaches</Link></li>
//         <li><Link to="/birds">Birds</Link></li>
//         <li><Link to="/food">Food</Link></li>
//       </ul>
//       {/* Add a search bar */}
//       <form onSubmit={handleSearchSubmit}>
//         <input
//           type="text"
//           placeholder="Search images..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//     </nav>
//   );
// };

// export default Navbar;

//beaches.jsx
// import React, { useEffect, useState } from 'react';
// import { fetchImages } from '../api';
// import Gallery from '../components/Gallery';

// const Beaches = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const getImages = async () => {
//       const photos = await fetchImages('beaches');
//       setImages(photos);
//     };
//     getImages();
//   }, []);

//   return (
//     <div>
//       <h1>Beach Images</h1>
//       <Gallery images={images} />
//     </div>
//   );
// };

// export default Beaches;

//birds.jsx
// import React, { useEffect, useState } from 'react';
// import { fetchImages } from '../api';
// import Gallery from '../components/Gallery';

// const Birds = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const getImages = async () => {
//       const photos = await fetchImages('birds');
//       setImages(photos);
//     };
//     getImages();
//   }, []);

//   return (
//     <div>
//       <h1>Bird Images</h1>
//       <Gallery images={images} />
//     </div>
//   );
// };

// export default Birds;

//food.jsx
// import React, { useEffect, useState } from 'react';
// import { fetchImages } from '../api';
// import Gallery from '../components/Gallery';

// const Food = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const getImages = async () => {
//       const photos = await fetchImages('food');
//       setImages(photos);
//     };
//     getImages();
//   }, []);

//   return (
//     <div>
//       <h1>Food Images</h1>
//       <Gallery images={images} />
//     </div>
//   );
// };

// export default Food;

//mountain.jsx
// import React, { useEffect, useState } from 'react';
// import { fetchImages } from '../api';
// import Gallery from '../components/Gallery';

// const Mountain = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const getImages = async () => {
//       const photos = await fetchImages('mountain');
//       setImages(photos);
//     };
//     getImages();
//   }, []);

//   return (
//     <div>
//       <h1>Mountain Images</h1>
//       <Gallery images={images} />
//     </div>
//   );
// };

// export default Mountain;

//search.jsx
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchImages } from '../api';
// import Gallery from '../components/Gallery';

// const Search = () => {
//   const { query } = useParams();
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const getImages = async () => {
//       const photos = await fetchImages(query);
//       setImages(photos);
//     };
//     getImages();
//   }, [query]);

//   return (
//     <div>
//       <h1>Search Results for: {query}</h1>
//       <Gallery images={images} />
//     </div>
//   );
// };

// export default Search;

//index.html
// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <link rel="icon" type="image/svg+xml" href="/vite.svg" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Vite + React</title>
//   </head>
//   <body>
//     <div id="root"></div>
//     <script type="module" src="/src/main.jsx"></script>
//   </body>
// </html>


