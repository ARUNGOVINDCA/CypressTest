describe('Quote Creation', () => {
    beforeEach(() => {
        cy.login('user1'); // Make sure this user exists in credentials.json
        cy.visit('/home');
        cy.wait(1000);
    });
    //  Creating New Quote
    it('should New Quote', () => {
        cy.get('[routerlink="/quotes"]').click();
        cy.wait(1000);
        cy.get('.btn-new > .p-ripple').click();
        cy.wait(2000);
        cy.get('#clientDetails > .p-card > .p-card-body > .p-card-content > :nth-child(1) > :nth-child(1) > .p-floatlabel > #clientgroup > .p-select-label').click();
        cy.get('.p-iconfield > .p-inputtext').type('MSD');
        cy.get('#clientgroup_0').click();
        cy.get('#Clientuser > .p-select-dropdown').click();
        cy.get('#Clientuser_0').click();
        cy.get('.grid > :nth-child(2) > .flex').click();
        //creating a new Client Address
        // cy.get('#ClientAdditionalAddress > .p-select-label').click();
        // cy.get('.p-3 > :nth-child(1) > .flex').click();
        // cy.get(':nth-child(2) > .p-floatlabel > #Price').type('2256687');
        // cy.get(':nth-child(3) > .p-floatlabel > #Price').type('9878866357');
        // cy.get(':nth-child(4) > .p-floatlabel > #Price').type('2256687');
        // cy.get(':nth-child(5) > .p-floatlabel > #Unit').type('haina1100@gmail.com')
        // cy.get(':nth-child(6) > .p-floatlabel > #Code').type('2nd street,Sevanth Empire Road ');
        // cy.get(':nth-child(7) > .p-floatlabel > #Code').type('Karama City');
        // cy.get(':nth-child(8) > .p-floatlabel > #Price').type('Murabai');
        // cy.get(':nth-child(9) > .p-floatlabel > #Unit').type('MUR7899');
        // cy.get(':nth-child(10) > .p-floatlabel > #clientgroup > .p-select-dropdown').click();
        // cy.wait(1000);
        // cy.get('#clientgroup_4').click();
        // cy.get('#country > .p-select-dropdown').click();
        // cy.wait(1000);
        // cy.get('.p-iconfield > .p-inputtext').type('United Arab Emirates');
        // cy.get('#country_0').click();
        // cy.wait(1000);
        // cy.get('#Remark').type('The Comapny Flat Address,Keep Work As Expected In all place  ');
        // cy.get('app-clientaddress-edit.ng-star-inserted > form.ng-dirty > .justify-between > .gap-2 > .btn-new > .p-ripple').click();
        // cy.get('.justify-between > .btn-new').click();

        cy.get('.justify-between > .btn-new').click();

        //Adding categorie
        cy.get('#CategoryID > .p-select-dropdown').click();
        cy.get('#CategoryID_4').click();

        //Edit in Refernce
        cy.get('.grid > .relative > .absolute > .pi').click();
        cy.get('#Reference').click();
        cy.wait(1000);
        cy.get('#Reference').clear().type('YES/JJA/2025');
        cy.get('#JobTitle').type('This Is MSD Service');
        cy.get('#Subject').type('A/c Clean Services In MSD Flats And Apratments');  
        cy.get('#follow > .p-datepicker > .p-inputtext').click();
        cy.get('[styleclass="p-datepicker-next-button p-button-icon-only"] > .p-ripple').click();
        cy.get(':nth-child(1) > [aria-label="1"]').click();
        cy.get('#ValidUntil > .p-datepicker > .p-inputtext').click();
        cy.get(':nth-child(1) > [aria-label="15"] > .p-ripple').click();

            
            



    });
});       