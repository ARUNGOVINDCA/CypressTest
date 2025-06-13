describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.login();         // 👈 Login using custom command
    cy.visit('/home');  // Ensure you’re starting from home page
  });

  it('shows the dashboard', () => {
    cy.contains('Welcome').should('be.visible');
  });

  it('navigates to settings', () => {
    cy.get('a[href="/settings"]').click();
    cy.url().should('include', '/settings');
  });
});
