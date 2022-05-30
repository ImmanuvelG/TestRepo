import cypress from "cypress";

export default class AccountLinks{

    static ClickonAccountSummary() {
     
         cy.contains('Account Summary').click()
    }
}