
describe('Angular App – After Login', () => {
  const username = 'artest@test.com';
  const password = 'zaqs#124';

  before(() => {
    cy.login(username, password); // One-time login session setup
  });

  beforeEach(() => {
    // Set the session cookie before each test
    cy.visit('http://localhost:4200/home'); // or default app route
  });
   it('should log in and navigate to feature page', () => {
   
    


   


   

    //click on the New button for creating  new client
    cy.get('.btn-new > .p-ripple').click();
    cy.wait(2000);

    //adding a client name

    cy.get('#title').type('Cor');
    cy.get('#clientname').type('Emirates Corp Office');
    cy.get('#AlternateName').type('E.C.O');
    cy.get('#CustomerCode').type('007');
  });
  
});
