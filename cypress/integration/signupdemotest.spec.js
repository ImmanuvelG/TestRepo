import { demourl, signup_password, signup_username } from "../../config"
import navbardemotest from "../pageobjects/components/Navbardemotest"
import signup from "../pageobjects/pages/Signupdemotest"

describe('signup in the demo test site', () => {

    before( function () {

        cy.visit(demourl)
        cy.screenshot()
        navbardemotest.clickSignUp()
        cy.screenshot()

    })

    it('Sign up successful', ()=> {

        signup.signupdemotest(signup_username, signup_password)
    })

    })