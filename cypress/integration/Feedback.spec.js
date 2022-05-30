import { url } from "../../config"
import Navbar from "../pageobjects/components/Navbar"
import FeedbackPage from "../pageobjects/pages/FeedbackPage"

describe('Feedback form filling', () => {

    before(function () {

        cy.visit(url)
    
    })

    it('Fill the feedback', () => {

        Navbar.ClickonFeedback()
        FeedbackPage.fillthefeedback()
    })

    it('Verify the feedback message', () => {

        FeedbackPage.feedbackmessagesent()
    } )


})