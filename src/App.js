import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <header>
          <div className="city-list">
            <span>Lisbon</span>
            <span>Paris</span>
            <span>Sydney</span>
            <span>San Francisco</span>
          </div>
          <form>
            <input
              className="search-form-input"
              placeholder="Enter a city..."
            />
            <button className="search-form-button">Search</button>
            <button className="current-form-button">Current</button>
          </form>
        </header>

        <main>
          <div className="weather-app-data">
            <div>
              <h1 className="weather-app-city">Lisbon</h1>

              <div className="weather-app-details">
                Thursday 15:54, clouds
                <br />
                Humidity: <strong>82%</strong>, Wind: <strong>4 km/h</strong>
              </div>
            </div>

            <div className="weather-app-temperature-container">
              <img
                src="https://openweathermap.org/img/wn/04d@2x.png"
                className="weather-app-icon"
                alt="clouds"
              />
              <div className="weather-app-temperature">14</div>
              <div className="weather-app-unit">°C</div>
            </div>
          </div>
        </main>
      </div>
      <footer>
        Open-source code, by{" "}
        <a href="https://github.com/Katmitsu">Katy Ciutac </a>
        <a href="https://app.netlify.com/projects/meteo-ap-derland/configuration/general">
          It is open-sourced on Github
        </a>
        and
        <a href="https://meteo-ap-derland.netlify.app/"> hosted on Netlify</a>
      </footer>
    </div>
  );
}
