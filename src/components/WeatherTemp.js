function kToF(kelvin) {
  return Math.ceil((kelvin - 273.15) * (9 / 5) + 32);
}

function kToC(kelvin) {
  return Math.ceil(kelvin - 273.15);
}

function WeatherTemp({ tempK }) {
  return <p>{`${kToF(tempK)}\u00B0F | ${kToC(tempK)}\u00B0C`}</p>;
}

export default WeatherTemp;
