import { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function changeFar(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function changeCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div>
        <strong id="temperature">{Math.round(props.celsius)}</strong>
        <span className="unit">°C</span> |{" "}
        <span className="unit">
          <a href="/" onClick={changeFar}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <strong id="temperature">{Math.round(fahrenheit)}</strong>
        <span className="unit">
          <a href="/" onClick={changeCel}>
            °C
          </a>
        </span>{" "}
        | <span className="unit">°F</span>
      </div>
    );
  }
}
