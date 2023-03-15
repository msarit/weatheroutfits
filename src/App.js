import React from "react";
import "./App.css";
import LocationChoice from "./components/LocationChoice";

function App() {
  const [weatherDetails, setWeatherDetails] = React.useState(null);
  const [location, setLocation] = React.useState("");
  const [multipleLocations, setMultipleLocations] = React.useState([]);

  function kToF(kelvin) {
    return Math.ceil((kelvin - 273.15) * (9 / 5) + 32);
  }
  function kToC(kelvin) {
    return Math.ceil(kelvin - 273.15);
  }

  async function getWeatherData(lat, lon) {
    const weatherResponse = await fetch(
      `http://localhost:8000/weather?lat=${lat}&lon=${lon}`
    );
    const weatherData = await weatherResponse.json();

    setWeatherDetails({
      name: weatherData.name,
      country: weatherData.sys.country,
      desc: weatherData.weather[0].description,
      tempF: `${kToF(weatherData.main.temp)}\u00B0F`,
      tempC: `${kToC(weatherData.main.temp)}\u00B0C`,
    });
  }

  async function getLatLonData() {
    const latLonResponse = await fetch(
      `http://localhost:8000/coordinates?location=${location}`
    );
    try {
      const latLonData = await latLonResponse.json();

      if (latLonData.length > 1) {
        setMultipleLocations(latLonData);
      } else {
        getWeatherData(latLonData[0].lat, latLonData[0].lon);
        setMultipleLocations([]);
      }
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          getLatLonData();
          setLocation("");
        }}
      >
        <label htmlFor="location-field">Enter Your Location:</label>
        <input
          id="location-field"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <button>Submit</button>
      </form>
      <div id="weather-info">
        {(weatherDetails &&
          `${weatherDetails.name}, ${weatherDetails.country}, ${weatherDetails.desc}, ${weatherDetails.tempF}/${weatherDetails.tempC}`) ||
          "(empty)"}
      </div>
      <div id="multiple-locations">
        {multipleLocations.length > 1 &&
          multipleLocations.map((data, index) => (
            <LocationChoice
              key={index}
              name={data.name}
              state={data.state}
              country={data.country}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
