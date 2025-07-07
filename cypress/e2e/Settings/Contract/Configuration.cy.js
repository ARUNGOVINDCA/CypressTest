describe('Settings Contact Configuration', () => {
    beforeEach(() => {
        cy.login('user1'); // Make sure this user exists in credentials.json
        cy.visit('/home');
        cy.wait(1000);
    });
    //  Creating create New Configuration
        it('should create New Configuration', () => {
            cy.get('#pn_id_1_tab_1 > .pi').click();
            cy.wait(1000);
            cy.get(':nth-child(2) > .space-y-1 > li').click();
            cy.wait(1000);

      


   });



});          