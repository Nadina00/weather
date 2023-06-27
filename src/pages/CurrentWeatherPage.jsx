import React from "react";
import { CurrentWeather } from "../components/currentWeather/currentWeather";
import { Outlet } from "react-router-dom";

export const CurrentWeatherPage = () =>{
    return(
        <div>
        <CurrentWeather/>
        <Outlet/>
        </div>
    )
}