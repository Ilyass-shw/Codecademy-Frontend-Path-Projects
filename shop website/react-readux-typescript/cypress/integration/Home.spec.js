/// <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  // it('should handle opening and closing empty cart. ', () => {
  //   cy.get('[data-testid=cart-slide-bar]').should('not.be.visible');
  //   cy.get('[data-testid=cart-slide-bar-background]').should('not.be.visible');
  //   cy.get('body').should('not.have.css', 'overflow', 'hidden');
  //   cy.get('[data-testid=cart-icon]').click();
  //   cy.get('body').should('have.css', 'overflow', 'hidden');
  //   cy.get('[data-testid=cart-slide-bar]').should('be.visible');
  //   cy.get('[data-testid=cart-slide-bar-background]').should('be.visible');
  //   cy.get('[data-testid=cart-slide-bar-checkoutButton]').should('have.css', 'pointer-events', 'none');
  //   cy.get('[data-testid=cart-slide-bar-closeButton]').click();
  //   cy.get('[data-testid=cart-slide-bar]').should('not.be.visible');
  //   cy.get('[data-testid=cart-slide-bar-background]').should('not.be.visible');
  // });

  // it('should handle adding an item to the cart. ', () => {
  //   cy.url().should('not.include', 'http://localhost:3000/product/');
  //   cy.get('[data-testid=products-list]').find('h4').first().as('ProductName');
  //   // .click();
  //   cy.get('@ProductName')
  //     .invoke('text')
  //     .then((ProductName) => {
  //       cy.get('@ProductName').click();
  //       cy.contains(ProductName);
  //       cy.url().should('include', 'http://localhost:3000/product/');
  //     });
  //   cy.get('select').contains(/size/i).parent().select('M');
  //   cy.get('[data-testid=product-quantity-input]').contains('+').click();
  //   cy.get('[data-testid=cart-icon]').contains('1').should('not.exist');
  //   cy.contains(/add to cart/i).click();
  //   cy.get('[data-testid=cart-icon]').contains('1');
  //   cy.get('[data-testid=cart-icon]').click();
  //   cy.get('[aria-label=cart-products]')
  //     .children()
  //     .should('have.length', 1);
  // });

  it('should handle choosing items  to the cart and checkout. ', () => {
    cy.get('[data-testid=products-list]')
      .find('h4')
      .first()
      .invoke('text')
      .log();
    // .click();
    // cy.get('@ProductName')
    // .invoke('text')
    // .then((ProductName) => {
    cy.contains('@ProductName').parent().click();
    cy.contains('@ProductName');
    // });
    cy.get('select').contains(/size/i).parent().select('M');
    cy.get('[data-testid=product-quantity-input]').contains('+').click();
    cy.get('[data-testid=product-quantity-input]').contains('+').click();
    cy.get('[data-testid=cart-icon]').contains('1').should('not.exist');
    cy.contains(/add to cart/i).click();
    cy.get('[data-testid=cart-icon]').contains('1');
    cy.get('[data-testid=cart-icon]').click();
    cy.get('[aria-label=cart-products]').children().should('have.length', 1);
  });
});
