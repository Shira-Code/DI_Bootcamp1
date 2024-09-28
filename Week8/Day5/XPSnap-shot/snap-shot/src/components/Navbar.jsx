import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <nav>
      <ul>
        <li><Link to="/mountain">Mountain</Link></li>
        <li><Link to="/beaches">Beaches</Link></li>
        <li><Link to="/birds">Birds</Link></li>
        <li><Link to="/food">Food</Link></li>
      </ul>
      {/* Add a search bar */}
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search images..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
