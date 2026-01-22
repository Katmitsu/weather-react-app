import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState(" ");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function refreshWeather(response) {
    setLoaded(true);
    setWeather({
      city: response.data.city,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: `${response.data.main.humidity}%`,
      speed: `${response.data.wind.speed}km/h`,
      time: formatDate(new Date(response.data.dt * 1000)),
      icon: response.data.weather[0].icon,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
  }

  function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>
        <ul>
          <li>City: {weather.city}</li>
          <li>Temperature: {weather.temperature}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}</li>
          <li>Wind Speed: {weather.speed}</li>
          <li>Time: {weather.time}</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
