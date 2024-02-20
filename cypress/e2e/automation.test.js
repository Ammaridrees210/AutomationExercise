import automation from "../support/pages/automationPO"
// @ts-ignore
import {randomNumber, generateString} from "../support/pages/commonPO"
const test = new automation()

describe('search signup/login button', () => {
    it('should search signup/login button', () => {
        cy.visit('/')
        //BaseUrl Call from cypress.Config
                    
        //Assertion for Website Home
            cy.get('.left-sidebar').contains('Category')
        test.navigateToSignup()
        //User navigate to website Home
        
        cy.fixture('data.json').then((data) =>{
        //init the Fixture data

        //Assertion for initialreq page
            cy.get('[class="signup-form"] h2').contains('New User Signup!')
        test.initialreq(randomNumber(), generateString(), data.initialreq)
        //Passing function and Fixture data 

        //Assertion for signform page
            cy.get('[class="title text-center"] b').contains('Enter Account Information')
        test.signform(data.signform)

            cy.get('[data-qa="account-created"] b').contains('Account Created!')    
        test.HomePageAfterSignUp(data.HomePageAfterSignUp)
        })

    })
})
