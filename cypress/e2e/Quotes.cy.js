describe('Quote Creation', () => {
    beforeEach(() => {
        cy.login('user1'); // Make sure this user exists in credentials.json
        cy.visit('/home');
        cy.wait(1000);
    });
    //  Creating New Quote
    it('should create a New Quote', () => {
        cy.get('[routerlink="/quotes"]').click();
        cy.wait(1000);
        cy.get('.btn-new > .p-ripple').click();
        cy.wait(2000);
        cy.get('#clientDetails > .p-card > .p-card-body > .p-card-content > :nth-child(1) > :nth-child(1) > .p-floatlabel > #clientgroup > .p-select-label').click();
        cy.get('.p-iconfield > .p-inputtext').type('MSD');
        cy.wait(1000);  
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
        cy.get('#CategoryID_3').click();

        //Edit in Refernce
        cy.get('.grid > .relative > .absolute > .pi').click();
        cy.get('#Reference').click();
        cy.wait(2000);
        cy.get('#Reference').clear().type('YES/JJA/2025');
        cy.get('#JobTitle').type('This Is MSD Service');
        cy.get('#Subject').type('A/c Clean Services In MSD Flats And Apratments');
        //selecting quote date 
        cy.get('#follow > .p-datepicker > .p-inputtext').click();
        cy.get('[styleclass="p-datepicker-next-button p-button-icon-only"] > .p-ripple').click();
        cy.get(':nth-child(1) > [aria-label="1"]').click();
        //selecting quote Valid till date
        cy.get('#ValidUntil > .p-datepicker > .p-inputtext').click();
        cy.wait(2000);
        cy.get('[aria-label="23"]').click();
        cy.get('#ApprovalFollowUp > .p-datepicker > .p-inputtext').click();
        cy.wait(1000);
        cy.get('#Priority > .p-select-dropdown').click();
        cy.get('#Priority_1').click();
        cy.wait(1000);
        cy.get('#PaymentTerm > .p-select-dropdown').click();
        cy.get('#PaymentTerm_1').click();
        cy.wait(1000);
        cy.get('#Division > .p-select-dropdown').click();
        cy.get('#Division_17').click();
        cy.wait(1000);
        cy.get('#JobLocation > .p-select-label').click();

        // //click on select new jobsite
        // cy.get('.p-3 > :nth-child(1) > .flex').click();
        // cy.get('#Name').type('John Wick');
        // cy.get('#Code').type('LAmo AMrt Building ROAD');
        // cy.get('#Price').type('MA MALL CITY ABU DHABI');
        // cy.get('#Unit').type('ABD78995');
        // cy.get('#zones > .p-select-dropdown').click();
        // cy.wait(1000);
        // cy.get('#zones_3').click();
        // cy.get(':nth-child(7) > .p-floatlabel > #clientgroup > .p-select-dropdown').click();
        // cy.wait(1000);
        // cy.get('#clientgroup_4').click();
        // cy.get('#country > .p-select-dropdown').click();
        // cy.wait(1000);
        // cy.get('#country_55').click();
        // cy.get(':nth-child(9) > .p-floatlabel > #Unit').type('24.572896831466036');
        // cy.get(':nth-child(10) > .p-floatlabel > #Unit').type('55.15222722263675');
        // cy.get('#Remark').type('The Jobsite is the best Job sitte in the country');
        // //Click on the New Button 
        // // cy.get('app-joblocation-edit.ng-star-inserted > form.ng-dirty > .justify-between > .gap-2 > .btn-new > .p-ripple').click();

        cy.get('#JobLocation_0').click();
        cy.wait(1000);
        cy.get('#Item > .p-select-dropdown').click();  
        cy.get('#Item_15').click();
        cy.wait(2000)
        cy.get('div[_ngcontent-ng-c1357793603=""] > .ng-valid > .s-switch > .p-toggleswitch-input').click();
        //Adding Discount
        cy.get('.rounded-lg > .w-full > :nth-child(2) > .text-center > .cursor-pointer').click();
        cy.get('#QCDiscountTypeValue0-0').clear().type('50');
        cy.wait(2000);
        cy.get('.rounded-lg > .w-full > :nth-child(2) > .text-center > .cursor-pointer').click();
        //Adding new tzx
        cy.get('.p-0').click();
        cy.get(':nth-child(5) > .cursor-pointer').click();

        // cy.get('.d-flex > p-button > .p-ripple').click();
        // cy.get('.flex.ng-touched > .lg\\:w-\\[35\\%\\] > .flex-row > .p-button-secondary').click();
        // cy.wait(1000);

        cy.get('.flex.ng-touched > .lg\\:w-\\[35\\%\\] > .flex-row > .p-button-secondary').click();
        //Adding a new item
        cy.get('.d-flex > p-button > .p-ripple').click();
        cy.wait(1000);
        cy.get('#Item > span').click({ multiple: true });
        cy.get('#Item_3').click();

        //To save Qutote
        // cy.get('.btn-new > .p-ripple').click();




    });

    //Quote Edit
    it('should Edit a Quote', () => {
        //Wait 2000 for loading page
        cy.wait(2000);
        cy.get('[routerlink="/quotes"]').click();
        cy.wait(5000);
        cy.get(':nth-child(7) > .items-start > .w-1\\/6 > .ml-2').click();
        //Change to Recurring
        cy.get('[ng-reflect-model="false"] > .p-ripple')
            .scrollIntoView()
            .click();
        //Change the category
        cy.get('#CategoryID > .p-select-dropdown').click();
        cy.get('#CategoryID_4').click();
        //Update The Quote
        cy.get('.btn-new > .p-ripple').click();

    });



// Deatil Page Quote Check Edit

     it.only('should Edit a Deatil Page Quote', () => {
        //Wait 2000 for loading page
        cy.wait(2000);
        cy.get('[routerlink="/quotes"]').click();
        cy.wait(5000);
        cy.get(':nth-child(2) > .items-start > .w-5\\/6 > .text-sm').click();
       
    });




});       