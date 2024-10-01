import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Weather from './components/Weather';
import Favorites from './components/Favorites';
import { WeatherProvider } from './context/WeatherContext';

const App = () => {
  return (
    <WeatherProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </WeatherProvider>
  );
};

export default App;
