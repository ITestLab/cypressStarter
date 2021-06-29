export class ViewPage{
    clickCancel() {
        cy.get('button').contains('Cancel').click();
    }
    
    clickApply()
    {  
    cy.get('div.js-jobs-sidebar').find('button.js-jobs-action').click();
    }
    fillTextBoxFields(fieldName:any,value:any)
    {
        cy.get(`input[name="${fieldName}"]`).type(value);
    }

    selectDropDownField(fieldName:any,value:any)
    {
        cy.get(`.${fieldName}`).click();
        cy.get('.fab-MenuList').find('.fab-MenuOption__row').filter(`:contains(${value})`).first().click();
       
    }
    enterTextArea(index:number, value: any) {
       cy.get('textArea').eq(index).type(value);
          }

    verifyPage()
    {
        cy.get('div.js-jobs-sidebar').find('button.js-jobs-action').should('be.visible');
    }
}