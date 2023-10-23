import React from "react";
import LocationField from "./LocationField";
import MultiLocationSection from "./MultiLocationSection";

function LocationSection({ setWeatherDetails }) {
  const [location, setLocation] = React.useState("");
  const [multipleLocations, setMultipleLocations] = React.useState([]);
  const [dataError, setDataError] = React.useState("");
  const [searchLoops, setSearchLoops] = React.useState(0);
  const PORT = 8001;

  async function getWeatherData(loc = location) {
    const latLonResponse = await fetch(
      `http://localhost:${PORT}/coordinates?location=${loc}`
    );
    try {
      const latLonData = await latLonResponse.json();
      if (latLonData.length > 0) {
        console.log(JSON.stringify(latLonData));
      }

      if (latLonData.length <= 0) {
        setDataError("Your entry did not return any locations; try again.");
      } else if (searchLoops > 0 && latLonData.length > 1) {
        const uniqueLocations = latLonData.filter(
          (data) => `${data.name},${data.state},${data.country}` !== loc
        );

        setMultipleLocations(uniqueLocations);
        setSearchLoops(0);
        setDataError("");
      } else if (latLonData.length > 1) {
        setSearchLoops(searchLoops + 1);
        setMultipleLocations(latLonData);
        setDataError("");
      } else {
        setMultipleLocations([]);
        setSearchLoops(0);
        setLocation("");
        setDataError("");

        const weatherResponse = await fetch(
          `http://localhost:${PORT}/weather?lat=${latLonData[0].lat}&lon=${latLonData[0].lon}`
        );
        const weatherData = await weatherResponse.json();
        console.log(JSON.stringify(weatherData));

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
      setDataError("Something went wrong. 😟");
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
      {dataError}
    </div>
  );
}

export default LocationSection;
