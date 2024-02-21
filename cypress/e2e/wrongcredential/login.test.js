import login from "../../support/pages/wrongcred/loginPO";

const test = new login();

describe("Login User with correct email and password", () => {
  //wrap Fixture data
  beforeEach(() => {
    cy.fixture("data").then((data) => {
      cy.wrap(data).as("testData");
    });
  });

  it("Should be able login the User", () => {
    cy.visit("/");

    //Identify landing page load
    test.leftSidebarSelector().should("contain", "Category");
    test.navigateToSignup();

    //Call Fixture data in object
    cy.get("@testData").then((testData) => {
      //Assertion for login page
      test.containLoginIntoYourAccount().contains("Login to your account");
      test.wrongcredentials(testData.wrongcredentials);
    });
  });
});
