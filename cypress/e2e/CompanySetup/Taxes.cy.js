describe('Tax Tests', () => {
    beforeEach(() => {
        cy.login('user1'); // Make sure this user exists in credentials.json
        cy.visit('/home');
        cy.wait(1000);
    });
    //  Creating create New TaX
        it('should create New TaX', () => {
            cy.get('#pn_id_1_tab_1 > .pi').click();
            cy.wait(3000);
            cy.get('[routerlink="/master/taxes"]').click();
            cy.get('.p-splitbutton-button').click();
            cy.get('#TaxName').type('Central GST');
            cy.get('#TaxRate').type('18');
            cy.get('.p-textarea').type('CGST stands for Central goods and services tax. It is levied by the central government on the intrastate movement of goods and services, i.e., transactions within one state. The Central goods and services tax Act 2017 govern CGST, which applies to the entire country except Jammu and Kashmir');
            //Toggle Switch to default
            cy.get('input[role="switch"].p-toggleswitch-input').click();
            //To click on save New TAx button
            //cy.get('.btn-new > .p-ripple').click();
            cy.wait(3000);
        });
     //Creating create New Group TaX
        it('should Create New Group Tax', () => {
            cy.get('#pn_id_1_tab_1 > .pi').click();
            cy.wait(3000);
            cy.get('[routerlink="/master/taxes"]').click();
            cy.get('.p-splitbutton-dropdown').click();
            cy.get('.p-tieredmenu-item-content > .p-ripple').click();
            cy.get('#TaxName').type('Indian GST');
            // Step 2: Wait for the dropdown panel to appear
            cy.get('.p-multiselect-label-container').click();
            // cy.get('.p-iconfield > .p-inputtext').type('gst');
            cy.get('#TaxRates_4',).click();
            cy.wait(4000);
            cy.get('#TaxRates_2',).click();

            // cy.get('.p-iconfield > .p-inputtext').type('gst');
            // cy.get('#TaxRates_1').click();
            // cy.wait(4000);

            // cy.get('.p-iconfield > .p-inputtext').type('gst');
            // cy.get('#TaxRates_0').click();
            // cy.wait(2000);
            cy.get('.btn-new > .p-ripple').click();

        });
    //Active / Inactive TaX
    it('should Inactive the Tax', () => {
        cy.get('#pn_id_1_tab_1 > .pi').click();
        cy.wait(1000);
        cy.get('[routerlink="/master/taxes"]').click();
        cy.get('#input-first-name').type('Indian GST');
        cy.get('.absolute > .pi').click();
        cy.wait(1000);
        cy.get('.list-wrapper > :nth-child(3)').click();
        cy.get('[ng-reflect-model="false"] > .p-ripple').click();
        cy.get('.ng-untouched > .p-ripple').click();                //change every time Automate Time Active/Inactive
        cy.get('.ml-auto > .p-ripple').click();
        cy.wait(1000);


    });
    //Deleting TaX
    it('should Delete the Tax', () => {
        cy.get('#pn_id_1_tab_1 > .pi').click();
        cy.wait(1000);
        cy.get('[routerlink="/master/taxes"]').click();
        cy.get('.list-wrapper > :nth-child(2)').click();
        cy.get('.btn > .p-button-icon').click();
        cy.wait(2000);
        cy.get(':nth-child(1) > p-button.ng-star-inserted > .p-ripple').click();
    //  cy.get('.p-confirmpopup-accept-button > .p-ripple').click();                        //Automate time Remove this other wise delete could be Tax will be deleted
    });
});
