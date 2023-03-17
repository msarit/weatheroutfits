function LocationField({
  location,
  setLocation,
  setWeatherDetails,
  getWeatherData,
}) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setLocation("");
        setWeatherDetails(null);
        getWeatherData();
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
  );
}

export default LocationField;
