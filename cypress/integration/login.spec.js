import { login_password, login_username, url } from "../../config"
import Navbar from "../pageobjects/components/Navbar"
import LoginPage from "../pageobjects/pages/LoginPage"

describe('Login Success test', () => {

    before(function () {
        cy.visit(url)
        Navbar.clickSignIn()
    })

    it('logintosite', function() {

        LoginPage.login(login_username, login_password)
    })

    }
)

describe('Login Failed test',() =>  {
    before(function() {
        cy.visit(url)
        Navbar.clickSignIn()

    })

    it('loginfail', function() {

       LoginPage.login('invalidusername', 'invalidpassword')
    })

    it('errormessage', function() {

        LoginPage.loginFailed()
    })

    it('Should click settings', () => {

        Navbar.clickSettings()

    })


    it('Should be signout the application', () => {

        //todo
    })

})