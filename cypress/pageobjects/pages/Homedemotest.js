import BasePage from "./Basepage"

export default class Homedemotest extends BasePage {


    static addtheproduct() {

        cy.selecttheproduct()
    }

    static placetheorder(){

        cy.placetheorder()
    }
}


