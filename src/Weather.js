import React from "react";
import axios from "axios";

export default function Weather() {
  function showWeather(response) {
    alert(`the weather in london is ${Math.round(response.data.main.temp)} degrees`);
  }
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=4c9b53e4f8f5eb00df5915bdca340605&units=metric`;
  axios.get(apiUrl).then(showWeather);
  return <h2>Hello from weather!</h2>;
}
