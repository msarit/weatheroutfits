describe("visiting weather app", () => {
  it("loads app correctly", () => {
    cy.visit("http://localhost:3000");

    cy.contains(/WEATHER OUTFITS/);
    cy.contains(/Get Your Weather & Outfit Forecast/);
  });
});

describe("looking up weather info", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays error message when invalid location entered", () => {
    // force the coordinates lookup to return an empty array
    // indicating no locations found
    cy.intercept("GET", "/coordinates*", []);

    cy.get('[data-cy="location-field"]').type("invalid location");
    cy.get('[data-cy="fetch"]').click();

    cy.contains("Your entry did not return any locations; try again.");
  });

  it("displays multiple options when ambiguous location entered", () => {
    // force the coordinates lookup to return an array
    // containing 5 locations
    cy.intercept("GET", "/coordinates*", { fixture: "mockLatLonData.json" });

    cy.get('[data-cy="location-field"]').type("silver spring");
    cy.get('[data-cy="fetch"]').click();

    cy.get('[data-cy="mutltiple-locations"]')
      .children()
      .should("have.length", 5);
  });

  it("displays weather details when lookup returns single location", () => {
    // force the coordinates & weather lookups to return mock weather data
    cy.intercept("GET", "/coordinates*", {
      fixture: "mockSingleLocation.json",
    });
    cy.intercept("GET", "/weather*", { fixture: "mockWeatherData.json" });

    cy.get('[data-cy="location-field"]').type("silver spring");
    cy.get('[data-cy="fetch"]').click();

    cy.contains("Silver Spring");
    cy.contains("clear sky");
    cy.contains("57°F | 14°C");
    cy.contains("Dress for cool weather; some may feel cold.");
  });
});
