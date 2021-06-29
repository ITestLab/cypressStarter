import { contains } from "cypress/types/jquery";

export class CareerPage {

    clickOpportunity(value: any) {
        cy.get('.job-block').find('a h3').filter(`:contains(${value})`).first().click();
    }

    verifyPage() {
        cy.get('.job-block').should('be.visible');
    }
}