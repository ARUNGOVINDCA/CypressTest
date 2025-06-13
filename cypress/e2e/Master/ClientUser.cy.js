describe('Home Page Tests', () => {
    it('should log in and navigate to feature page', () => {
        // Step 1: Visit login page
        cy.visit('http://localhost:4200/');

        // Step 2: Enter credentials and submit
        cy.get('#email').type('artest@test.com');
        cy.get('#password').type('zaqs#124');
        cy.get('.p-button-rounded', { timeout: 3000 }).should('be.visible').click();
        cy.url().should('include', '/home');
        cy.get('#pn_id_2_tab_1 > .pi').click();
        cy.wait(2000);
        cy.get('[routerlink="/master/clientuser"]').click();
        //Click on New Button
        cy.get('.btn-new > .p-ripple').click();
        cy.wait(2000);
        cy.get('#ItemCategory > .p-select-dropdown').click();
        cy.get('.p-iconfield > .p-inputtext').type('KD COMPANY');
        cy.get('#ItemCategory_0').click();
        cy.get('.w-24 > #Code').type('Mr');
        cy.get('#Name').type('Ibrahim KASO');           
        cy.get(':nth-child(3) > .p-floatlabel > #Code').type('MAnager');        //Designation
        cy.get('#Price').type('8789866556');                                    //Phone Number
        cy.get('#Unit').type('ibrahimkaso@kdcompany.com');                      //Email
        cy.get('#Remark').type('The Entire Account department Head');         //Remark

        //To save Click 
        // cy.get('.gap-2 > .btn-new > .p-ripple').click();
    });
});