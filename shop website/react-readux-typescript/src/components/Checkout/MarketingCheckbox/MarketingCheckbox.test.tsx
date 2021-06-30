import React from 'react';
import { renderWithReactHookForm } from '../../../test-utils/testUtils';
import MarketingCheckbox from './MarketingCheckbox';


describe('MarketingCheckbox', () => {
  it('should render', () => {
    renderWithReactHookForm(<MarketingCheckbox />);
  });

  it('should match snapshot', () => {
    const { asFragment } = renderWithReactHookForm(<MarketingCheckbox />);
    expect(asFragment()).toMatchSnapshot();
  });
});
