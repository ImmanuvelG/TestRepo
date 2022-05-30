// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { cardname, cityname, country, logindemo_password, logindemo_username, month, name, year, youremail } from "../../config"

// import { addMatchImageSnapshotPlugin} from "cypress-image-snapshot/plugin"

// addMatchImageSnapshotPlugin

Cypress.Commands.add('isVisible', selector => {

    cy.get(selector).should('be.visible')

})

Cypress.Commands.add('isHidden', selector => {
 
     cy.get(selector).should('not.exist')
} )

Cypress.Commands.add('login', (username,password) => {

    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.get('#user_remember_me').click()
    cy.contains('Sign in').click()

}
)

Cypress.Commands.add('Feedback', (name, youremail, subject, mailbody) => {

    cy.get('#name').type(name)
    cy.get('#email').type(youremail)
    cy.get('#subject').type(subject)
    cy.get('#comment').type(mailbody)
    cy.contains('Send Message').click()
})

Cypress.Commands.add('signupdemotest', (signup_username, signup_password) => {

    cy.get('#sign-username').click()
    cy.get('#sign-username').type(signup_username)
    cy.wait(2000)
    cy.get('#sign-password').click().type(signup_password)
    cy.wait(2000)
    cy.screenshot()
    cy.get('[onclick="register()"]').click()
})

Cypress.Commands.add('logindemotest', (logindemo_username, logindemo_password) => {

    cy.get('#loginusername').click()
    cy.wait(2000)
    cy.get('#loginusername').type(logindemo_username)
    cy.wait(2000)
    cy.get('#loginpassword').click()
    cy.get('#loginpassword').type(logindemo_password)
    cy.get('[onclick="logIn()"]').click()
})

Cypress.Commands.add('selecttheproduct', () => {

    cy.wait(2000)
    cy.get('#tbodyid').contains('Samsung galaxy s6').click()
    cy.wait(2000)
    cy.get('[onclick="addToCart(1)"]').click()

})

Cypress.Commands.add('cartcheck',() => {

        cy.get('.nav-link').contains('Home').click()
        cy.get('.nav-link').contains('Cart').click()
        cy.get('#tbodyid').should('contain', 'Samsung galaxy s6')
        cy.contains('Place Order').click()
})

Cypress.Commands.add('placetheorder', () => {

    cy.get('#name').type(name)
    cy.get('#country').type(country)
    cy.get('#city').click()
    cy.get('#city').type('Coimbatore')
    cy.screenshot()
    cy.get('#card').type('Mastercard')
    cy.get('#month').type(month)
    cy.get('#year').type(year)
    cy.get('[onclick="purchaseOrder()"]').click()
})

Cypress.Commands.add('thankswindow', () => {
    cy.get('.sweet-alert > h2').contains('Thank you for your purchase!')
    cy.get('[class="lead text-muted "]').contains('Name: iman')
    cy.get('[class="lead text-muted "]').contains('Card Number: Mastercard')
    cy.get('.confirm').contains('OK').click()
})