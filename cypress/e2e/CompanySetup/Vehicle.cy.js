describe('Vehicle Test', () => {
    beforeEach(() => {
        cy.login('user1'); // Make sure this user exists in credentials.json
        cy.visit('/home');
        cy.wait(1000);
    });

    it('should create a new vehicle', () => {
        cy.get('#pn_id_1_tab_1 > .pi').click();
        cy.wait(1000);
        cy.get('[routerlink="/master/vehicles"]').click();
        //create a new vehicle
        cy.get('.border-l > .p-ripple').click();
        cy.get('#Item').type('Benz S Class');
        cy.get('#Code').type('KLOI7889KO');
        cy.get('#driveruser > .p-select-dropdown').click();
        cy.get('#driveruser_16').click();
        cy.wait(1000);
        cy.get('#Remark').type('we are committed to delivering exceptional services that exceed our clients expectations');
        // cy.get('.gap-2 > .btn-new > .p-ripple').click();                 //When save change the car name or driver
    }); 
    it('should Delete a vehicle', () => {
        cy.get('#pn_id_1_tab_1 > .pi').click();
        cy.wait(1000);
        cy.get('[routerlink="/master/vehicles"]').click();
        //Delete a new vehicle
        cy.get('.list-wrapper > :nth-child(14)').click();
  
    }); 
});