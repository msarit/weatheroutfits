function WeatherIcon({ weatherIcon }) {
  const weatherIconImgUrl = `https://openweathermap.org/img/wn/${weatherIcon}@4x.png`;

  return <img alt="weather-icon-img" src={weatherIconImgUrl} />;
}

export default WeatherIcon;
