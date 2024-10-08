// src/components/BookList.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks } from '../features/books/booksSelectors';

const BookList = () => {
  const [genre, setGenre] = useState('All');

  const horrorBooks = useSelector(selectHorrorBooks);
  const fantasyBooks = useSelector(selectFantasyBooks);
  const scienceFictionBooks = useSelector(selectScienceFictionBooks);

  const getBooksByGenre = () => {
    switch (genre) {
      case 'Horror':
        return horrorBooks;
      case 'Fantasy':
        return fantasyBooks;
      case 'Science Fiction':
        return scienceFictionBooks;
      default:
        return [...horrorBooks, ...fantasyBooks, ...scienceFictionBooks];
    }
  };

  const booksToDisplay = getBooksByGenre();

  return (
    <div>
      <h1>Book Inventory</h1>
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="All">All</option>
        <option value="Horror">Horror</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>

      <ul>
        {booksToDisplay.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} ({book.genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
