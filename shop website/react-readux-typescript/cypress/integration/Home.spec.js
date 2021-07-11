/// <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('should handle opening and closing empty cart. ', () => {
    cy.get('[data-testid=cart-slide-bar]').should('not.be.visible');
    cy.get('[data-testid=cart-slide-bar-background]').should('not.be.visible');
    cy.get('body').should('not.have.css', 'overflow', 'hidden');
    cy.get('[data-testid=cart-icon]').click();
    cy.get('body').should('have.css', 'overflow', 'hidden');
    cy.get('[data-testid=cart-slide-bar]').should('be.visible');
    cy.get('[data-testid=cart-slide-bar-background]').should('be.visible');
    cy.get('[data-testid=cart-slide-bar-checkoutButton]').should('have.css', 'pointer-events', 'none');
    cy.get('[data-testid=cart-slide-bar-closeButton]').click();
    cy.get('[data-testid=cart-slide-bar]').should('not.be.visible');
    cy.get('[data-testid=cart-slide-bar-background]').should('not.be.visible');
  });
});
