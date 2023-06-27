import { useSelector } from "react-redux";
import { selectCity, selectIsLoader, selectLocatoin, selectCurrent } from "../redux/weather/weather-selection";

export const useCity = () =>{
    return{
        cityLocation: useSelector(selectCity), 
        isLoader: useSelector(selectIsLoader),
        location: useSelector(selectLocatoin),
        current: useSelector(selectCurrent)


    }
}
