describe('Division Tests', () => {
    beforeEach(() => {
        cy.login('user1'); // Make sure this user exists in credentials.json
        cy.visit('/home');
        cy.wait(1000);
    });

    //  Creating create Division
    it('should create New Item', () => {
        cy.get('#pn_id_1_tab_1 > .pi')
            .should('be.visible')
            .click();
        cy.get('[routerlink="/master/division"]')
            .should('be.visible')
            .click();
        cy.get('.ms-1 > .p-ripple').click();
        cy.get('#Name').type('ACCOUNT SUB');
        cy.get('#Tax > .p-select-dropdown')
            .should('be.visible')
            .click();
        cy.get('.p-iconfield > .p-inputtext')
            .should('be.visible')
            .type('ACCOU');
        cy.get('#Tax_1')
            .should('be.visible')
            .click();
        //To save New Tax
        // cy.get('.p-ripple.ng-star-inserted > .p-ripple')
        // .should('be.visible')
        // .click();

    });
    it('should Edit Division', () => {
        cy.get('#pn_id_1_tab_1 > .pi')
            .should('be.visible')
            .click();
        cy.get('[routerlink="/master/division"]')
            .should('be.visible')
            .click();
        cy.get(':nth-child(2) > .text-right > .ml-2')
            .should('be.visible')
            .click();
        cy.wait(2000);
        cy.get('#Name')
            .should('be.visible')
            .clear()
            .type(' New ');
        //Update division Name
        cy.get('.gap-2 > .btn-new > .p-ripple').click();

    });
    it.only('should Add sub Division', () => {
        cy.get('#pn_id_1_tab_1 > .pi')
            .should('be.visible')
            .click();
        cy.get('[routerlink="/master/division"]')
            .should('be.visible')
            .click();
        cy.get('.list-wrapper > :nth-child(3)')
            .should('be.visible')
            .click();
        cy.get('.p-button-success').click();
        cy.get('.p-popover-content > :nth-child(2)').click();
        cy.get('#Name').type('Account Abu Dhabi');
        cy.get('.p-ripple.ng-star-inserted > .p-ripple').click();

    });
    it('should Filter Work in Properly', () => {
        cy.get('#pn_id_1_tab_1 > .pi')
            .should('be.visible')
            .click();
        cy.get('[routerlink="/master/division"]')
            .should('be.visible')
            .click();
        cy.get('[variant="outlined"] > .p-ripple').click();
        cy.get('#pn_id_10 > .p-select-dropdown').click();
        // cy.get('[role="option"][aria-label="Active"]').should('be.visible')
        //   .should('have.attr', 'aria-selected', 'false').click();



    });
});       