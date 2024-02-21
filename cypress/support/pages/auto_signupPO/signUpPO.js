class signup {
  navigateToSignup() {
    cy.clickSignUpHyperLink(" Signup / Login");
  }

  inputTypeName() {
    return cy.get('[data-qa="signup-name"]');
  }

  inputTypeEmailAddress() {
    return cy.get('[data-qa="signup-email"]');
  }

  radioButtonSelector() {
    return cy.get('[type="radio"]').first();
  }

  inputPasswordFieldSelector() {
    return cy.get('[data-qa="password"]');
  }

  selectDayFromDropdownList() {
    return cy.get('[data-qa="days"]');
  }

  selectMonthFromDropdownlist() {
    return cy.get('[data-qa="months"]');
  }

  selectYearFromDropdownlist() {
    return cy.get('[data-qa="years"]');
  }

  checkBoxSelector() {
    return cy.get('[name="newsletter"]');
  }

  checkBoxSelector1() {
    return cy.get('[name="optin"]');
  }

  inputFirstName() {
    return cy.get('[data-qa="first_name"]');
  }

  inputLastName() {
    return cy.get('[data-qa="last_name"]');
  }

  inputCompanyName() {
    return cy.get('[data-qa="company"]');
  }

  inputAddress() {
    return cy.get('[data-qa="address"]');
  }

  inputAddress2() {
    return cy.get('[data-qa="address2"]');
  }

  selectCountryNameFromDropdownList() {
    return cy.get('#country');
  }

  inputStateName() {
    return cy.get('[data-qa="state"]');
  }

  inputCityName() {
    return cy.get('[data-qa="city"]');
  }

  inputZipCode() {
    return cy.get('[data-qa="zipcode"]');
  }

  inputContactPhoneNumber() {
    return cy.get('[data-qa="mobile_number"]');
  }

  leftSideBarCategory(){
    return cy.get(".left-sidebar")
  }

  signUpFormContainNewUserSignup(){
    return  cy.get(".signup-form h2")
  }

  titleContainEnterInformation(){
    return cy.get(".title b")
  }

  titleContainAccountCreated(){
    return cy.get(".title b")
  }

  initialreq(randomNumber, generateString, data) {
    this.inputTypeName().type(data.name);
    this.inputTypeEmailAddress().type(
      `${generateString}+${randomNumber}${data.emailDomain}`
    );
    cy.clickSignupButton("Signup");
  }

  signform(data) {
    this.radioButtonSelector().check();
    this.inputPasswordFieldSelector().type(data.password);
    this.selectDayFromDropdownList().select(data.day);
    this.selectMonthFromDropdownlist().select(data.months);
    this.selectYearFromDropdownlist().select(data.years);
    this.checkBoxSelector().check();
    this.checkBoxSelector1().check();
    this.inputFirstName().type(data.first_name);
    this.inputLastName().type(data.last_name);
    this.inputCompanyName().type(data.company);
    this.inputAddress().type(data.address);
    this.inputAddress2().type(data.address2);
    this.selectCountryNameFromDropdownList().select(data.country);
    this.inputStateName().type(data.state);
    this.inputCityName().type(data.city);
    this.inputZipCode().type(data.zipcode);
    this.inputContactPhoneNumber().type(data.mobile_number);
    cy.createAccount("Create Account");
  }
  HomePageAfterSignUp() {
    cy.clickContinueButton("Continue");
    cy.get(".left-sidebar").should("contain", "Category");
    cy.clickLogoutInNavyBar("Logout");
  }
}

export default signup;
