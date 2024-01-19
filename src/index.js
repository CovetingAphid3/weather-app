import { getLocation, processLocation } from "./getUserLocation";
import getWeather from "./getWeatherInfo";




// Use the asynchronous nature of getLocation
getLocation().then(location => {
    console.log("Location obtained:", location);

    // Now, pass the location to the processLocation function
    processLocation(location);

    // Call the getWeather function with the obtained location
    getWeather(location);
    
});