import React from 'react';
import { renderWithReactHookForm, screen } from '../../../test-utils/testUtils';
import Inputs from './Inputs';

describe('Inputs', () => {
  it('should render', () => {
    const { asFragment } = renderWithReactHookForm(<Inputs />, 'withRouter');
    expect(screen.getByPlaceholderText('Email'));
    expect(screen.getByPlaceholderText('First name'));
    expect(screen.getByPlaceholderText('Last name'));
    expect(screen.getByPlaceholderText('Address'));
    expect(screen.getByPlaceholderText('Apartment, suite, etc. (optional)'));
    expect(screen.getByPlaceholderText('City'));
    expect(screen.getByPlaceholderText('Counrty/Region'));
    expect(screen.getByPlaceholderText('Phone'));
    expect(asFragment()).toMatchSnapshot();
  });
});
