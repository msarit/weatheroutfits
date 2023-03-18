import React from "react";
import LocationField from "./LocationField";
import MultiLocationSection from "./MultiLocationSection";

function LocationSection({ setWeatherDetails }) {
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
          icon: weatherData.weather[0].icon,
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
  );
}

export default LocationSection;
