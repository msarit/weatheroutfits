import LocationOption from "./LocationOption";

function MultiLocationSection({
  multipleLocations,
  setLocation,
  setMultipleLocations,
  getWeatherData,
}) {
  return (
    <div id="multiple-locations">
      {multipleLocations.length > 1 &&
        multipleLocations.map((data, index) => (
          <LocationOption
            key={index}
            name={data.name}
            state={data.state}
            country={data.country}
            setLocation={setLocation}
            setMultipleLocations={setMultipleLocations}
            getWeatherData={getWeatherData}
          />
        ))}
    </div>
  );
}

export default MultiLocationSection;
