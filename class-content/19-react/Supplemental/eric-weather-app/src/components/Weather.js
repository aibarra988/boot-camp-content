import React from "react";

const Weather = (props) => (
  <div>
    {
      props.weather
      ? (
        <div>
          Temp: {props.weather.main.temp}
        </div>
      )
      : (
        <div>No Weather Info</div>
      )
    }
    <button onClick={props.refresh}>Refresh</button>
  </div>
)

export default Weather;
