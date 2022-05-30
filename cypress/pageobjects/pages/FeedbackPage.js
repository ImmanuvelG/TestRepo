import { mailbody, name, subject, youremail } from "../../../config";

export default class FeedbackPage{ 

    static fillthefeedback() {

        cy.Feedback(name, youremail, subject,      
            mailbody )
    }

    static feedbackmessagesent (){

        cy.isVisible('.page-header')
        
    }

}