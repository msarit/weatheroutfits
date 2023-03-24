import { render, screen } from "@testing-library/react";
import WeatherTemp from "./WeatherTemp";

it("renders with the correct F and C values, calculated from supplied tempK prop", () => {
  // this temp (in Kelvin) is approx 59F and 15C
  const temperature = 288;

  render(<WeatherTemp tempK={temperature} />);

  const pElement = screen.getByText(/59°F | 15°C/i);

  expect(pElement).toBeInTheDocument();
});
