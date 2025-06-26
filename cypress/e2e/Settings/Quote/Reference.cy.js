
  beforeEach(() => {
    cy.login('user1'); // Make sure this user exists in credentials.json
    cy.visit('/home');
    cy.wait(1000);
  });
it('should create a client', () => {

  // Navigate to client section
  cy.get('#pn_id_1_tab_1 > .pi').should('be.visible').click();
  cy.get('[routerlink="/master/client"]').should('be.visible').click();

  // Click "New" to create a client
  cy.get('.btn-new > .p-ripple', { timeout: 3000 }).should('be.visible').click();

  // Fill in client info
  cy.get('#title').type('Cor', { delay: 100 });
  cy.get('#clientname').type('Emirates Corp Office', { delay: 100 });
  cy.get('#AlternateName').type('E.C.O', { delay: 100 });
  cy.get('#CustomerCode').type('007', { delay: 100 });

  // Select client group from dropdown
  cy.get('[pc132=""] > #clientgroup > .p-select-dropdown').should('be.visible').click();
  cy.get('#clientgroup_1 > .ng-star-inserted').should('be.visible').click( { delay: 100 });

  // Contact info
  cy.get('#trn').type('EMPIRE007');
  cy.get('#email').type('emirecorp@empire.com');
  cy.get('#phone').type('58877557');
  cy.get('#Mobile').type('9987889657');
  cy.get('#fax').type('58877557');

  // Scroll actions
  cy.scrollTo('top', { duration: 500 });
  cy.scrollTo('bottom', { duration: 500 });

  // Address
  cy.get('#Street').type('Emirates Building,sahik HanBU ROAD');
  cy.get('#Street2').type('Palance road');
  cy.get('#city').type('Abudhabi');
  cy.get('[pc151=""] > #Street').type('Dmi77957');

  // Country dropdown
  cy.get('[pc153=""] > #clientgroup > .p-select-dropdown').click();
  cy.get('.p-iconfield > .p-inputtext').type('Abu');
  cy.get('#clientgroup_0').should('be.visible').click({ force: true });

  // Country (duplicate step?)
  cy.get('#country > .p-select-dropdown').click();
  cy.get('.p-iconfield > .p-inputtext').type('United Arab Emirates');
  cy.get('#country_0').should('be.visible').click({ force: true });

  // Other details
  cy.get('[pc158=""] > #clientgroup > .p-select-dropdown').click();
  cy.get('.p-iconfield > .p-inputtext').type('arun');
  cy.get('#clientgroup_0').should('be.visible').click();

  cy.get('#Validity').clear().type('15');
  cy.get('#CreditLimits').clear().type('10000');

  cy.get('#Priority > .p-select-dropdown').click();
  cy.get('#Priority_0').click();

  cy.get('#payment > .p-select-dropdown').click();
  cy.get('#payment_1').click();

  cy.get('#placeof > .p-select-dropdown').click();
  cy.get('#placeof_1 > .ng-star-inserted').click();


  // Remarks
    cy.wait(2000);
     cy.get('#remark').should('not.be.disabled').clear().type('Emirates Airline, the flagship carrier of the group, is the largest airline in the Middle East and one of the worlds leading international airlines. Operating a fleet of over 250 wide-bodied aircraft, including the Airbus A380 and Boeing 777, it serves more than 150 destinations across six continents . In the fiscal year ending March 2025, Emirates reported a record profit of $5.2 billion, transporting 53.7 million passengers and generating $34.9 billion in revenue ');


  // Save the Client
  // cy.get('.btn-new > .p-ripple').click();
});
