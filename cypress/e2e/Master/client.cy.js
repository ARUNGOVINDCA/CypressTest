
describe('Login to Jobiz', () => {

  // const username = 'testuser';
  // const password = 'password123';

  it('should log in and navigate to feature page', () => {
    // Step 1: Visit login page
    cy.visit('http://localhost:4200/')

    // Step 2: Enter credentials and submit
    cy.get('#email').type('artest@test.com')
    cy.get('#password').type('zaqs#124')
    // cy.get('input[formControlName="username"]').type(username);
    // cy.get('input[formControlName="password"]').type(password);
    // cy.get('button[type="submit"]').click();
    cy.get('.p-button-rounded', { timeout: 10000 }).should('be.visible').click()


    // Step 3: Verify we land on the home page
    cy.url().should('include', '/home');
    // cy.contains('Gojobiz'); // Or any unique content on the home page

    // Step 4: Click on navigation element to go to the feature page
    cy.wait(2000);
    cy.get('#pn_id_2_tab_1 > .pi').click();

    cy.get('[routerlink="/master/client"]').click();

    //click on the New button for creating  new client
    cy.get('.btn-new > .p-ripple').click();
    cy.wait(2000);

    //adding a client name

    cy.get('#title').type('Cor');
    cy.get('#clientname').type('Emirates Corp Office');
    cy.get('#AlternateName').type('E.C.O');
    cy.get('#CustomerCode').type('007');
    cy.get('[pc140=""] > #clientgroup > .p-select-dropdown').click();    //Drop down
    cy.get('#clientgroup_1 > .ng-star-inserted').click();
    cy.wait(2000);
    cy.get('#trn').type('EMPIRE007');
    cy.get('#email').type('emirecorp@empire.com');
    cy.get('#phone').type('58877557');
    cy.get('#Mobile').type('9987889657');
    cy.get('#fax').type('58877557');
    cy.scrollTo('top', { duration: 1000 }); // Scroll to top with smooth animation
    cy.scrollTo('bottom', { duration: 1000 }); // Scroll to bottom with smooth animation
    cy.get('.sticky > :nth-child(2)').click();
    cy.get('.grid > div[_ngcontent-ng-c1955482748=""] > .p-floatlabel > #Street').type('Emirates Building,sahik HanBU ROAD');
    cy.get('#Street2').type('Palance road');
    cy.get('#city').type('Abudhabi');
    cy.get('[pc158=""] > #Street').type('Dmi77957');
    cy.get('[pc160=""] > #clientgroup > .p-select-dropdown').click();   //drop down country
    cy.get('.p-iconfield > .p-inputtext').type('Abu');
    cy.get('#clientgroup_0 > .ng-star-inserted').click();
    cy.get('#country > .p-select-dropdown').click();                       //drop down country
    cy.get('.p-iconfield > .p-inputtext').type('United Arab Emirates');
    cy.get('#country_0 > .ng-star-inserted').click();
    // #clientgroup > p-overlay > div > div > div > div.p-select-list-container
    cy.get('[pc164=""] > #clientgroup > .p-select-dropdown').click();
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

});



