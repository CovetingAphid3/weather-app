import { getLocation, processLocation } from "./getUserLocation";
const weather = document.getElementById("show-weather")
// Use the asynchronous nature of getLocation
getLocation().then(location => {
    console.log("Location obtained:", location);

    // Now, pass the location to the processLocation function
    processLocation(location);
});
async function getWeather(location) {
    const url = 'https://api.weatherapi.com/v1/current.json'; // Corrected URL
    const apiKey = '9c5a5afeea6d4be0b01133559241901'; 
    

    const params = new URLSearchParams({
        key: apiKey,
        q: location
    });

    try {
        const response = await fetch(`${url}?${params}`);
        
        if (!response.ok) {
            throw new Error('Network error or invalid response');
        }

        const weatherData = await response.json();
        const temperature = weatherData.current.temp_c;
        const condition = weatherData.current.condition.text;

        weather.innerHTML = `Temperature: ${temperature}°C <br> Condition: ${condition} <br> Feels like: ${weatherData.current.feelslike_c}°C`

        console.log(weatherData);
    } catch (error) {
        console.error('Error:', error.message);
    }
    
}

export default getWeather;
