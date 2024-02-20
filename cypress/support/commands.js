// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('clickSignUpHyperLink', (label) =>{
    cy.get('a').contains(label).click()
})
Cypress.Commands.add('clickSignupButton', (label) =>{
    cy.get('button').contains(label).click()
})
Cypress.Commands.add('createAccount', (label) =>{
    cy.get('button').contains(label).click()
})
Cypress.Commands.add('clickContinueButton', (label) =>{
    cy.get('a').contains(label).click()
})
Cypress.Commands.add('clickDeleteAccountInNavBar', (label) =>{
    cy.get('a').contains(label).click()
})
Cypress.Commands.add('clickContinueButtonAfterDeletingAccount', (label) =>{
    cy.get('a').contains(label).click()
})
Cypress.Commands.add('clickLogoutInNavyBar', (label) =>{
    cy.get('a').contains(label).click()
})
Cypress.Commands.add('clickLoginButton', (label) =>{
    cy.get('button').contains(label).click()
})
