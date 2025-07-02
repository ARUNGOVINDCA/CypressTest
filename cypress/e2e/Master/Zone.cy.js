describe('Zone Management Tests', () => {
    beforeEach(() => {
        cy.login('user1');
        cy.visit('/home');
        cy.wait(1000);
    });

    it('should create a new zone using custom command', () => {
        cy.createZone('Kozhikkode', 2, 'This is Kozhikode city and its parts.');
    });

    it('should open the detail page of a zone', () => {
        // Open the master section
        cy.get('#pn_id_1_tab_1 > .pi')
            .scrollIntoView()
            .should('be.visible')
            .click();

        // Navigate to the Zone page
        cy.get('[routerlink="/master/zone"]')
            .scrollIntoView()
            .should('be.visible')
            .click();

        // Click on a specific zone item (e.g., 9th item)
        cy.get(':nth-child(9) > .w-5\\/6 > .text-sm')
            .scrollIntoView()
            .should('be.visible')
            .click();

        // Open filter
        cy.get('.filter-Off > .p-ripple')
            .scrollIntoView()
            .should('be.visible')
            .click();

        // Open dropdown for zone status or type
        cy.get('#pn_id_29 > .p-select-label')
            .scrollIntoView()
            .should('be.visible')
            .click();

        // Select an option from the dropdown (assuming it’s a checkbox)
        cy.get('[ng-reflect-model="false"] > .p-ripple')
            .scrollIntoView()
            .should('be.visible')
            .click();

        // Search for a zone (e.g., "london")
        cy.get('#search-input')
            .scrollIntoView()
            .should('be.visible')
            .clear()
            .type('london');

        cy.wait(1000);
        cy.contains('button', 'Search')
            .should('be.visible')
            .click();

    });

});




// describe('Zone Management Tests', () => {
//   beforeEach(() => {
//     // Login and navigate to Home
//     cy.login('user1'); // Ensure user exists in credentials.json
//     cy.visit('/home');
//     cy.wait(1000); // Optional: replace with better wait logic if needed
//   });


//   it('should create a new Zone successfully', () => {
//     // Navigate to Zone Management
//     cy.get('#pn_id_1_tab_1 > .pi').click(); // Master tab
//     cy.wait(1000);
//     cy.get('[routerlink="/master/zone"]').click(); // Zone link

//     // Click "New Zone" button
//     cy.get('.ms-2 > .p-ripple')
//       .should('be.visible')
//       .click();

//     // Fill in zone details
//     cy.get('#Name')
//       .should('be.visible')
//       .type('Kozhikkode');

//     // Select Tax option
//     cy.get('#Tax > .p-select-dropdown')
//       .should('be.visible')
//       .click();
//     cy.get('#Tax_2')
//       .should('be.visible')
//       .click();

//     // Enter remarks
//     cy.get('.p-textarea')
//       .should('not.be.disabled')
//       .type('This is Kozhikode city and its parts.');

//     // Submit form (uncomment to activate save)
//     // cy.get('.gap-2 > .btn-new > .p-ripple').should('be.visible').click();
//   });


//   it('should open the detail page of a Zone', () => {
//     // Navigate to Zone Management
//     cy.get('#pn_id_1_tab_1 > .pi').click(); // Master tab
//     cy.get('[routerlink="/master/zone"]').click(); // Zone link

//     // Open details of a specific zone
//     cy.get(':nth-child(9) > .w-5\\/6 > .text-sm')
//       .should('be.visible')
//       .click();
//   });
// });


