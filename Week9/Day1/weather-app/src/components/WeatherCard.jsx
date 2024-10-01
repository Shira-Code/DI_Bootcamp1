import React from 'react';

const WeatherCard = ({ weather, forecast }) => {
  return (
    <div>
      <h3>Current Weather</h3>
      <p>{weather.WeatherText}</p>
      <p>Temperature: {weather.Temperature.Metric.Value} °C</p>
      <h4>5-Day Forecast</h4>
      <ul>
        {forecast.map((day) => (
          <li key={day.Date}>
            <p>{day.Date}: {day.Day.IconPhrase}, High: {day.Temperature.Maximum.Value} °C, Low: {day.Temperature.Minimum.Value} °C</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherCard;
