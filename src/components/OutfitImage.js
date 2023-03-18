import { WEATHER_CODE_OUTFITS } from "../data/weatherCodeOutfits";

function OutfitImage({ weatherCode }) {
  let outfitImg;

  if (weatherCode in WEATHER_CODE_OUTFITS) {
    outfitImg = WEATHER_CODE_OUTFITS[weatherCode].outfitUrl;
  }

  return <img alt="outfit" src={outfitImg} />;
}

export default OutfitImage;
