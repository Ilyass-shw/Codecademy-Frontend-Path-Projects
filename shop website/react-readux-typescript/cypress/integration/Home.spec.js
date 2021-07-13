/// <reference types="cypress" />
import data from '../../src/Data';
describe('Home', () => {
  beforeEach(() => {
    // cy.intercept('GEt', '/ShopData', {
    //   fixture: 'StoreProducts.json',
    // });
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

  // it('should handle choosing items  to the cart and checkout. ', () => {
  //   // Add first item to cart.
  //   cy.contains('ICE – EARRINGS').click();
  //   cy.url().should('include', 'http://localhost:3000/product/');
  //   cy.contains('ICE – EARRINGS');
  //   cy.get('select').contains(/size/i).parent().select('M');
  //   cy.get('[data-testid=product-quantity-input]').contains('+').click();
  //   cy.get('[data-testid=product-quantity-input]').contains('+').click();
  //   cy.get('[data-testid=cart-icon]').contains('1').should('not.exist');
  //   cy.contains(/add to cart/i).click();
  //   cy.get('[data-testid=cart-icon]').contains('1').click();
  //   cy.get('[aria-label=cart-products]').children().should('have.length', 1);
  //   cy.get('[data-testid=cart-quantity-input]').contains('3');
  //   cy.get('[aria-label=cart-products]').contains('ICE – EARRINGS');
  //   cy.get('[data-testid=cart-slide-bar-background]').click();
  //   cy.contains(/shop/i).click();

  //   // Add second item to cart.
  //   cy.contains('AURORA BOREALIS – NECKLACE').click();
  //   cy.url().should('include', 'http://localhost:3000/product/');
  //   cy.contains('AURORA BOREALIS – NECKLACE');
  //   cy.get('select').contains(/size/i).parent().select('L');
  //   cy.get('[data-testid=product-quantity-input]').contains('+').click();
  //   cy.get('[data-testid=cart-icon]').contains('2').should('not.exist');
  //   cy.contains(/add to cart/i).click();
  //   cy.get('[data-testid=cart-icon]').contains('2').click();
  //   cy.get('[aria-label=cart-products]').children().should('have.length', 2);
  //   cy.get('[data-testid=cart-quantity-input]').contains('3');
  //   cy.contains('AURORA BOREALIS – NECKLACE');

  //   // Checkout.
  //   cy.get('[data-testid=cart-slide-bar-checkoutButton]').click();
  //   cy.url().should('eq', 'http://localhost:3000/checkout');
  //   cy.get('[name=email]').type('exapmle@gmail.com');
  //   cy.get('[name=FirstName]').type('Andiran');
  //   cy.get('[name=LastName]').type('Sobolov');
  //   cy.get('[name=Address]').type('Somewhere');
  //   cy.get('[name=City]').type('Berlin');
  //   cy.get('[name=Country]').select('Germany');
  //   cy.get('[type=tel]').type('03125481616');
  //   const stub = cy.stub();
  //   cy.on('window:alert', stub);
  //   cy.get('[type=submit]')
  //     .click()
  //     .then(() => {
  //       expect(stub.getCall(0)).to.be.calledWith(
  //         'This is the extent of this website for now, more pages are yet to be available. Thank you for checking out my work. \n      \n    \n      Email: exapmle@gmail.com,\n      isBuyerAcceptingMarketing: false,\n      FirstName: Andiran,\n      LastName: Sobolov,\n      Address: Somewhere,\n      Address2: ,\n      City: Berlin,\n      PhoneNumber: 03125481616,\n      Country: DE,\n      ',
  //       );
  //     });
  // });
  it('should handle filtering displayed products.', () => {
    cy.get('#productFilter').select('Ring');

    const RingProducts = data.filter((product) => product.category === 'Ring');
    const RingProductsNames = RingProducts.map((item) => item.name);
    cy.get('[aria-label="product card"]')
      .find('h4')
      .then((DisplayedProducts) =>
        Cypress._.map(DisplayedProducts, 'innerText'),
      )
      .should('deep.equal', RingProductsNames);
    cy.get('#productFilter').select('Earrings');
    const EarringsProducts = data.filter(
      (product) => product.category === 'Earrings',
    );
    const EarringsProductsNames = EarringsProducts.map((item) => item.name);
    cy.get('[aria-label="product card"]')
      .find('h4')
      .then((DisplayedProducts) =>
        Cypress._.map(DisplayedProducts, 'innerText'),
      )
      .should('deep.equal', EarringsProductsNames);

    cy.get('#productFilter').select('Bracelet');
    const BraceletProducts = data.filter(
      (product) => product.category === 'Bracelet',
    );
    const BraceletProductsNames = BraceletProducts.map((item) => item.name);
    cy.get('[aria-label="product card"]')
      .find('h4')
      .then((DisplayedProducts) =>
        Cypress._.map(DisplayedProducts, 'innerText'),
      )
      .should('deep.equal', BraceletProductsNames);

    cy.get('#productFilter').select('All Jewelry');

    const AllProductsNames = data.map((item) => item.name);
    cy.get('[aria-label="product card"]')
      .find('h4')
      .then((DisplayedProducts) =>
        Cypress._.map(DisplayedProducts, 'innerText'),
      )
      .should('deep.equal', AllProductsNames);
  });
});
