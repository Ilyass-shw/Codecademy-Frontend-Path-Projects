import React from 'react';
import store from '../../App/store';
import { render, screen } from '../../test-utils/testUtils';
import NavBar from './NavBar';
import userEvent from '@testing-library/user-event';

describe('NavBar', () => {
  it('should render', () => {
    render(<NavBar />, store, 'withRouter');

    const Logo = screen.getByText('Shw');
    const ShopLink = screen.getByText('Shop');
    const CollectionLink = screen.getByText('Categories');

    expect(Logo).toBeInTheDocument();
    expect(ShopLink).toBeInTheDocument();
    expect(CollectionLink).toBeInTheDocument();
  });

  it('should open and close cart items bar using the cart icon button', async () => {
    render(<NavBar />, store, 'withRouter');

    const cartBar = screen.getByTestId('CartBar');

    expect(cartBar).not.toBeVisible();
    expect(store.getState().Cart.isBarOpen).toBeFalsy();

    const icon = screen.getByTestId('Icon');
    userEvent.click(icon);

    expect(store.getState().Cart.isBarOpen).toBeTruthy();
    expect(cartBar).toBeVisible();

    const closeButton = screen.getByTestId('closeButton');
    userEvent.click(closeButton);

    expect(cartBar).not.toBeVisible();
    expect(store.getState().Cart.isBarOpen).toBeFalsy();
  });
});
