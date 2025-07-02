describe('Property Management Tests', () => {
  beforeEach(() => {
    cy.login('user1');
    cy.visit('/home');
  });

  it('should create a new Property', () => {
    // Navigate to Master tab
    cy.get('#pn_id_1_tab_1 > .pi')
      .scrollIntoView()
      .should('be.visible')
      .click();

    // Click on Property link
    cy.get('[routerlink="/property"]')
      .scrollIntoView()
      .should('be.visible')
      .click();

    // Click "New Property" button
    cy.get('.btn-new > .p-ripple')
      .should('be.visible')
      .click();

    // Fill in the property form
    cy.get('#Name')
      .should('be.visible')
      .type('Hilite MAll');

    cy.get('#Code')
      .should('be.visible')
      .type('G1003, NH 66 Hilte City MAll');

    cy.get('#Price')
      .should('be.visible')
      .type('Kozhikode Bypass  Poovangal, Kozhikode, Kerala');

    cy.get(':nth-child(4) > .p-floatlabel > #Unit')
      .should('be.visible')
      .type('673014');

    // Select zone from dropdown
    cy.get('#zones > .p-select-dropdown')
      .should('be.visible')
      .click();

    cy.wait(1000);
    cy.get('#zones_1') // Wait up to 10s for dropdown item to appear
      .should('be.visible')
      .click();

    // Optionally, assert form state or click Save button here
    // e.g. cy.get('.btn-save').click();
  });
});
