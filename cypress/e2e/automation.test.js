import automation from "../support/pages/automationPO"
// @ts-ignore
import {randomNumber, generateString} from "../support/pages/commonPO"
const test = new automation()

describe('search signup/login button', () => {
    it('should search signup/login button', () => {
        cy.visit('/')
        //BaseUrl Call from cypress.Config
        test.navigateToSignup()
        //User navigate to website
        
        cy.fixture('example.json').then((data) =>{
            //init the Fixture data
            cy.get('[class="signup-form"] h2').contains('New User Signup!')
        test.initialreq(randomNumber(), generateString(), data.initialreq)
        //Passing function and Fixture data 


        cy.get('[class="title text-center"] b').contains('Enter Account Information')
        test.signform(data.signform)

        
        })

    })
})
