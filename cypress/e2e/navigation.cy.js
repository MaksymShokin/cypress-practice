/// <reference types="Cypress" />

describe('basic navigation', () => {
  it('should navigate between pages', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('Home Page');
    cy.get('[data-cy="header-about-link"]').click();
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