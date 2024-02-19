class automation {
    navigateToSignup(){
        cy.get('.left-sidebar').contains('Category')
        cy.clickLink(' Signup / Login')
    }
    initialreq(randomNumber, generateString, data){
        cy.get('[data-qa="signup-name"]').type(`${data.name}`)
        cy.get('[data-qa="signup-email"]').type(`${generateString}+${randomNumber}${data.emailDomain}`)
        cy.clickButton('Signup')
    }
    signform(data){
        cy.get('[type="radio"]').first().check()
        cy.get('[data-qa="password"]').type(`${data.password}`)
        cy.get('[data-qa="days"]').select(`${data.day}`)
        cy.get('[data-qa="months"]').select(`${data.months}`)
        cy.get('[data-qa="years"]').select(`${data.years}`)
        cy.get('[name="newsletter"]').check()
        cy.get('[name="optin"]').check()
        cy.get('[data-qa="first_name"]').type(`${data.first_name}`)
        cy.get('[data-qa="last_name"]').type(`${data.last_name}`)
        cy.get('[data-qa="company"]').type(`${data.company}`)
        cy.get('[data-qa="address"]').type(`${data.address}`)
        cy.get('[data-qa="address2"]').type(`${data.address2}`)
        cy.get('[id="country"]').select(`${data.country}`)
        cy.get('[data-qa="state"]').type(`${data.state}`)
        cy.get('[data-qa="city"]').type(`${data.city}`)
        cy.get('[data-qa="zipcode"]').type(`${data.zipcode}`)
        cy.get('[data-qa="mobile_number"]').type(`${data.mobile_number}`)

    }
}

export default automation