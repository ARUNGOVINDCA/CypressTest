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
        cy.get('.ms-1 > .p-ripple')
              .should('be.visible')
            .click();

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

        //To save 
        //cy.get('.gap-2 > .btn-new > .p-ripple').click();
    });
    it('should Edit a Item', () => {
        cy.get('#pn_id_1_tab_1 > .pi').click();
        cy.wait(1000);
        cy.get('[routerlink="/master/items"]').click();
        cy.wait(1000);
        cy.get(':nth-child(2) > .list-element > .text-right > .ml-2')
            .should('be.visible')
            .click();
        //Change  the Amount
        cy.wait(2000);
        cy.get('#Price')
            .should('be.visible')
            .clear()
            .type('2000', { multiple: true });
        cy.get('.gap-2 > .btn-new > .p-ripple').click()
    });
 it('should inactivate an item', () => {
  // Navigate to Master tab
  cy.get('#pn_id_1_tab_1 > .pi')
    .scrollIntoView()
    .should('be.visible')
    .click();

  // Navigate to Items page
  cy.get('[routerlink="/master/items"]')
    .scrollIntoView()
    .should('be.visible')
    .click();

  // Click on the 15th item in the list
  cy.get(':nth-child(17) > .list-element')
    .scrollIntoView()
    .should('be.visible')
    .click();

  // Click the Inactivate toggle or button
  cy.get('[ng-reflect-model="false"] > .p-ripple')
    .scrollIntoView()
    .should('be.visible')
    .click();

  // Confirm the inactivation in the popup
  cy.get('.p-confirmpopup-accept-button > .p-ripple')
    .scrollIntoView()
    .should('be.visible')
    .click();
});



});       