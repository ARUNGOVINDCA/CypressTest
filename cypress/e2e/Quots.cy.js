describe('Master Test', () => {
  beforeEach(() => {
    cy.login('user1'); // Make sure this user exists in credentials.json
    cy.visit('/home');
    cy.wait(1000);
  });
  it.only('should create a New Quote', () => {

  // Navigate to Quotes
  cy.get('[routerlink="/quotes"]').should('be.visible').click({ multiple: true });
  cy.wait(2000);
  cy.get('.btn-new > .p-ripple').should('be.visible').click({ multiple: true });

  // Select client
  cy.get('#clientgroup > .p-select-label').should('be.visible').click();
  cy.get('.p-iconfield > .p-inputtext').type('MSD');
  cy.get('#clientgroup_0').should('be.visible').click();

  cy.get('#Clientuser > .p-select-dropdown').click();
  cy.get('#Clientuser_0').should('exist').click();

  cy.get('.grid > :nth-child(2) > .flex').should('be.visible').click();

  // Confirm quote creation page loaded
  cy.get('.justify-between > .btn-new').should('be.visible').click();

  // Select category
  cy.get('#CategoryID > .p-select-dropdown').click();
  cy.get('#CategoryID_3').click();

  // Edit Reference
  cy.get('.grid > .relative > .absolute > .pi').click();
  cy.get('#Reference').should('be.visible').clear().type('YES/JJA/2025');
  cy.get('#JobTitle').type('This Is MSD Service');
  cy.get('#Subject').type('A/c Clean Services In MSD Flats And Apartments');

  // Quote Date
  cy.get('#follow > .p-datepicker > .p-inputtext').click();
  cy.get('[styleclass="p-datepicker-next-button p-button-icon-only"] > .p-ripple').click();
  cy.get(':nth-child(1) > [aria-label="1"]').click();

  // Valid Until
  cy.get('#ValidUntil > .p-datepicker > .p-inputtext').click();
  cy.get('[aria-label="23"]').click();

  // Approval Follow-Up
  cy.get('#ApprovalFollowUp > .p-datepicker > .p-inputtext').click();

  // Priority, Payment, Division
  cy.get('#Priority > .p-select-dropdown').click();
  cy.get('#Priority_1').click();

  cy.get('#PaymentTerm > .p-select-dropdown').click();
  cy.get('#PaymentTerm_1').click();

  cy.get('#Division > .p-select-dropdown').click();
  cy.get('#Division_17').click();

  // Job Location
  cy.get('#JobLocation > .p-select-label').click();
  cy.get('#JobLocation_0').click();

  // Select Item
  cy.get('#Item > .p-select-dropdown').click();  
  cy.get('#Item_15').click();

  // Toggle switch
  cy.get('div[_ngcontent-ng-c1357793603=""] > .ng-valid > .s-switch > .p-toggleswitch-input').click();

  // Add Discount
  cy.get('.rounded-lg > .w-full > :nth-child(2) > .text-center > .cursor-pointer').click();
  cy.get('#QCDiscountTypeValue0-0').clear().type('50');
  cy.get('.rounded-lg > .w-full > :nth-child(2) > .text-center > .cursor-pointer').click();

  // Add Tax
  cy.get('.p-0').click();
  cy.get(':nth-child(5) > .cursor-pointer').click();

  // Final Action Buttons
  cy.get('.flex.ng-touched > .lg\\:w-\\[35\\%\\] > .flex-row > .p-button-secondary').click();

  // Add another item
  cy.get('.d-flex > p-button > .p-ripple').click();
  cy.get('#Item > span').click({ multiple: true });
  cy.get('#Item_3').click();

  // Save Quote (if needed)
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

  it('should Edit a Deatil Page Quote', () => {
    //Wait 2000 for loading page
    cy.wait(2000);
    cy.get('[routerlink="/quotes"]').should('be.visible').click();
    cy.get(':nth-child(2) > .items-start > .w-5\\/6 > .text-sm', { timeout: 10000 }).should('be.visible').click();



    //Adding Follow aup
    cy.get('#pn_id_87_tab_summary').should('be.visible').click();
    cy.get('.text-xs').should('be.visible').click();
    cy.get('.p-datepicker-dropdown').should('be.visible').click();
    cy.get('[styleclass="p-datepicker-next-button p-button-icon-only"] > .p-ripple').should('be.visible').click();
    cy.get('[aria-label="23"]').should('be.visible').click();
  });


});