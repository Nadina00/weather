export const selectCity = state => state.weather.city;
export const selectIsLoader = state => state.weather.isLoader;
export const selectLocatoin = state => state.weather.current.location;
export const selectCurrent = state => state.weather.current.current;
export const selectForecast = state => state.weather.forecast;
export const selectIsRefreshing = state => state.weather.isRefreshing
