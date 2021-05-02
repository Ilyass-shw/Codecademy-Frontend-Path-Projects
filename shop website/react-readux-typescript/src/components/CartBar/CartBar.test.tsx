import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartBar from './CartBar';

describe('CartBar', () => {
  const openCart = jest.fn() as (opening: boolean) => void;

  it('should render', () => {
    render(<CartBar openCartBar={true} setOpenCartBar={openCart} />);
  });

  it('should close when clicked on close button', () => {
    render(<CartBar openCartBar={true} setOpenCartBar={openCart} />);
    const closeButton = screen.getByRole('button');
    expect(closeButton).toBeInTheDocument();
    userEvent.click(closeButton);
    expect(openCart).toBeCalledTimes(1);
    expect(openCart).toBeCalledWith(false);
  });
});
