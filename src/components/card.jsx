import React from "react";
import { useWeather } from "../context/weather";

const Card = () => {
    const weather = useWeather();
    return (
        <div className="card">
            <img src={weather?.data?.current?.condition?.icon} alt="placeholder" />
            <h2>{weather.data?.current?.temp_c}</h2>
            <h5>{weather.data?.location?.name}</h5>
        </div>


    );
};
export default Card;