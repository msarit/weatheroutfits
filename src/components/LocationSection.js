import React from "react";
import LocationField from "./LocationField";
import MultiLocationSection from "./MultiLocationSection";

function LocationSection({ setWeatherDetails }) {
  const [location, setLocation] = React.useState("");
  const [multipleLocations, setMultipleLocations] = React.useState([]);
  const [noData, setNoData] = React.useState("");
  const [searchLoops, setSearchLoops] = React.useState(0);

  async function getWeatherData(loc = location) {
    const latLonResponse = await fetch(
      `http://localhost:8000/coordinates?location=${loc}`
    );
    try {
      const latLonData = await latLonResponse.json();

      if (searchLoops > 0 && latLonData.length > 1) {
        const noDuplicateLocations = latLonData.filter(
          (data) => `${data.name},${data.state},${data.country}` !== loc
        );

        setMultipleLocations(noDuplicateLocations);
        setSearchLoops(0);
        setNoData("");
      } else if (latLonData.length > 1) {
        setSearchLoops(searchLoops + 1);
        setMultipleLocations(latLonData);
        setNoData("");
      } else {
        setMultipleLocations([]);
        setSearchLoops(0);
        setLocation("");
        setNoData("");

        const weatherResponse = await fetch(
          `http://localhost:8000/weather?lat=${latLonData[0].lat}&lon=${latLonData[0].lon}`
        );
        const weatherData = await weatherResponse.json();

        console.log(weatherData);
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
      setNoData("Your Entry Did Not Return Any Locations");
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
      {noData}
    </div>
  );
}

export default LocationSection;
