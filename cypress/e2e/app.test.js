/// <reference types="cypress" />

context("Check UnFollowers Module", { tags: ["run"] }, () => {
  context("Check UnFollowers", () => {
    it("Open and Check UnFollowers", () => {
      cy.visit("localhost:8080");

      cy.get("#vs-input--5").click();
      cy.get("#vs-input--5").click();
      cy.get("#vs-input--5").type("rawheel");
      cy.get(".vs-button__content").click();
    });
  });
});
