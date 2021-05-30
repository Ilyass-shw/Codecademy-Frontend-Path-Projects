import React from 'react';
import { renderWithStore, screen } from '../../../test-utils/testUtils';
import Cart from './CartIcon';
import store from '../../../App/store'

describe('CartIcon', () => {
  beforeEach(() => {
    renderWithStore(<Cart />, store );
  });
  it('should render', () => {
    const icon = screen.getByRole('button');
    expect(icon).toBeInTheDocument();
  });

});
