describe('Item Tests', () => {
    beforeEach(() => {
        cy.login('user1'); // Make sure this user exists in credentials.json
        cy.visit('/home');
        cy.wait(1000);
    });
    //  Creating create New Item
    it('should create New Item', () => {
        cy.get('#pn_id_1_tab_1 > .pi').click();
        cy.wait(1000);
        cy.get('[routerlink="/master/items"]').click();
        cy.wait(1000);
        cy.get('.border-l > .p-ripple').click();
        cy.get('#Item').type('A M C Computer');              //Adding Item Name
        cy.get('#ItemCategory > .p-select-dropdown').click();  //drop Down
        cy.wait(1000);
        cy.get('#ItemCategory_0').click();
        cy.get('#Code').type('010');              //Adding Uniq code
        cy.get('#Price').type('250');              //Adding Unit Price
        cy.get('#Unit').type('Hr');                //Adding Unit Measure
        cy.get('#Tax > .p-select-dropdown').click();
        cy.wait(1000);
        cy.get('#Tax_1').click();
        cy.get('#Description').type('The Work is For Annual Maintenance of Computers Only.');
        cy.get('#Remark').type('AMC only');
        //cy.get('.gap-2 > .btn-new > .p-ripple').click();
    });

    
});       