import React from 'react';
import { renderWithFormProvider } from '../../../test-utils/testUtils';
import MarketingCheckbox from './MarketingCheckbox';


describe('MarketingCheckbox', () => {
  it('should render', () => {
    renderWithFormProvider(<MarketingCheckbox />);
  });

  it('should match snapshot', () => {
    const { asFragment } = renderWithFormProvider(<MarketingCheckbox />);
    expect(asFragment()).toMatchSnapshot();
  });
});
