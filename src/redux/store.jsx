import { configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";
import weatherReducer from './weather/weather-slice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const weatherPersistConfig = {
  key: "weather",
  storage,
  whitelist: ["current"],
};


export const store = configureStore({

  reducer: {
  weather: persistReducer(weatherPersistConfig, weatherReducer), 
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",  

})
export const persistor = persistStore(store);