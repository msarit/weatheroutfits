import React from "react";
import "./App.css";

function App() {
  const [weatherDetails, setWeatherDetails] = React.useState("mock data");

  async function getWeatherData(locationLat, locationLon) {
    const weatherResponse = await fetch(
      `http://localhost:8000/weather?lat=${locationLat}&lon=${locationLon}`
    );
    const weatherData = await weatherResponse.json();

    setWeatherDetails(
      `${weatherData.name}, ${weatherData.sys.country} | ${weatherData.weather[0].main}`
    );
  }

  React.useEffect(() => {
    const getLatLonData = async () => {
      const latLonResponse = await fetch("http://localhost:8000/coordinates");
      const latLonData = await latLonResponse.json();

      getWeatherData(latLonData[0].lat, latLonData[0].lon);
    };

    getLatLonData();
  });

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div id="weather-info">{weatherDetails}</div>
    </div>
  );
}

export default App;
