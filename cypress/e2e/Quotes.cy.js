describe('Quote Creation', () => {
    beforeEach(() => {
        cy.login('user1'); // Make sure this user exists in credentials.json
        cy.visit('/home');
        cy.wait(1000);
    });
    //  Creating New Quote
        it('should New Quote', () => {
            cy.get('[routerlink="/quotes"]').click();
            cy.wait(1000);
            cy.get('.btn-new > .p-ripple').click();
            cy.wait(2000);
            cy.get('#clientDetails > .p-card > .p-card-body > .p-card-content > :nth-child(1) > :nth-child(1) > .p-floatlabel > #clientgroup > .p-select-label').click();
            cy.get('.p-iconfield > .p-inputtext').type('MSD');
            cy.get('#clientgroup_0').click();
            cy.get('#Clientuser > .p-select-dropdown').click();
            cy.get('#Clientuser_0').click();
            cy.get('.grid > :nth-child(2) > .flex').click();
            //creating a new Client Address
            cy.get('#ClientAdditionalAddress > .p-select-label').click();
            cy.get('.p-3 > :nth-child(1) > .flex').click();

            
   });
});       