import React from 'react';
import { renderWithStore, screen, waitFor } from '../../../test-utils/testUtils';
import userEvent from '@testing-library/user-event';
import CartBar from './CartSlideBar';
import store from '../../../App/store';
import { toggleCartSlideBar } from '../../../helpers/toggleCartSlideBar';

describe('CartBar', () => {
  it('should render', () => {
    renderWithStore(<CartBar />, store, 'withRouter');
  });

  it('should close when clicked on close button', async () => {
    renderWithStore(<CartBar />, store, 'withRouter');
    const closeButton = screen.getByTestId('closeButton');
    const cartBar = screen.getByTestId('CartBar');

    expect(cartBar).not.toBeVisible();
    expect(store.getState().Cart.isBarOpen).toBeFalsy();

    toggleCartSlideBar();

    expect(cartBar).toBeVisible();
    expect(store.getState().Cart.isBarOpen).toBeTruthy();

    userEvent.click(closeButton);

    await waitFor(() => {
      expect(cartBar).not.toBeVisible();
      expect(store.getState().Cart.isBarOpen).toBeFalsy();
    });
  });

  it('should close when clicked on the dark background', async () => {
    renderWithStore(<CartBar />, store, 'withRouter');
    const cartBar = screen.getByTestId('CartBar');

    expect(cartBar).not.toBeVisible();
    expect(store.getState().Cart.isBarOpen).toBeFalsy();

    toggleCartSlideBar();

    expect(cartBar).toBeVisible();
    expect(store.getState().Cart.isBarOpen).toBeTruthy();

    const Background = screen.getByTestId('dark-background');

    userEvent.click(Background);

    await waitFor(() => {
      expect(cartBar).not.toBeVisible();
    });
  });
});
