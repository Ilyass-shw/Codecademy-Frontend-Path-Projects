import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CartItemsSelector } from '../Cart/CartSlice/selectors/cartItemsSelector';
import { TotalPriceSelector } from '../Cart/CartSlice/selectors/TotalPriceSelector';
import SummaryItem from '../Cart/SummaryItem.tsx/SummaryItem';
import SummaryToggleButton from '../SummaryToggleButton/SummaryToggleButton';
import { useWindowWidth } from '../../helpers/useWindowWidth';
import TotalPriceCalculator from '../TotalPriceCalculator/TotalPriceCalculator';
import {
  SummaryContainer,
  SummaryContent,
  Summary,
} from './OrderSummary.component';

const OrderSummary: React.FC = () => {
  const isSmallScreen = useWindowWidth() < 1200;
  const [show, setShow] = useState(false);
  const CartTotalPrice = useSelector(TotalPriceSelector);
  const Items = useSelector(CartItemsSelector);
  const taxes = Items.length * 1.17;
  const TotalToPay = taxes + CartTotalPrice;
  useEffect(() => {
    if (!isSmallScreen) {
      setShow(false);
    }
  }, [isSmallScreen]);
  return (
    <SummaryContainer>
      {isSmallScreen && (
        <SummaryToggleButton
          show={show}
          clickHandle={setShow}
          TotalToPay={TotalToPay}
        />
      )}
      <SummaryContent>
        <Summary show={show} data-testid="cart summary">
          {Items.map((items) => (
            <SummaryItem
              item={items.item}
              quantity={items.quantity}
              key={items.item.id}
            />
          ))}

          <TotalPriceCalculator
            CartTotalPrice={CartTotalPrice}
            taxes={taxes}
            TotalToPay={TotalToPay}
          />
        </Summary>
      </SummaryContent>
    </SummaryContainer>
  );
};

export default OrderSummary;
