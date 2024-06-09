import { createContext,useContext,useState } from "react";
import { getWeatherDataForCity } from "../Api/index";



const WeatherContext = createContext(null);

export const useWeather = () => {
    return  useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);
    const fetchData = async () => {
        const response = await getWeatherDataForCity(searchCity);
        setData(response);
    }; 
    
    


    return ( <WeatherContext.Provider 
        
            value={{searchCity, data, setSearchCity, fetchData}}
        >
        {props.children}
        </WeatherContext.Provider>
    );
};