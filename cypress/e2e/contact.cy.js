/// <reference types="Cypress" />

describe('contact form', () => {
  it('should submit the form', () => {
    cy.visit('http://localhost:5173/about');
    cy.get('[data-cy="contact-input-message"]').type('Hello world');
    cy.get('[data-cy="contact-input-name"]').type('Big Boss');
    cy.get('[data-cy="contact-input-email"]').type('123@123.com');
    cy.get('[data-cy="contact-btn-submit"]')
      .contains('Send Message')
      .should('not.have.attr', 'disabled');
    // store alias
    // cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');
    // use alias
    // cy.get('@submitBtn').click();

    cy.get('[data-cy="contact-btn-submit"]').click();
    cy.get('[data-cy="contact-btn-submit"]')
      .contains('Sending...')
      .should('have.attr', 'disabled');
  });
});
