// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Cypress.Commands.add('login',(username,password) =>{
    
// })
Cypress.Commands.add('login', (user) => {
  cy.fixture('credentials').then((creds) => {
    const { username, password } = creds[user];
    if (!username || !password) throw new Error(`Credentials missing for ${user}`);

    cy.session([username, password], () => {
      // ✅ Use correct visit
      cy.visit('http://localhost:4200/login'); 

      cy.get('#email').type(username);
      cy.get('#password').type(password);
      cy.get('.p-button-label').click(); // adjust this selector as needed

      cy.url().should('include', '/home');
    });
  });
});
Cypress.Commands.add('createZone', (zoneName, taxOption, remarks) => {
  cy.get('#pn_id_1_tab_1 > .pi').click(); // Master tab
  cy.wait(1000);
  cy.get('[routerlink="/master/zone"]').click(); // Zone link

  cy.get('.ms-2 > .p-ripple').should('be.visible').click(); // New Zone button
  cy.get('#Name').type(zoneName);

  cy.get('#Tax > .p-select-dropdown').should('be.visible').click();
  cy.get(`#Tax_${taxOption}`).should('be.visible').click(); // e.g., 2 = "#Tax_2"

  cy.get('.p-textarea').should('not.be.disabled').type(remarks);

  // Optional: Uncomment to save
  // cy.get('.gap-2 > .btn-new > .p-ripple').should('be.visible').click();
});



