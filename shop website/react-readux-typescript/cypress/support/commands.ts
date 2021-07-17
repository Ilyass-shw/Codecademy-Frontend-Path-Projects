// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * Gets element by the test Id.
       *
       * @memberof Cypress.Chainable
       *
       * @example
        ```
        cy.getByTestId('productId').then(...)
        ```
       */
      getByTestId: (ID: string) => Chainable;

      /**
       * Adds element to the cart.
       *
       * @memberof Cypress.Chainable
       *
       * @example
        ```
        cy.addItemToCart('ICE – EARRINGS','L',3).then(...)
        ```
       */
      addItemToCart: (
        ItemName: string,
        size: string,
        quantity?: number,
      ) => Chainable;
    }
  }
}

export const getByTestId = (Id: string): Cypress.Chainable => {
  return cy.get(`[data-testid=${Id}]`);
};

export const addItemToCart = (
  ItemName: string,
  size: string,
  quantity?: number,
): Cypress.Chainable => {
  cy.url().should('not.include', 'http://localhost:3000/product/');
  cy.contains(ItemName).click();
  cy.url().should('include', 'http://localhost:3000/product/');
  cy.contains(ItemName);
  cy.get('select').contains(/size/i).parent().select(size);
  if (quantity) {
    for (let i = 1; i < quantity; i++) {
      cy.get('[data-testid=product-quantity-input]').contains('+').click();
    }
  }
  return cy.contains(/add to cart/i).click();
};

Cypress.Commands.add('addItemToCart', addItemToCart);
Cypress.Commands.add('getByTestId', getByTestId);
