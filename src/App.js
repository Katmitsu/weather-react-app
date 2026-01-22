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
              <div className="icon">
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
                  class="weather-app-icon"
                  alt="Clear sky"
                />
              </div>
              <div className="weather-app-temperature" id="temperature">
                12
              </div>
              <div className="weather-app-unit">ºC</div>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            className="weather-app-icon"
            alt="Clear sky"
          />
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            className="weather-app-icon"
            alt="Clear sky"
          />
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            className="weather-app-icon"
            alt="Clear sky"
          />
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            className="weather-app-icon"
            alt="Clear sky"
          />
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            className="weather-app-icon"
            alt="Clear sky"
          />
        </main>
      </div>
      <footer>
        Coded by <a href="https://github.com/Katmitsu">Katy Ciutac, </a>{" "}
        open-sourced on{" "}
        <a href="https://github.com/Katmitsu/weather-react-app">Github </a>
        and hosted on{" "}
        <a href="https://bespoke-marshmallow-032f5b.netlify.app/"> Netlify.</a>
      </footer>
    </div>
  );
}
