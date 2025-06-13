describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.login('user1'); // Make sure this user exists in credentials.json
    cy.visit('/home');
    cy.wait(1000);
  });
  it('should Create a JobLocation', () => {
    cy.get('#pn_id_1_tab_1 > .pi').click();
    cy.wait(2000);
    cy.get('[routerlink="/master/joblocation"]').click();
    cy.get('.border-l > .p-ripple > .p-button-label').click();
    cy.get('#ItemCategory > .p-select-dropdown').click();
    cy.wait(2000);
    // cy.get('.p-select-list-container').scrollTo('bottom', { duration: 3000 });
        // Step 2: Wait for the dropdown panel to appear
    cy.get('.p-select-list-container', { timeout: 2000 }).should('be.visible');

    // Step 3: Scroll to the desired item and click it
    cy.get('.p-select-list-container')
      .contains('KD COMPANY') 
      .scrollIntoView()
      .should('be.visible')
      .click();
    cy.get('#Name').type('Near Lulu s hyper');
    cy.get('#Code').type('Al Muteena');
    cy.get('#Price').type('Deira');
    cy.get(':nth-child(5) > .p-floatlabel > #Unit').type('PP9909');
    cy.get('#zones > .p-select-dropdown').type('Calicut');
    cy.get('#zones_0').click();
    cy.get('#clientgroup > .p-select-dropdown').type('Ras');
    cy.get('#clientgroup_0').click();


  });
   });