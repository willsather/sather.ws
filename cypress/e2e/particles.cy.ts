describe("Navigation", () => {
  it("should navigate to experience page", () => {
    cy.visit(Cypress.config().baseUrl);

    // particles are shown
    cy.get("[id$=tsparticles]").should("exist");

    // turn off particles
    cy.get(`[aria-label="particles"]`).click();

    // particles are hidden
    cy.get("[id$=tsparticles]").should("not.exist");
  });
});

export {};
