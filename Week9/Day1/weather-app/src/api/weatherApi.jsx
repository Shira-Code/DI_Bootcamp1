// import axios from 'axios';

// const API_KEY = '	wbUAUJuYEZH14sT1xjHimL9QCsnHIvXK';
// const BASE_URL = 'https://dataservice.accuweather.com';

// export const getCityAutocomplete = async (query) => {
//   const response = await axios.get(`${BASE_URL}/locations/v1/cities/autocomplete`, {
//     params: { apikey: API_KEY, q: query }
//   });
//   return response.data;
// };

// export const getCurrentWeather = async (locationKey) => {
//   const response = await axios.get(`${BASE_URL}/currentconditions/v1/${locationKey}`, {
//     params: { apikey: API_KEY }
//   });
//   return response.data[0];
// };

// export const getFiveDayForecast = async (locationKey) => {
//   const response = await axios.get(`${BASE_URL}/forecasts/v1/daily/5day/${locationKey}`, {
//     params: { apikey: API_KEY }
//   });
//   return response.data;
// };


import axios from 'axios';

const API_KEY = 'wbUAUJuYEZH14sT1xjHimL9QCsnHIvXK'; // Replace with your actual API key

export const getCityAutocomplete = async (query) => {
  const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete`, {
    params: {
      q: query,
      apikey: API_KEY,
    },
  });
  return response.data; // This should return a list of city suggestions
};

export const getCurrentWeather = async (locationKey) => {
  const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`, {
    params: {
      apikey: API_KEY,
    },
  });
  return response.data[0]; // Return the first item in the array
};

export const getFiveDayForecast = async (locationKey) => {
  const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`, {
    params: {
      apikey: API_KEY,
    },
  });
  return response.data; // Return the forecast data
};
