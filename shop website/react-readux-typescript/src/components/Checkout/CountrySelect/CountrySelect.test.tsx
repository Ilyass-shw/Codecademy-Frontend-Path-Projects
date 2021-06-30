import React from 'react';
import { renderWithReactHookForm } from '../../../test-utils/testUtils';
import CountrySelect from './CountrySelect';

describe('CountrySelect', () => {
  it('should render', () => {
    renderWithReactHookForm(<CountrySelect />);
  });

  it('should match snapshot', () => {
    const { asFragment } = renderWithReactHookForm(<CountrySelect />);
    expect(asFragment()).toMatchSnapshot();
  });
});
