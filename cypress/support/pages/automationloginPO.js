class automationLogin{

    navigateToSignup(){
        cy.clickSignUpHyperLink(' Signup / Login')
    }

    enterEmailToLogin(){
        return cy.get('[data-qa="login-email"]')
    }

    enterLoginPassword(){
        return cy.get('[data-qa="login-password"]')
    }

    logincredentials(data){
        this.enterEmailToLogin().type(data.email)
        this.enterLoginPassword().type(data.loginPassword)
        cy.clickLoginButton('Login')
        cy.clickLogoutInNavyBar('Logout')
    }
}

export default automationLogin