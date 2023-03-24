import { render, screen } from "@testing-library/react";
import WeatherIcon from "./WeatherIcon";

it("renders the expected image", () => {
  const iconCode = "10d";

  render(<WeatherIcon weatherIcon={iconCode} />);

  const testImage = screen.getByAltText(/weather-icon-img/i);

  expect(testImage.src).toContain(
    "https://openweathermap.org/img/wn/10d@4x.png"
  );
});
