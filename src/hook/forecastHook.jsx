import { useSelector } from "react-redux";
import { selectForecast } from "../redux/weather/weather-selection";

export const useForecast = () => {
  return {
    forecast: useSelector(selectForecast),
  };
};
