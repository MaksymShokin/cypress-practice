/// <reference types="Cypress" />

describe('basic navigation', () => {
  it('should navigate between pages', { browser: 'chrome' }, () => {
    cy.task('connectDb', 'mongodb').then(val => console.log(val));
    cy.visit('/');
    cy.contains('Home Page');
    // using custom query function
    cy.getById('header-about-link').click();
    // cy.get('[data-cy="header-about-link"]').click();
    cy.location('pathname').should('eq', '/about');
    cy.go('back');
    cy.location('pathname').should('eq', '/');
    cy.get('[data-cy="header-about-link"]').click();
    cy.location('pathname').should('eq', '/about');
    cy.get('[data-cy="header-home-link"]').click();
    cy.location('pathname').should('eq', '/');
  });
});

// run tests without studio
// npx cypress run
