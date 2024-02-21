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

  wrongcredentials(data) {
    this.enterEmailToLogin().type(data.email);
    this.enterLoginPassword().type(data.loginPassword);
    cy.clickLoginButton("Login");
  }
}

export default login;
