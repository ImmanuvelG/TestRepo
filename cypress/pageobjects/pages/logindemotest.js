import BasePage from "./Basepage"

export default class logindemotest extends BasePage {

    
    static logindemotest (logindemo_username, logindemo_password){

        cy.logindemotest(logindemo_username, logindemo_password)
}


}