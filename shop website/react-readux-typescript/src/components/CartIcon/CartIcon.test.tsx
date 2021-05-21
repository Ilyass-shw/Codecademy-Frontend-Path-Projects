import React from 'react';
import { render, screen } from '../../test-utils/testUtils';
import Cart from './CartIcon';
import store from '../../App/store'

describe('CartIcon', () => {
  beforeEach(() => {
    render(<Cart />, store );
  });
  it('should renders', () => {
    const icon = screen.getByRole('button');
    expect(icon).toBeInTheDocument();
  });

});
