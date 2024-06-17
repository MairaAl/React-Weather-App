import axios from "axios";
import { useState } from "react";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      city: response.data.city,
      icon: response.data.condition.icon_url,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form id="search-form" className="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city"
                    className="form-control"
                    id="city-input"
                    autoComplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
            <div className="overview">
              <h1 id="city">{weatherData.city}</h1>
              <ul>
                <li>
                  Last updated: <FormattedDate date={weatherData.date} />
                  <span id="date"></span>
                </li>
                <li id="description">{weatherData.description}</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="clearfix weather-temperature">
                  <img
                    src={weatherData.icon}
                    alt={weatherData.description}
                    className="float-left"
                    id="icon"
                  />
                  <div className="float-left">
                    <strong id="temperature">
                      {Math.round(weatherData.temperature)}
                    </strong>
                    <span className="units">
                      <a href="#" id="celsius-link" className="active">
                        ºC{" "}
                      </a>
                      |
                      <a href="#" id="fahrenheit-link">
                        ºF
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <ul>
                  <li>
                    Humidity: <span id="humidity">{weatherData.humidity}</span>%
                  </li>
                  <li>
                    Wind: <span id="wind">{Math.round(weatherData.wind)}</span>{" "}
                    km/h
                  </li>
                </ul>
              </div>
            </div>
            <div className="weather-forecast" id="forecast">
              <div className="row">
                <div className="col-2">
                  <div className="weather-forecast-date">Mon</div>
                  <img
                    src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                    alt="few-clouds-day"
                    width="60px"
                  />
                  <div className="weather-forecast-temperatures">
                    <span className="weather-forecast-maximum"> 17º </span>
                    <span className="weather-forecast-minimum">13º</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <small>
            <a href="https://github.com/MairaAl/weather-app">
              Open source code{" "}
            </a>
            by Maira
          </small>
        </div>
      </div>
    );
  } else {
    let apiKey = "b6dboa0a631739a3fcfd0t3ff674a04b";
    let city = "London";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
