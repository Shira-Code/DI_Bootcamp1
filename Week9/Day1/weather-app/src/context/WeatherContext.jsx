import { createContext, useContext, useState } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [currentCity, setCurrentCity] = useState(null);

  const addToFavorites = (city) => setFavorites([...favorites, city]);
  const removeFromFavorites = (cityId) => setFavorites(favorites.filter(fav => fav.id !== cityId));

  return (
    <WeatherContext.Provider value={{ favorites, currentCity, setCurrentCity, addToFavorites, removeFromFavorites }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
