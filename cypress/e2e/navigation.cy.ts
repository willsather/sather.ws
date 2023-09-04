describe("Navigation", () => {
  it("should navigate to experience page", () => {
    cy.visit("/");

    cy.contains("experience").click();

    cy.url().should("include", "/experience");
    cy.get("h1").contains("EXPERIENCE");
  });

  it("should navigate to home page", () => {
    cy.visit("/");

    cy.contains("home").click();

    cy.url().should("include", "/");
    cy.get("h1").contains("WILL SATHER");
  });

  it("should navigate to blog page", () => {
    cy.visit("/");

    cy.contains("blog").click();

    cy.url().should("include", "/blog");
    cy.get("h1").contains("BLOG");
  });

  it("should navigate to about page", () => {
    cy.visit("/");

    cy.contains("about").click();

    cy.url().should("include", "/about");
    cy.get("h1").contains("ABOUT");
  });
});

export {};
