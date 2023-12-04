import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);

  function showWeather(response) {
    setTemperature({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c9b53e4f8f5eb00df5915bdca340605&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          value={city}
          onChange={updateCity}
        />
        <input type="submit" value="search" />
      </form>
      {temperature && (
        <div>
          <ul>
            <li>Temperature: {Math.round(temperature.temperature)}°C</li>
            <li>Description: {temperature.description}</li>
            <li>Humidity: {temperature.humidity}%</li>
            <li>Wind: {temperature.wind}km/h</li>
            <li>
              <img src={temperature.icon} alt="temp icon" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
