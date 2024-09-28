import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mountain from './pages/Mountain';
import Beaches from './pages/Beaches';
import Birds from './pages/Birds';
import Food from './pages/Food';
import Search from './pages/Search';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/mountain" element={<Mountain />} />
        <Route path="/beaches" element={<Beaches />} />
        <Route path="/birds" element={<Birds />} />
        <Route path="/food" element={<Food />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;
