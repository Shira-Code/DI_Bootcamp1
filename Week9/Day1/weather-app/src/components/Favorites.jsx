import React from 'react';
import { useWeather } from '../context/WeatherContext';

const Favorites = () => {
  const { favorites, setCurrentCity } = useWeather();

  return (
    <div>
      <h2>Favorite Cities</h2>
      <ul>
        {favorites.map((fav) => (
          <li key={fav.id}>
            {fav.name}
            <button onClick={() => setCurrentCity(fav)}>View Weather</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
