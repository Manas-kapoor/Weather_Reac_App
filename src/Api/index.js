const baseURL = "http://api.weatherapi.com/v1/current.json?key=540b8b16c22146aa9ba192127240606";

export const getWeatherDataForCity = async (city) => {
    try {
        const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log('API Response:', data); // Log the response for debugging
        return data;
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
        return null;
    }
};