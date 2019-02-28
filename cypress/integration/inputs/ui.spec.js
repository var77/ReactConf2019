describe('App appearance', () => {
    it ('Should render the app components correctly', () => {
        cy.visit('/');
        cy.contains('React Tests').should('exist');
        cy.get('input[type=checkbox]').should('exist');
        cy.get('input[type=text]').should('exist');
    });

    it ('Should disable the input if checkbox is checked', () => {
        cy.visit('/');
        cy.get('input[type=text]').type('Cypress is amazing!');
        cy.get('input[type=checkbox]').check();
        cy.get('input[type=text]').should('be.disabled');
    });
});