import { render, screen } from "@testing-library/react";
import LocationName from "./LocationName";

it("renders with supplied name and country", () => {
  const locName = "Lagos";
  const locCountry = "NG";

  render(<LocationName name={locName} country={locCountry} />);

  const pElement = screen.queryByText(/Lagos/i);
  const smallElement = screen.queryByText(/\[Country: NG\]/i);

  expect(pElement).toBeInTheDocument();
  expect(smallElement).toBeInTheDocument();
});

it("renders nothing if name and country not supplied", () => {
  const locName = "";
  const locCountry = "";

  render(<LocationName name={locName} country={locCountry} />);

  const pElement = screen.queryByText(/Lagos/i);
  const smallElement = screen.queryByText(/\[Country: NG\]/i);

  expect(pElement).not.toBeInTheDocument();
  expect(smallElement).not.toBeInTheDocument();
});
