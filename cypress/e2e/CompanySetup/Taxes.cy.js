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
        cy.wait(2000);
        cy.get('[routerlink="/master/taxes"]').click();
        cy.get('.p-splitbutton-dropdown').click();
        cy.get('.p-tieredmenu-item-content > .p-ripple').click();
        cy.get('#TaxName').type('Indian GST');
        // Open the multi-select dropdown
        cy.get('.p-multiselect').click();

        // Wait for dropdown panel to render
        // cy.get('.p-multiselect-panel').should('be.visible');

        // Select "GST"
        cy.contains('li.p-multiselect-option', 'GST')
            .should('exist')
            .click({ force: true });

        // Select "NEw TAX"
        cy.contains('li.p-multiselect-option', 'NEw TAX')
            .should('exist')
            .click({ force: true });

        // Close the dropdown (click outside or press ESC)
        cy.get('body').click(0, 0);





        // cy.get('.p-iconfield > .p-inputtext').type('gst');
        // cy.get('#TaxRates_1').click();
        // cy.wait(4000);

        // cy.get('.p-iconfield > .p-inputtext').type('gst');
        // cy.get('#TaxRates_0').click();
        // cy.wait(2000);
        cy.get('.btn-new > .p-ripple').click();

    });
    it('should toggle all matching Taxes: Active → Inactive → Active', () => {

        // ✅ Navigate to Tax Master
        cy.get('#pn_id_1_tab_1 > .pi').click();
        cy.wait(1000);
        cy.get('[routerlink="/master/taxes"]').click();

        // // 🔍 Function: Search Tax by Name
        // const searchTax = (name) => {
        //     cy.get('#input-first-name').clear().type(name);
        //     cy.get('.absolute > .pi').click(); // Search button
        //     cy.wait(1000);
        // };
        // Step 1: Search tax

        cy.get('.sm\\:w-auto > :nth-child(3)')
            .should('be.visible')
            .click();
        cy.get(':nth-child(12) > .w-5\\/6 > .text-sm')
            .should('be.visible')
            .click();

        cy.get('[ng-reflect-model="true"] > .p-ripple')
            .should('be.visible')
            .click();
        cy.get('.p-confirmpopup-accept-button > .p-ripple')
            .should('be.visible')
            .click();

        cy.get('.border-b > .flex > .ml-auto > .p-ripple')
            .should('be.visible')
            .click();



    });

    //Deleting TaX
    it('should Delete the Tax', () => {
        cy.get('#pn_id_1_tab_1 > .pi').click();
        cy.wait(1000);
        cy.get('[routerlink="/master/taxes"]').should('be.visible').click();
        cy.get('.list-wrapper > :nth-child(2)').should('be.visible').click();
        cy.get('.btn > .p-button-icon').should('be.visible').click();
        cy.wait(2000);
        cy.get(':nth-child(1) > p-button.ng-star-inserted > .p-ripple').should('be.visible').click();
        //Automate time Remove this other wise delete could be Tax will be deleted
        //  cy.get('.p-confirmpopup-accept-button > .p-ripple').click();                       
    });
});
