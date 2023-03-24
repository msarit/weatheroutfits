import { render, screen } from "@testing-library/react";
import WeatherCondition from "./WeatherCondition";

it("renders with supplied weather condition", () => {
  const conditions = "cloudy";

  render(<WeatherCondition desc={conditions} />);

  const pElement = screen.getByText(/cloudy/i);

  expect(pElement).toBeInTheDocument();
});
