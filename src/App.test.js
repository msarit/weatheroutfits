import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders expected header and byline", () => {
  // render component I am testing
  render(<App />);

  // find the elements I want to interact with, and interact with them
  const h1Element = screen.getByText(/WEATHER OUTFITS/i);
  const h4Element = screen.getByText(/Get Your Weather & Outfit Forecast/i);

  // assert that the results are as expected
  expect(h1Element).toBeInTheDocument();
  expect(h4Element).toBeInTheDocument();
});
