describe('Home Page Tests', () => {
    beforeEach(() => {
        cy.login('user1'); // Make sure this user exists in credentials.json
        cy.visit('/home');
        cy.wait(1000);
    });

    it('should display dashboard widgets', () => {
        cy.get('#pn_id_1_tab_1 > .pi').click();
        cy.wait(3000);
    });
});