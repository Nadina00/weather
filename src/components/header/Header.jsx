import React, { useState } from "react";
import weatherOperations from "../../redux/weather/weather-operations";
import { useDispatch } from "react-redux";
import { useCity } from "../../hook/locationHook";
import { CityList } from "../cityList/CityList";
import css from "./Header.module.css"

export const Header = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const { cityLocation, isLoader } = useCity();

  const onChangeValue = (e) => {
    e.preventDefault();
    const { value } = e.currentTarget;
    setCity(value);
  };

  const onSummitForm = (e) => {
    e.preventDefault();
    dispatch(weatherOperations.getWeatherCity(city));
  };

  return (
    <div className={css.box}>
      <form onSubmit={onSummitForm}>
        <label className={css.label}>
          <input
            type="text"
            placeholder="Город"
            name="city"
            onChange={onChangeValue}
            value={city}
            className={css.input}
            required
          ></input>
        </label>
        <button type="submit" className={css.btn}>Выбрать</button>
      </form>
      <ul>
        {isLoader && <p>Города...</p>}
        {cityLocation.length ? (cityLocation.map((city) => (
          <li key={city.id} className={css.item}>
            <CityList city={city} />
          </li>
        ))) : (<p>Выбранного города нет!</p>)}
      </ul>
    </div>
  );
};
