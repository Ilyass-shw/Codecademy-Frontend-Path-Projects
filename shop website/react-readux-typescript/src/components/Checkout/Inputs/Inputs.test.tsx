import React from 'react';
import { renderWithReactHookForm, screen } from '../../../test-utils/testUtils';
import Inputs from './Inputs';

describe('Inputs', () => {
  it('should render', () => {
    const { asFragment } = renderWithReactHookForm(<Inputs />, 'withRouter');
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', {
        name: /keep me up to date on news and exclusive offers\./i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('First name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Address')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Apartment, suite, etc. (optional)'),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('City')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Counrty/Region')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
