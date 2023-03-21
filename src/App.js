import React from "react";
import styles from "./styles/App.module.css";
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
    <div className={styles.app}>
      <h1>WEATHER OUTFITS</h1>
      <h4>Get Your Weather & Outfit Forecast</h4>
      <LocationSection setWeatherDetails={setWeatherDetails} />
      <div className={styles.weathersection}>
        <div id="weather-details">
          {weatherDetails && (
            <React.Fragment>
              <LocationName
                name={weatherDetails.name}
                country={weatherDetails.country}
              />
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
              <OutfitDescription
                weatherCode={weatherDetails.id}
                tempK={weatherDetails.tempK}
              />
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
