import LocationOption from "./LocationOption";
import styles from "../styles/MultiLocationSection.module.css";

function MultiLocationSection({
  multipleLocations,
  setLocation,
  setMultipleLocations,
  getWeatherData,
}) {
  return (
    <div id="multiple-locations" className={styles.wrapper}>
      {multipleLocations.length > 0 &&
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
