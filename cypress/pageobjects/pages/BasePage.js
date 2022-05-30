export default class BasePage {

    static pause(ms) {

        cy.wait(ms)
    }

    static logInfo(message) {

        cy.log(message)

    }

    static setMobileViewport() {

        cy.viewport('iphone-x')

    }

    static setTabletViewport() {

        cy.viewport('ipad-2')
    }

    static setDesktopViewport() {

        cy.viewport('macbook-13')
    }

    static setAndroidViewPort() {

        cy.viewport("samsung-s10")
    }

    static setIOSViewPort() {

        cy.viewport('iphone-xr')
    }

    static setlargeMonitor() {

        cy.viewport(1980, 1080)
    }
}