import BasePage from "./Basepage"

export default class LoginPage extends BasePage {

    
    static login (username,password){

        cy.login(username, password)
    }

    static ClickForgotPassword() {

        cy.contains('Forgot your password ?'). click()
    }

    static loginFailed() {

        // cy.get('.alert-error').should('be.visible')

        cy.isVisible('.alert-error')
    }
}