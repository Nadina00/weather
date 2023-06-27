import React from "react";
import { WeatherDays } from "../components/weatherDays/weatherDays";
import { Outlet } from "react-router-dom";

export const ForecastPage = () => {
  return (
    <div>
      <WeatherDays />
      <Outlet/>
    </div>
  );
};
