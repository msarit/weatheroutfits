import React from "react";
import "./App.css";
import LocationField from "./components/LocationField";
import MultiLocationSection from "./components/MultiLocationSection";
import LocationName from "./components/LocationName";
import WeatherCondition from "./components/WeatherCondition";
import WeatherTemp from "./components/WeatherTemp";
import WeatherIcon from "./components/WeatherIcon";

function App() {
  const [weatherDetails, setWeatherDetails] = React.useState(null);
  const [location, setLocation] = React.useState("");
  const [multipleLocations, setMultipleLocations] = React.useState([]);

  async function getWeatherData() {
    const latLonResponse = await fetch(
      `http://localhost:8000/coordinates?location=${location}`
    );
    try {
      const latLonData = await latLonResponse.json();

      if (latLonData.length > 1) {
        setMultipleLocations(latLonData);
      } else {
        setMultipleLocations([]);

        const weatherResponse = await fetch(
          `http://localhost:8000/weather?lat=${latLonData[0].lat}&lon=${latLonData[0].lon}`
        );
        const weatherData = await weatherResponse.json();

        setWeatherDetails({
          id: weatherData.weather[0].id,
          name: weatherData.name,
          country: weatherData.sys.country,
          desc: weatherData.weather[0].description,
          tempK: weatherData.main.temp,
        });
      }
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div id="location-section">
        <LocationField
          location={location}
          setLocation={setLocation}
          setWeatherDetails={setWeatherDetails}
          getWeatherData={getWeatherData}
        />
        <MultiLocationSection
          multipleLocations={multipleLocations}
          setLocation={setLocation}
          setMultipleLocations={setMultipleLocations}
          getWeatherData={getWeatherData}
        />
      </div>
      <div id="weather-section">
        <div id="weather-details">
          {weatherDetails && (
            <React.Fragment>
              <LocationName name={weatherDetails.name} />
              <WeatherCondition desc={weatherDetails.desc} />
              <WeatherTemp tempK={weatherDetails.tempK} />
              <WeatherIcon iconId={weatherDetails.id} />
            </React.Fragment>
          )}
        </div>
        <div id="outfit-details"></div>
      </div>
    </div>
  );
}

export default App;
