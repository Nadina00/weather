import { createSlice } from "@reduxjs/toolkit";
import weatherOperations from "./weather-operations";

const initialState = {
  weather: {},
  city: {},
  current: {},
  forecast: {},
  isLoggind: false,
  isLoader: false,
  isRefreshing: false,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: {
    [weatherOperations.getWeatherCity.pending]: (state, action) =>{
      state.isLoggind = false;
      state.isLoader = true;
    },
    [weatherOperations.getWeatherCity.fulfilled]: (state, action) => {
      state.city = action.payload;  
      state.isLoggind = true;
      state.isLoader = false; 
    },
    [weatherOperations.getWeatherCurrent.pending]: (state, action) =>{
      state.isLoggind = false;
      state.isLoader = true;
    },
    [weatherOperations.getWeatherCurrent.fulfilled]: (state, action) => {
      state.current = action.payload;  
      state.isLoggind = true;
      state.isLoader = false; 
    },
    [weatherOperations.getWeatherDays.pending]: (state, action) =>{
      state.isLoggind = false;
      state.isLoader = true;
    },
    [weatherOperations.getWeatherDays.fulfilled]: (state, action) => {
      state.forecast = action.payload;  
      state.isLoggind = true;
      state.isLoader = false; 
    },
    [weatherOperations.fetchCurrent.pending]: (state) => {
      state.isRefreshing = true;
      state.isLoader = true;
    },
    [weatherOperations.fetchCurrent.fulfilled](state, action) {
      state.current = action.payload;
      state.isLoggind = true;
      state.isRefreshing = false;
      state.isLoader = false;
    },
    [weatherOperations.fetchCurrent.rejected](state) {
      state.isRefreshing = false;
      state.error = true;
      state.isLoader = false;
    },
  },
});
export default weatherSlice.reducer;