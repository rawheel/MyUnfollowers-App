/// <reference types="cypress" />

context("Create Tasks Module", { tags: ["run"] }, () => {
  context("Check Project", () => {
    it("Open and Check Project", () => {
      cy.visit("localhost:8080");

      cy.get("#vs-input--5").click();
      cy.get("#vs-input--5").click();
      cy.get("#vs-input--5").type("rawheel");
      cy.get(".vs-button__content").click();
    });
  });
});
