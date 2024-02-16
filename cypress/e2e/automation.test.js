import automation from "../pages/automationPO"
// @ts-ignore
import randomNumber from "../pages/commonPO"
const obj1 = new automation()

describe('search signup/login button', () => {
    it('should search signup/login button', () => {
        cy.visit('/')
        //BaseUrl Call from cypress.Config
        obj1.navigateToSignup()
        //User navigate to website
        
        cy.fixture('example.json').then((data) =>{
            //init the Fixture data
        obj1.initialreq(randomNumber(), data.initialreq)
        //Passing function and Fixture data 

        obj1.signform(data.signform)
        
        })

    })
})
