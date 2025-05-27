describe('template spec', () => {
  // it('passes', () => {
  //   cy.visit('http://localhost:4200/')
  // })
   beforeEach(() => {
    cy.visit('http://localhost:4200/')
    });
  it('Second case', () => {
   cy.get('#email').type('artest@test.com')
   cy.get('#password').type('zaqs#124')
   cy.get('.p-button-rounded',{ timeout: 10000 }).should('be.visible').click()
   cy.wait(10000);
  cy.get('[routerlink="/quotes"]').click()

   
  })
  it('clik on master', () => {
   
  })
  
})
