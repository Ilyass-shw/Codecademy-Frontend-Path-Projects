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
    const firstItem = screen.getByText('item one');

    expect(closeButton).toBeInTheDocument();
    expect(firstItem).toBeVisible();

    userEvent.click(closeButton);

    waitFor(() => {
      expect(firstItem).not.toBeVisible();
    });
    expect(openCart).toBeCalledTimes(1);
    expect(openCart).toBeCalledWith(false);
  });
});
