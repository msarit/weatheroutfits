import { WEATHER_CODE_OUTFITS } from "../data/weatherCodeOutfits";

function tempBasedOutfitDesc(temp) {
  if (temp > 299) {
    return "Dress for warm weather; some may feel hot.";
  } else if (294 < temp && temp <= 299) {
    return "Dress for pleasant weather; some may feel warm.";
  } else if (288 < temp && temp <= 294) {
    return "Dress for pleasant weather; some may feel cool.";
  } else if (283 < temp && temp <= 288) {
    return "Dress for cool weather; some may feel cold.";
  } else if (277 < temp && temp <= 283) {
    return "Dress for cold weather; some may feel just cool.";
  } else if (272 < temp && temp <= 277) {
    return "Dress for cold weather.";
  } else {
    return "It's cold; bundle up!";
  }
}

function OutfitDescription({ weatherCode, tempK }) {
  let outfitDesc;

  if ([800, 801, 802, 803, 804].includes(weatherCode)) {
    outfitDesc = tempBasedOutfitDesc(tempK);
  } else if (weatherCode in WEATHER_CODE_OUTFITS) {
    outfitDesc = WEATHER_CODE_OUTFITS[weatherCode].outfitDesc;
  }

  return <p data-testid="outfit-desc">{outfitDesc}</p>;
}

export default OutfitDescription;
