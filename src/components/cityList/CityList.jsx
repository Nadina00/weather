import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import weatherOperations from "../../redux/weather/weather-operations";

export const CityList = ({ city }) => {
  const dispatch = useDispatch();
  const cityLon = city.lon;
  const cityLat = city.lat;
  const cityLoc = `${cityLat},${cityLon}`;

  const seatchClick = (e) => {
    dispatch(weatherOperations.getWeatherCurrent(cityLoc));
  };

  return (
    <div>
      <Link to={`/current/${cityLoc}`} onClick={seatchClick}>
        {" "}
        {city.name}, {city.region}, {city.country}
      </Link>{" "}
    </div>
  );
};
