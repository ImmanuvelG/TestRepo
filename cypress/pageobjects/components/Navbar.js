export default class Navbar{

    static clickOnLogo() {
       cy.get('.brand').click()
    }

    static search(text){

        cy.get('#serachterm').type(`${text} {enter}`)
    }

    static clickSignIn() {

        cy.get('#signin_button').click()
    }

    static clickSettings() {

        cy.contains('Settings').click()
    }

    static ClickonFeedback(){

        cy.contains('Feedback').click()
    }




}