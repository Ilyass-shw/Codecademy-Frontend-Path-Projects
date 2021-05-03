import { render, screen, makeTestStore } from '../../test-utils/testUtils';
import React from 'react';
import Cart from './CartIcon';

describe('CartIcon', () => {
  beforeEach(() => {
    const store = makeTestStore();
    render(<Cart />, store );
  });
  it('should renders', () => {
    const icon = screen.getByRole('button');
    expect(icon).toBeInTheDocument();
  });

});
