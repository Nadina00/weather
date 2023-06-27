import React, { useState, Suspense } from "react";
import { useCurrent } from "../../hook/currentHook";
import { useCity } from "../../hook/locationHook";
import { useDispatch } from "react-redux";
import weatherOperations from "../../redux/weather/weather-operations";
import { Link, Outlet } from "react-router-dom";
import css from "./currentWeather.module.css";

export const CurrentWeather = () => {
  const { location, current } = useCurrent();
  const [days, setDays] = useState();
  const { isLoader } = useCity();
  const dispatch = useDispatch();
  let locationLat;
  let locationLon;

  const rawDate = current.last_updated.split(" ")[0];

  let res = rawDate.split("-").reverse().join("/");

  let date = new Date(rawDate);
  let resl = date.getDay();
  const daysWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const dayWeek = daysWeek[resl];

  if (location) {
    locationLat = location.lat;
    locationLon = location.lon;
  }

  const locationCity = `${locationLat},${locationLon}`;

  const handleClick = (e) => {
    e.preventDefault();
    setDays(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(weatherOperations.getWeatherDays({ locationCity, days }));
  };

  return (
    <div>
      {isLoader ? (
        <p>Погода...</p>
      ) : (
        <div>
          <h2>
            {location.name}, {location.region}, {location.country}
          </h2>
          <p>
            {" "}
            Дата: {res}, {dayWeek}
          </p>
          <p>Температура: {current.temp_c} °C</p>
          <p> Ощущается: {current.feelslike_c} °C </p>
          <p> Скорость ветра: {current.wind_kph} км/ч</p>
          <div className={css.condition}>
            <img
              src={`${current.condition.icon}`}
              alt="Weather data by WeatherAPI.com"
              border="0"
              className={css.img}
            ></img>
            <p>{current.condition.text}</p>
          </div>
          <form>
            <label>
              {" "}
              Погода на
              <input
                placeholder="до 3 дней"
                type="number"
                onChange={handleClick}
                value={days}
                max={3}
                className={css.input}
              ></input>{" "}
              дней
            </label>
            <button type="submit" onClick={onSubmit} className={css.btn}>
              <Link to={"/forecast"}>Посмотреть</Link>
            </button>
          </form>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};
