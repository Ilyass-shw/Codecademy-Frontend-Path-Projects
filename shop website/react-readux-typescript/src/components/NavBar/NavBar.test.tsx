import React from 'react';
import {
  renderWithRouterOnly,
  screen,
  waitFor,
} from '../../test-utils/testUtils';
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

  it('should open and close cart items bar using the cart icon button', async () => {
    renderWithRouterOnly(<NavBar />);

    const closeButton = screen.getByTestId('closeButton');
    const firstItem = screen.getByText('item one');

    expect(closeButton).not.toBeVisible();
    expect(firstItem).not.toBeVisible();

    const icon = screen.getByTestId('Icon');

    userEvent.click(icon);

    waitFor(() => {
      expect(closeButton).toBeVisible();
      expect(firstItem).toBeVisible();
    });

    userEvent.click(icon);

    waitFor(() => {
      expect(closeButton).not.toBeVisible();
      expect(firstItem).not.toBeVisible();
    });
  });
});
