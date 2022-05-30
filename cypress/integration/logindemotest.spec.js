import { demourl, logindemo_password, logindemo_username, signup_password, signup_username } from "../../config"
import navbardemotest from "../pageobjects/components/Navbardemotest"
import Homedemotest from "../pageobjects/pages/Homedemotest"
import logindemotest from "../pageobjects/pages/logindemotest"
import signup from "../pageobjects/pages/Signupdemotest"

describe('login to the demo test site', () => {

    before( function () {

        cy.visit(demourl)
        navbardemotest.clicklogin()
        cy.wait(2000)
        cy.screenshot()

    })

    it('login to demotest site', () => {

        logindemotest.logindemotest(logindemo_username, logindemo_password)
        cy.screenshot()
        Homedemotest.addtheproduct()
        cy.wait(2000)
        cy.screenshot()
        cy.cartcheck()
        cy.screenshot()
        Homedemotest.placetheorder()
        cy.screenshot()
        cy.wait(2000)
        cy.thankswindow()
        cy.screenshot()

    })

})