import styles from "../styles/LocationOption.module.css";

function LocationOption({
  name,
  state,
  country,
  setLocation,
  setMultipleLocations,
  getWeatherData,
}) {
  return (
    <div className={styles.wrapper}>
      <p>
        {name} {state} {country}
      </p>
      <button
        className={styles.button}
        onClick={() => {
          setLocation(`${name},${state},${country}`);
          setMultipleLocations([]);
          getWeatherData(`${name},${state},${country}`);
        }}
      >
        Choose
      </button>
    </div>
  );
}

export default LocationOption;
