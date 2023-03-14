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

    // using then method
    cy.get('[data-cy="contact-btn-submit"]').then(el => {
      expect(el.attr('disabled')).to.be.undefined;
    });
    // store alias
    // cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');
    // use alias
    // cy.get('@submitBtn').click();

    cy.get('[data-cy="contact-btn-submit"]').click();
    cy.get('[data-cy="contact-btn-submit"]')
      .contains('Sending...')
      .should('have.attr', 'disabled');

    // simulating enter press event
    cy.get('[data-cy="contact-input-email"]').type('123{enter}');
    cy.get('[data-cy="contact-btn-submit"]')
      .contains('Sending...')
      .should('have.attr', 'disabled');
  });

  it('should validate the form input', () => {
    cy.visit('http://localhost:5173/about');
    cy.get('[data-cy="contact-btn-submit"]').click();
    cy.get('[data-cy="contact-btn-submit"]').then(el => {
      expect(el).to.not.have.attr('disabled');
      expect(el.text()).to.not.equal('Sending...');
    });

    cy.get('[data-cy="contact-input-message"]').focus();
    cy.get('[data-cy="contact-input-message"]').blur();
    cy.get('[data-cy="contact-input-message"]')
      .parent()
      .then(el => {
        expect(el.attr('class')).to.contain('invalid');
      });

    cy.get('[data-cy="contact-input-email"]').focus();
    cy.get('[data-cy="contact-input-email"]').blur();
    cy.get('[data-cy="contact-input-email"]')
      .parent()
      .then(el => {
        expect(el.attr('class')).to.contain('invalid');
      });

    cy.get('[data-cy="contact-input-name"]').focus();
    cy.get('[data-cy="contact-input-name"]').blur();
    cy.get('[data-cy="contact-input-name"]')
      .parent()
      .then(el => {
        expect(el.attr('class')).to.contain('invalid');
      });
  });
});
