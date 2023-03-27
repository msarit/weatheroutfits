import { render, screen } from "@testing-library/react";
import OutfitImage from "./OutfitImage";

it("renders the appropriate outfit image for supplied code", () => {
  const weatherCode = 622;
  const expectedImageUrl =
    "/outfit-images/strongumbrella-boots-wintercoat-hat-gloves.png";

  render(<OutfitImage weatherCode={weatherCode} />);

  const testImage = screen.getByAltText(/outfit/i);

  expect(testImage.src).toContain(expectedImageUrl);
});
