describe('Input', () => {
    it ('Should properly validate email', () => {
        const rightColor = 'rgb(102, 206, 102)';
        const wrongColor = 'rgb(255, 0, 0)';

        cy.visit('/');
        cy.get('#email-input').type('invalid email');
        cy.get('#email-input').should('have.css', 'border-color', wrongColor);
        cy.get('#email-input').clear();
        cy.get('#email-input').type('varik@steadfast.tech');
        cy.get('#email-input').should('have.css', 'border-color', rightColor);
    });
});