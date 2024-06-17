import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="overview">
        <h1 id="city">{props.info.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.info.date} />
            <span id="date"></span>
          </li>
          <li id="description">{props.info.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="clearfix weather-temperature">
            <img
              src={props.info.icon}
              alt={props.info.description}
              className="float-left"
              id="icon"
            />
            <div className="float-left">
              <strong id="temperature">
                {Math.round(props.info.temperature)}
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
              Humidity: <span id="humidity">{props.info.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{Math.round(props.info.wind)}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
