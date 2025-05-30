describe('Tests After Login Using cy.session()', () => {

  beforeEach(() => {
    cy.loginWithSession();     // Reuse saved login session
    cy.visit('/home');         // Start from home page every test
  });

  it('Test 1: Home page content', () => {
    
  });
});
