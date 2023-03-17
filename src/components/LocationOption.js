function LocationOption({
  name,
  state,
  country,
  setLocation,
  setMultipleLocations,
  getWeatherData,
}) {
  return (
    <div>
      <p>
        {name} {state} {country}
      </p>
      <button
        onClick={() => {
          setLocation(`${name},${state},${country}`);
          setMultipleLocations([]);
          getWeatherData();
        }}
      >
        Choose
      </button>
    </div>
  );
}

export default LocationOption;
