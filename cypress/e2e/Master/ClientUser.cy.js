describe('Master Test', () => {
    beforeEach(() => {
        cy.login('user1'); // Make sure this user exists in credentials.json
        cy.visit('/home');
        cy.wait(1000);
    });
    it('should create a ClientUser', () => {

        cy.get('#pn_id_1_tab_1')
            .should('be.visible')
            .click();
        cy.get('[routerlink="/master/clientuser"]').click();
        //Click on New Button
        cy.get('.btn-new > .p-ripple')
            .should('be.visible')
            .click();
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


    it('Edit The Clent user Page' , () => {
        cy.get('#pn_id_1_tab_1')
            .should('be.visible')
            .click();
        cy.get('[routerlink="/master/clientuser"]').click();
        cy.get(':nth-child(1) > .list-element > .w-5\\/6 > .text-sm')            
        // .should('be.visible')            
        .click();
        cy.wait(1000);



    }) 
});