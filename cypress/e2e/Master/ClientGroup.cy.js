describe('Master Test', () => {
  beforeEach(() => {
    cy.login('user1'); // Make sure this user exists in credentials.json
    cy.visit('/home');
    cy.wait(1000);
  });

  it('should create a Client Grop', () => {
    cy.get('#pn_id_1_tab_1 > .pi').click();
    cy.wait(2000);
    cy.get('[routerlink="/master/clientgroup"]').click();
    cy.get('.btn-new > .p-ripple').click();
    cy.get('#GroupName').type("A/C Control DIVISION");
    cy.get('.jodit-wysiwyg')
      .type('A division head in an AC company is a leadership role responsible for managing a specific business function, such as sales, engineering, or manufacturing. Their responsibilities include setting strategic direction, leading teams, and ensuring operational efficiency.');
    cy.get('#Remark')
      .type('Targeted Messaging:Smallc content for this role would likely focus on the specific services offered by the division, such as installation, repair, or maintenance', { force: true });
    cy.get('.p-dialog-content')
      .scrollTo('bottom', { duration: 1000 }); // Scroll to top with smooth animation

    //Save Button is taged Run this When checking
    // cy.get('p-button.ng-star-inserted > .p-ripple').click();


  });
});
