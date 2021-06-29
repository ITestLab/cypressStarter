import { contains } from "cypress/types/jquery";

export class LandingPage {

    clickMenu(value: any) {
        cy.get('ul.menu').find('.menu-item').filter(`:contains(${value})`).first().click();
    }

    clickSubMenu(value: any) {
        cy.get('li.expanded').find('ul.sub-menu').find('.menu-item').filter(`:contains(${value})`).first().click();

    }

    verifyPage() {
        cy.title().should('eq', 'Home - Iodine');
    }
}