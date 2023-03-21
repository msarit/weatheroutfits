import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const h1Element = screen.getByText(/WEATHER OUTFITS/i);
  const h4Element = screen.getByText(/Get Your Weather & Outfit Forecast/i);

  expect(h1Element).toBeInTheDocument();
  expect(h4Element).toBeInTheDocument();
});
