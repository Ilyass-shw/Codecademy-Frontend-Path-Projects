import React from 'react';
import {
  renderWithRouterOnly,
  screen,
  waitFor,
} from '../../test-utils/testUtils';
import userEvent from '@testing-library/user-event';
import CartBar from './CartBar';

describe('CartBar', () => {
  const openCart = jest.fn() as (opening: boolean) => void;

  it('should render', () => {
    renderWithRouterOnly(
      <CartBar openCartBar={true} setOpenCartBar={openCart} />,
    );
  });

  it('should close when clicked on close button', async () => {
    renderWithRouterOnly(
      <CartBar openCartBar={true} setOpenCartBar={openCart} />,
    );
    const closeButton = screen.getByTestId('closeButton');
    const cartBar = screen.getByTestId('CartBar');

    expect(cartBar).toBeVisible();

    userEvent.click(closeButton);

    waitFor(() => {
      expect(cartBar).not.toBeVisible();
    });
    expect(openCart).toBeCalledTimes(1);
    expect(openCart).toBeCalledWith(false);
  });

  it('should close when clicked on the dark background', async () => {
    renderWithRouterOnly(
      <CartBar openCartBar={true} setOpenCartBar={openCart} />,
    );
    const cartBar = screen.getByTestId('CartBar');

    expect(cartBar).toBeVisible();
    const Background = screen.getByTestId('dark-background');

    userEvent.click(Background);

    waitFor(() => {
      expect(cartBar).not.toBeVisible();
    });
    expect(openCart).toBeCalledTimes(1);
    expect(openCart).toBeCalledWith(false);
  });
});
