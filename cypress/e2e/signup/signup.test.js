import signup from "../../support/pages/auto_signupPO/signUpPO";
// @ts-ignore
import { randomNumber, generateString } from "../../support/pages/commonPO";
const test = new signup();

describe("Register User", () => {
  //wrap Fixture data
  beforeEach(() => {
    cy.fixture("data").then((data) => {
      cy.wrap(data).as("testData");
    });
  });

  it("should search signup/login button", () => {
    cy.visit("/");

    //Identify landing page load
    test.leftSideBarCategory().should("contain", "Category");
    //navigate to NavBar SignUp HyperLinks Button
    test.navigateToSignup();

    //Call Fixture data in object
    cy.get("@testData").then((testData) => {
      //Identify intial page load
      test.signUpFormContainNewUserSignup().contains("New User Signup!");

      //Passing function values and Fixture data
      test.initialreq( randomNumber(), generateString(), testData.initialreq);

      //Identify Sign-up page load
      test.titleContainEnterInformation().contains("Enter Account Information");
      test.signform(testData.signform);

      //Identify Home page load
      test.titleContainAccountCreated().contains("Account Created!");
      test.HomePageAfterSignUp(testData.HomePageAfterSignUp);
    });
  });
});
