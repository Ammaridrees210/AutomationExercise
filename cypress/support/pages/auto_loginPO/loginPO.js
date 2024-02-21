class login {
  navigateToSignup() {
    cy.clickSignUpHyperLink(" Signup / Login");
  }

  enterEmailToLogin() {
    return cy.get('[data-qa="login-email"]');
  }

  enterLoginPassword() {
    return cy.get('[data-qa="login-password"]');
  }

  leftSidebarSelector() {
    return cy.get(".left-sidebar");
  }

  containLoginIntoYourAccount() {
    return cy.get(".login-form h2");
  }

  logincredentials(data) {
    this.enterEmailToLogin().type(data.email);
    this.enterLoginPassword().type(data.loginPassword);
    cy.clickLoginButton("Login");
    cy.get(".left-sidebar").should("contain", "Category");
    cy.clickLogoutInNavyBar("Logout");
  }
}

export default login;
