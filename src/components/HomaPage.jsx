import '../styles/HomePage.css'
import React, { useState } from 'react';
const HomePage = () => {
    const [searchInput, setSearchInput] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        const apiKey = "1cb6532aea3c298a830a71380eace21e";
        if (!searchInput) {
            alert("Please enter a city name before search");
            return;
          }
          if (!/^[a-zA-Z\s]+$/.test(searchInput)) {
            alert("Please enter a valid city name");
            return;
          }
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log(data); // or update your state with the data here
            setWeatherData({
                city: data.name,
                temperature: data.main.temp,
                description: data.weather[0].description,
                windSpeed: data.wind.speed * 3.6, // convert m/s to km/h
                humidity: data.main.humidity
            })
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className='search'>
            <div className="searchCity">
                <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='Enter a Valid City Name.......' />
                <button onClick={handleSearch}>Search</button>
            </div>
            {loading && <h2>Loading...</h2>}
            {weatherData && (
                <div>
                    <div class="location">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>{weatherData.city}</p>
                    </div>
                    <div class="weatherInfo">
                        <p><span>Temperature:</span> {weatherData.temperature} °C</p>
                        <p><span>Description:</span> {weatherData.description}</p>
                        <p><span>Wind speed:</span> {weatherData.windSpeed.toFixed(1)} km/h</p>
                        <p><span>Humidity:</span> {weatherData.humidity}%</p>
                    </div>
                </div>
            )}
        </div>
    );


}

export default HomePage;