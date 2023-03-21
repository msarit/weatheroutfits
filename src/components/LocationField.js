import styles from "../styles/LocationField.module.css";

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
        setWeatherDetails(null);
        getWeatherData();
      }}
    >
      <input
        id="location-field"
        className={styles.inputfield}
        placeholder="Enter Location"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
      <button className={styles.button}>Fetch!</button>
    </form>
  );
}

export default LocationField;
