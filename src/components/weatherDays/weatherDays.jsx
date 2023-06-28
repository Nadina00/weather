import React from "react";
import { useForecast } from "../../hook/forecastHook";
import { Link } from "react-router-dom";
import { useCity } from "../../hook/locationHook";
import { WeatherItem } from "./weatherItem";
import css from "./weatherItem.module.css";

export const WeatherDays = () => {
  const { forecast } = useForecast();
  const { location, isLoader } = useCity();
  const forecastday = forecast.forecastday;
 
  return (
    <div>
      <h2>
        {location.name}, {location.country}
      </h2>
      <ul className={css.box}>
        {isLoader ? (
          <p>Города...</p>
        ) : (
          forecastday.map((forecastdayOne) => (
            <li key={forecastdayOne.id} className={css.item}>
              <WeatherItem
                forecastdayOne={forecastdayOne}
                key={forecastdayOne.id}
              />
            </li>
          ))
        )}
      </ul>
      <Link to={"/"}>Назад</Link>
    </div>
  );
};
