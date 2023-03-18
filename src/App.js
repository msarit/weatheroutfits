import React from "react";
import "./App.css";
import LocationSection from "./components/LocationSection";
import LocationName from "./components/LocationName";
import WeatherCondition from "./components/WeatherCondition";
import WeatherTemp from "./components/WeatherTemp";
import WeatherIcon from "./components/WeatherIcon";
import OutfitImage from "./components/OutfitImage";
import OutfitDescription from "./components/OutfitDescription";

function App() {
  const [weatherDetails, setWeatherDetails] = React.useState(null);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationSection setWeatherDetails={setWeatherDetails} />
      <div id="weather-section">
        <div id="weather-details">
          {weatherDetails && (
            <React.Fragment>
              <LocationName name={weatherDetails.name} />
              <WeatherCondition desc={weatherDetails.desc} />
              <WeatherTemp tempK={weatherDetails.tempK} />
              <WeatherIcon weatherIcon={weatherDetails.icon} />
            </React.Fragment>
          )}
        </div>
        <div id="outfit-details">
          {weatherDetails && (
            <React.Fragment>
              <OutfitImage weatherCode={weatherDetails.id} />
              <OutfitDescription weatherCode={weatherDetails.id} />
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
