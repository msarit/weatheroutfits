import { render, screen } from "@testing-library/react";
import OutfitDescription from "./OutfitDescription";

it("displays weatherCode-based description for unclear weather", () => {
  const weatherCode = 622;
  const tempK = 275;
  const expectedDesc =
    "Consider staying home; if you must go out: strong umbrella, boots, winter coat, hat & gloves";

  render(<OutfitDescription weatherCode={weatherCode} tempK={tempK} />);

  const outfitDescEl = screen.getByTestId("outfit-desc");

  expect(outfitDescEl.textContent).toContain(expectedDesc);
});

it("displays temp-based description for clear weather", () => {
  const weatherCode = 801;
  const tempK = 275;
  const expectedDesc = "Dress for cold weather.";

  render(<OutfitDescription weatherCode={weatherCode} tempK={tempK} />);

  const outfitDescEl = screen.getByTestId("outfit-desc");

  expect(outfitDescEl.textContent).toContain(expectedDesc);
});
