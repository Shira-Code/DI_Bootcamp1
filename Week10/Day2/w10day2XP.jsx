// Exercises XP
// Last Updated: December 5th, 2023

// What You will learn :
// Redux Performance Optimizations
// Enhancing Redux Performance


// 🌟 Exercise 1: Book Inventory Selector
// Scenario:
// You’re tasked with building a simple book inventory management application using Redux. The application maintains information about various books, including their titles, authors, and genres.

// Instructions:
// Set up Redux Store:

// Create a Redux store with necessary middleware and reducers to manage the book inventory state.
// Define Initial State:

// Set up the initial state with an array of books. Each book should have properties like id, title, author, and genre.
// Selectors Creation:

// Use createSelector from @reduxjs/toolkit to create selectors for filtering books based on their genres.
// Create a selector named selectBooks to retrieve all books from the state.
// Create selectors for specific genres such as selectHorrorBooks, selectFantasyBooks, and selectScienceFictionBooks.
// These selectors should filter and return books belonging to their respective genres.
// Component Implementation:

// Create a React component BookList to display the book inventory.
// Utilize the selectors you created to display different book lists based on genres.
// Display buttons or a dropdown to switch between different genres, triggering the display of books from that genre using appropriate selectors.
// UI Interaction:

// Implement UI interactions to demonstrate selector functionality.
// As users switch between genres, the displayed book list should dynamically update according to the selected genre.
// Test and Validate:

// Test the functionality by switching between different genres and ensuring that the book list updates correctly based on the selected genre.


// Additional Notes:
// Utilize Redux Toolkit for setting up the store and creating reducers.
// Make use of mock data or a hardcoded array of books to simulate the book inventory.
// Use React-Redux to connect your React components with the Redux store.
// Ensure clear separation of concerns between Redux logic and UI components.


// This exercise introduces beginners to createSelector and its usage in filtering and extracting specific data from the Redux store based on different criteria, offering a hands-on experience in implementing selectors for managing state in Redux applications.

//store.js
// import { configureStore } from '@reduxjs/toolkit';
// import booksReducer from '../features/books/booksSlice';

// export const store = configureStore({
//   reducer: {
//     books: booksReducer,
//   },
// });

//App.jsx
// import React from 'react';
// import BookList from './components/BookList';

// const App = () => {
//   return (
//     <div>
//       <BookList />
//     </div>
//   );
// };

// export default App;

//main.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

//bookSlice.js

// import { createSlice } from '@reduxjs/toolkit';


// const initialState = {
//   books: [
//     { id: 1, title: 'Dracula', author: 'Bram Stoker', genre: 'Horror' },
//     { id: 2, title: 'Frankenstein', author: 'Mary Shelley', genre: 'Horror' },
//     { id: 3, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
//     { id: 4, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
//     { id: 5, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fantasy' },
//   ],
// };

// const booksSlice = createSlice({
//   name: 'books',
//   initialState,
//   reducers: {},
// });

// export default booksSlice.reducer;

//booksSelectors.js
// import { createSelector } from '@reduxjs/toolkit';


// export const selectBooks = (state) => state.books.books;


// export const selectHorrorBooks = createSelector(
//   [selectBooks],
//   (books) => books.filter((book) => book.genre === 'Horror')
// );

// export const selectFantasyBooks = createSelector(
//   [selectBooks],
//   (books) => books.filter((book) => book.genre === 'Fantasy')
// );

// export const selectScienceFictionBooks = createSelector(
//   [selectBooks],
//   (books) => books.filter((book) => book.genre === 'Science Fiction')
// );

//BookList.jsx
// src/components/BookList.jsx
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks } from '../features/books/booksSelectors';

// const BookList = () => {
//   const [genre, setGenre] = useState('All');

//   const horrorBooks = useSelector(selectHorrorBooks);
//   const fantasyBooks = useSelector(selectFantasyBooks);
//   const scienceFictionBooks = useSelector(selectScienceFictionBooks);

//   const getBooksByGenre = () => {
//     switch (genre) {
//       case 'Horror':
//         return horrorBooks;
//       case 'Fantasy':
//         return fantasyBooks;
//       case 'Science Fiction':
//         return scienceFictionBooks;
//       default:
//         return [...horrorBooks, ...fantasyBooks, ...scienceFictionBooks];
//     }
//   };

//   const booksToDisplay = getBooksByGenre();

//   return (
//     <div>
//       <h1>Book Inventory</h1>
//       <select value={genre} onChange={(e) => setGenre(e.target.value)}>
//         <option value="All">All</option>
//         <option value="Horror">Horror</option>
//         <option value="Fantasy">Fantasy</option>
//         <option value="Science Fiction">Science Fiction</option>
//       </select>

//       <ul>
//         {booksToDisplay.map((book) => (
//           <li key={book.id}>
//             {book.title} by {book.author} ({book.genre})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BookList;


