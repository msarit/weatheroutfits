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
        data-cy="location-field"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
      <button className={styles.button} data-cy="fetch">
        Fetch!
      </button>
    </form>
  );
}

export default LocationField;
