export default class navbardemotest {

    static clickSignUp () {
        cy.get('#signin2').click()
    }

    static clicklogin() {

        cy.get('#login2').click()
    }

    static clickcart() {

        cy.get('[onclick="showcart()"]').click()
    }
}