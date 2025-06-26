
describe('Master Test', () => {

  // const username = 'testuser';
  // const password = 'password123';
  beforeEach(() => {
    cy.login('user1'); // Make sure this user exists in credentials.json
    cy.visit('/home');
    cy.wait(1000);
  });

  it('should create a client', () => {
    // Step 1: Visit login page
    // cy.visit('http://localhost:4200/')

    // // Step 2: Enter credentials and submit
    // cy.get('#email').type('artest@test.com')
    // cy.get('#password').type('zaqs#124')
    // cy.get('input[formControlName="username"]').type(username);
    // cy.get('input[formControlName="password"]').type(password);
    // cy.get('button[type="submit"]').click();
    // cy.get('.p-button-rounded', { timeout: 10000 }).should('be.visible').click()


    // // Step 3: Verify we land on the home page
    // cy.url().should('include', '/home');
    // cy.contains('Gojobiz'); // Or any unique content on the home page

    // Step 4: Click on navigation element to go to the feature page
    cy.get('#pn_id_1_tab_1 > .pi').click();
    cy.wait(2000);

    cy.get('[routerlink="/master/client"]').click();

    //click on the New button for creating  new client
    cy.get('.btn-new > .p-ripple', { timeout: 1000 }).click();
    cy.wait(2000);

    //adding a client name

    cy.get('#title').type('Cor');
    cy.get('#clientname').type('Emirates Corp Office');
    cy.get('#AlternateName').type('E.C.O');
    cy.get('#CustomerCode').type('007');
    cy.get('[pc132=""] > #clientgroup > .p-select-dropdown').click();    //Drop down
    cy.get('#clientgroup_1 > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get('#trn').type('EMPIRE007');
    cy.get('#email').type('emirecorp@empire.com');
    cy.get('#phone').type('58877557');
    cy.get('#Mobile').type('9987889657');
    cy.get('#fax').type('58877557');
    cy.scrollTo('top', { duration: 1000 }); // Scroll to top with smooth animation
    cy.scrollTo('bottom', { duration: 1000 }); // Scroll to bottom with smooth animation
    // cy.get('.sticky > :nth-child(2)').click({ multiple: true });
    //Address Details Adding
    cy.get('#Street').type('Emirates Building,sahik HanBU ROAD');
    cy.get('#Street2').type('Palance road');
    cy.get('#city').type('Abudhabi');
    cy.get('[pc151=""] > #Street').type('Dmi77957');
    cy.get('[pc153=""] > #clientgroup > .p-select-dropdown').click();   //drop down country
    cy.get('.p-iconfield > .p-inputtext').type('Abu');
    // cy.wait(2000);
    cy.get('#clientgroup_0').click({ force: true });


    cy.get('#country > .p-select-dropdown').click();                       //drop down country
    cy.get('.p-iconfield > .p-inputtext').type('United Arab Emirates');
    cy.get('#country_0').click({ force: true });
    // #clientgroup > p-overlay > div > div > div > div.p-select-list-container
    //Other details Of CLient
    cy.get('[pc158=""] > #clientgroup > .p-select-dropdown').click();
    cy.get('.p-iconfield > .p-inputtext').type('arun');
    cy.wait(2000);
    cy.get('#clientgroup_0').click();
    cy.get('#Validity').clear().type('15');
    cy.get('#CreditLimits').clear().type('10000');
    cy.get('#Priority > .p-select-dropdown').click();
    cy.get('#Priority_0').click();
    cy.get('#payment > .p-select-dropdown').click();
    cy.get('#payment_1').click();
    cy.get('#placeof > .p-select-dropdown').click();
    cy.get('#placeof_1 > .ng-star-inserted').click();
    //Remark
    cy.get('#remark').should('not.be.disabled').clear().type('Emirates Airline, the flagship carrier of the group, is the largest airline in the Middle East and one of the worlds leading international airlines. Operating a fleet of over 250 wide-bodied aircraft, including the Airbus A380 and Boeing 777, it serves more than 150 destinations across six continents . In the fiscal year ending March 2025, Emirates reported a record profit of $5.2 billion, transporting 53.7 million passengers and generating $34.9 billion in revenue ');

    //Save the Client
    // cy.get('.btn-new > .p-ripple').click();

  });

  it('should Edit a Client', () => {
    cy.get('#pn_id_1_tab_1 > .pi').click();
    cy.wait(1000);
    cy.get('[routerlink="/master/client"]').click();
    cy.wait(3000);
    cy.get(':nth-child(4) > .items-start > .w-1\\/6 > .ml-2').click();
    cy.wait(1000);
    cy.get('#title').clear().type('Spl');                                     //Added clear() for repeat Automation the values add lot 
    cy.get('#phone').clear().type('9877866225');
    cy.get('.btn-new > .p-ripple').click();
  });


  it('should verify client detail page filters work correctly', () => {

    cy.get('#pn_id_1_tab_1 > .pi', { timeout: 5000 }).should('be.visible').click();
    cy.get('[routerlink="/master/client"]').should('be.visible').click();
    cy.get(':nth-child(11) > .items-start > .w-5\\/6 > .text-sm').should('be.visible').click();
    cy.get('#pn_id_37_tab_JobLocation').should('be.visible').click();
    cy.get('#input-first-name').should('be.visible').type('Al');
    cy.get('.absolute').should('be.visible').click();
    cy.get('.filter-On > .p-ripple').should('be.visible').click();
    cy.get('.p-button-warn').should('be.visible').click();
    
  });





});



