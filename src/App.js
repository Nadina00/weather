import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import { CurrentWeatherPage } from "./pages/CurrentWeatherPage";
import { ForecastPage } from "./pages/ForecastPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import weatherOperations from "./redux/weather/weather-operations";
import { useCurrent } from "./hook/currentHook";

function App() {
  const dispatch = useDispatch();
  const {isRefreshing} = useCurrent()

  useEffect(() => {
    dispatch(weatherOperations.fetchCurrent());
  }, [dispatch]);

  return (
    <div>
        {isRefreshing ? (
        <p>Грузится </p>
      ) :
      (<Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/current/:cityLoc" element={<CurrentWeatherPage />} />
        <Route path="/forecast" element={<ForecastPage />} />
      </Routes>)}
    </div>
  );
}

export default App;
