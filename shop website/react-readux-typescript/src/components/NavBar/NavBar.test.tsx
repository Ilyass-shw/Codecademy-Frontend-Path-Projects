import React from 'react';
import { renderWithRouterOnly, screen } from '../../test-utils/testUtils';
import NavBar from './NavBar';
import userEvent from '@testing-library/user-event';

describe('NavBar', () => {
  it('should render', () => {
    renderWithRouterOnly(<NavBar />);

    const Logo = screen.getByText('Shw');
    const ShopLink = screen.getByText('Shop');
    const CollectionLink = screen.getByText('Collection');

    expect(Logo).toBeInTheDocument();
    expect(ShopLink).toBeInTheDocument();
    expect(CollectionLink).toBeInTheDocument();
  });

  it('should open cart items pop on page that are in the cart when cliled on cart icon', async () => {
    renderWithRouterOnly(<NavBar />);

    const closeButton = screen.getByTestId('closeButton');
    const firstItem = screen.getByText('item one');

    expect(closeButton).not.toBeInTheDocument();
    expect(firstItem).not.toBeVisible();

    const icon = screen.getByTestId('cartIcon');

    userEvent.click(icon);

    expect(closeButton).toBeInTheDocument();
    expect(firstItem).toBeVisible();
  });
});
