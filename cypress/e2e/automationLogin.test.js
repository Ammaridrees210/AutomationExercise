import automationLogin from "../support/pages/automationloginPO"

const test = new automationLogin()

describe('search signup/login button', () => {
    it('should search signup/login button', () => {
        cy.visit('/')
        //BaseUrl Call from cypress.Config
                    
        //Assertion for Website Home
            cy.get('.left-sidebar').contains('Category')
        test.navigateToSignup()

        cy.fixture('data.json').then((data) =>{
            //init the Fixture data
    
            //Assertion for login page
                cy.get('[class="login-form"] h2').contains('Login to your account')
            test.logincredentials(data.logincredentials)
        })
    })
})
