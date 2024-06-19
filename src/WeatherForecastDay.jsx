export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="weather-forecast-date">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.icon}
        width="60px"
      />
      <div className="weather-forecast-temperatures">
        <span className="weather-forecast-maximum">
          {" "}
          {Math.round(props.data.temperature.maximum)}º{" "}
        </span>
        <span className="weather-forecast-minimum">
          {Math.round(props.data.temperature.minimum)}º
        </span>
      </div>
    </div>
  );
}
