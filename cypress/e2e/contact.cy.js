/// <reference types="Cypress" />

describe('contact form', //   defaultCommandTimeout: 3000 // { // also can change config here on describe level
// },
() => {
  it('should submit the form', // { // also can change config here on test level
  //   defaultCommandTimeout: 3000
  // },
  () => {
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
      .should('have.attr', 'class')
      .and('contain', 'invalid');
    // .then(el => {
    //   expect(el.attr('class')).to.contain('invalid');
    // });

    cy.get('[data-cy="contact-input-email"]').focus();
    cy.get('[data-cy="contact-input-email"]').blur();
    cy.get('[data-cy="contact-input-email"]')
      .parent()
      // another way of writing should instead of than
      .should(el => {
        expect(el.attr('class')).contain('invalid');
      });
    // .should('have.attr', 'class')
    // .and('contain', 'invalid');
    // .then(el => {
    //   expect(el.attr('class')).to.contain('invalid');
    // });

    cy.screenshot();
    cy.get('[data-cy="contact-input-name"]').focus();
    cy.get('[data-cy="contact-input-name"]').blur();
    cy.get('[data-cy="contact-input-name"]')
      .parent()
      .should('have.attr', 'class')
      // class is passed from first should to and
      .and('contain', 'invalid');
    cy.screenshot();

    // .then(el => {
    //   expect(el.attr('class')).to.contain('invalid');
    // });
  });
});
