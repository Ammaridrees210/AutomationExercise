Cypress.Commands.add("clickSignUpHyperLink", (label) => {
  cy.get("a").contains(label).click();
});
Cypress.Commands.add("clickSignupButton", (label) => {
  cy.get("button").contains(label).click();
});
Cypress.Commands.add("createAccount", (label) => {
  cy.get("button").contains(label).click();
});
Cypress.Commands.add("clickContinueButton", (label) => {
  cy.get("a").contains(label).click();
});
Cypress.Commands.add("clickDeleteAccountInNavBar", (label) => {
  cy.get("a").contains(label).click();
});
Cypress.Commands.add("clickContinueButtonAfterDeletingAccount", (label) => {
  cy.get("a").contains(label).click();
});
Cypress.Commands.add("clickLogoutInNavyBar", (label) => {
  cy.get("a").contains(label).click();
});
Cypress.Commands.add("clickLoginButton", (label) => {
  cy.get("button").contains(label).click();
});
