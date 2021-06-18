import React from 'react';
import { render } from '../../test-utils/testUtils';
import ProductView from './ProductView';
describe('ProductView', () => {
  const item={
      name:'item1',
      price: 23,
      c
  }
  it('should render', () => {
    render(
      <TotalPriceCalculator
        item={CartTotalPrice}
        
      />,
    );
  });
  it('should match snapshot', () => {
    const { asFragment } = render(
      <TotalPriceCalculator
        CartTotalPrice={CartTotalPrice}
        taxes={taxes}
        TotalToPay={TotalToPay}
      />,
    );
    expect(asFragment).toMatchSnapshot();
  });
});
