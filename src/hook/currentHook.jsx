import { useSelector } from "react-redux";
import { selectLocatoin, selectCurrent, selectIsRefreshing } from "../redux/weather/weather-selection";

export const useCurrent = () =>{
    return{      
        location: useSelector(selectLocatoin),
        current: useSelector(selectCurrent),
        isRefreshing: useSelector(selectIsRefreshing)

           }
}
