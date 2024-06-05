export default function Weather() {
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
                  autocomplete="off"
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
            <h1 id="city">New York</h1>
            <ul>
              <li>
                Last updated: <span id="date"></span>
              </li>
              <li id="description">Cloudy</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="clearfix weather-temperature">
                <img src="" alt="" className="float-left" id="icon" />
                <div className="float-left">
                  <strong id="temperature">6</strong>
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
                <li>Precipitation: 0%</li>
                <li>
                  Humidity: <span id="humidity"></span>%
                </li>
                <li>
                  Wind: <span id="wind"></span> km/h
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
          <a href="https://github.com/MairaAl/weather-app">Open source code </a>
          by Maira
        </small>
      </div>
    </div>
  );
}
