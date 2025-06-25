describe('Settings Quote Catagories', () => {
    beforeEach(() => {
        cy.login('user1'); // Make sure this user exists in credentials.json
        cy.visit('/home');
        cy.wait(1000);
    });
    //  Creating create New Catagories
        it('should create New Catagories', () => {
            cy.get('#pn_id_1_tab_1 > .pi').click();
            cy.wait(1000);
            cy.get(':nth-child(2) > .space-y-1 > li').click();
            cy.wait(1000);
            cy.get('.p-2 > .pi').click();
            cy.get('.border-l > .p-ripple').click();
            cy.wait(1000);
            cy.get('#Name').type('Quote CateGe');
            cy.get('#NameCategory > .p-select-dropdown').click();
            cy.get('#NameCategory_6').click();
            cy.get('#ReferencePatternID > .p-select-dropdown').click();
            cy.get('#ReferencePatternID_4').click();
            cy.get('#ContentTemplateID > .p-select-dropdown').click();
            cy.get('#ContentTemplateID_3').click();
            cy.wait(1000);
            cy.get('#Remark').type('The Categorie for QT Only the template and the Configuration is only for the categorie');
            //Save then Remove the doble Slash 
            //cy.get('.gap-2 > .btn-new > .p-ripple').click();


   });



});          