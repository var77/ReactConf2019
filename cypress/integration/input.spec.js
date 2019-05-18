describe('Input', () => {
    it ('Should properly validate email', () => {
        const rightColor = 'rgb(191, 210, 255)';
        const wrongColor = 'rgb(255, 62, 23)';

        cy.visit('/');
        cy.get('#email-input').type('invalid email');
        cy.get('#email-input').should('have.css', 'color', wrongColor);
        cy.get('#email-input').clear();
        cy.get('#email-input').type('varik@steadfast.tech');
        cy.get('#email-input').should('have.css', 'color', rightColor);
    });
});