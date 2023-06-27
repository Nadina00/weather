import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://api.weatherapi.com/v1/";
const REACT_APP_KEY = process.env.REACT_APP_KEY;

const getWeatherCity = createAsyncThunk(
  "weather/getWeatherCity",
  async (credential) => {
    try {
      const { data } = await axios.get(
        `/search.json?key=${REACT_APP_KEY}&q=${credential}&lang=ru`,
        credential
      );
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);
const getWeatherCurrent = createAsyncThunk(
  "weather/getWeatherCurrent",
  async (credential) => {
    try {
      const { data } = await axios.get(
        `/current.json?key=${REACT_APP_KEY}&q=${credential}&lang=ru`,
        credential
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);
const getWeatherDays = createAsyncThunk(
  "weather/getWeatherDays",
  async (credential) => {
    try {
      const { data } = await axios.get(
        `/forecast.json?key=${REACT_APP_KEY}&q=${credential.locationCity}&days=${credential.days}&lang=ru`,
        credential
      );
      return data.forecast;
    } catch (error) {
      console.error(error);
    }
  }
);

const fetchCurrent = createAsyncThunk(
  "weather/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedCurrent = state.weather.current.location;
    if (persistedCurrent === null) {
      return thunkAPI.rejectWithValue();
    }

    const locationLat = persistedCurrent.lat;
    const locationLon = persistedCurrent.lon;
    const locationCity = `${locationLat},${locationLon}`;
    try {
      const { data } = await axios.get(
        `/current.json?key=${REACT_APP_KEY}&q=${locationCity}&lang=ru`,
        locationCity
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const weatherOperations = {
  getWeatherCity,
  getWeatherCurrent,
  getWeatherDays,
  fetchCurrent,
};

export default weatherOperations;
