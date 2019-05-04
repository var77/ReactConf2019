describe('App', () => {
    it ('Should render the app components correctly', () => {
        cy.visit('/');
        cy.contains('React Conf 2019').should('exist');
        cy.get('input[type=checkbox]').should('exist');
        cy.get('#first-input').should('exist');
        cy.get('#email-input').should('exist');
    });

    it ('Should disable the input if checkbox is checked', () => {
        cy.visit('/');
        cy.get('#first-input').type('Cypress is amazing!');
        cy.get('input[type=checkbox]').check();
        cy.get('#first-input').should('be.disabled');
    });
});