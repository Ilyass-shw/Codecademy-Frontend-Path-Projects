/// <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('should ', () => {
    cy.get('[data-testid=cart-slide-bar]').should('not.be.visible');
    cy.get('[data-testid=cart-slide-bar-background]').should('not.be.visible');
    cy.get('body').should('not.have.a.property', 'overflow=hidden');
    cy.get('[data-testid=cart-icon]').click();
    cy.get('body').should('have.css', 'overflow', 'hidden');
    cy.get('[data-testid=cart-slide-bar]').should('be.visible');
    cy.get('[data-testid=cart-slide-bar-background]').should('have.a.property');
    cy.get('[data-testid=cart-slide-bar-checkoutButton]').should('be.disabled');
    cy.get('[data-testid=cart-slide-bar-closeButton]').click();
    cy.get('[data-testid=cart-slide-bar]').should('not.be.visible');
    cy.get('[data-testid=cart-slide-bar-background]').should('not.be.visible');
  });
});
