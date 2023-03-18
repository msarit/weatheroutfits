import { WEATHER_CODE_OUTFITS } from "../data/weatherCodeOutfits";

function OutfitDescription({ weatherCode }) {
  let outfitDesc;
  if (weatherCode in WEATHER_CODE_OUTFITS) {
    outfitDesc = WEATHER_CODE_OUTFITS[weatherCode].outfitDesc;
  }

  return <p>{outfitDesc}</p>;
}

export default OutfitDescription;
