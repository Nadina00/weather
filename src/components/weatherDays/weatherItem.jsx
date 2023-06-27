import React from "react";
import css from "./weatherItem.module.css";

export const WeatherItem = ({ forecastdayOne }) => {
  let res = forecastdayOne.date.split("-").reverse().join("/");
  let date = new Date(forecastdayOne.date);
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

  return (
    <div>
      <p>дата {res}</p>
      <p>{dayWeek}</p>
      <p>макс темп: {forecastdayOne.day.maxtemp_c} °C</p>
      <p>мин темп: {forecastdayOne.day.mintemp_c} °C</p>
      <div className={css.condition}>
        <p>{forecastdayOne.day.condition.text}</p>
        <img
          src={`${forecastdayOne.day.condition.icon}`}
          alt="Weather data by WeatherAPI.com"
          border="0"
        ></img>
      </div>
    </div>
  );
};
