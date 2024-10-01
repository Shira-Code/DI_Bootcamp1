import React, { useState } from 'react';
import { getCityAutocomplete, getCurrentWeather, getFiveDayForecast } from '../api/weatherApi';
import WeatherCard from './WeatherCard';
import { useWeather } from '../context/WeatherContext';

const Weather = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cityList, setCityList] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const { addToFavorites } = useWeather();

  const handleSearch = async () => {
    const cities = await getCityAutocomplete(searchQuery);
    setCityList(cities);
  };

  const selectCity = async (locationKey) => {
    const weather = await getCurrentWeather(locationKey);
    const fiveDay = await getFiveDayForecast(locationKey);
    setCurrentWeather(weather);
    setForecast(fiveDay.DailyForecasts);
  };

  const saveToFavorites = () => {
    if (currentWeather) {
      addToFavorites({ id: currentWeather.Key, name: currentWeather.WeatherText });
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder="Search for a city" 
      />
      <button onClick={handleSearch}>Search</button>
      
      <ul>
        {cityList.map((city) => (
          <li key={city.Key} onClick={() => selectCity(city.Key)}>
            {city.LocalizedName}
          </li>
        ))}
      </ul>

      {currentWeather && (
        <div>
          <WeatherCard weather={currentWeather} forecast={forecast} />
          <button onClick={saveToFavorites}>Add to Favorites</button>
        </div>
      )}
    </div>
  );
};

export default Weather;
