import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CartitemsSelector } from '../Cart/CartSlice/selectors/cartItemsSelector';
import { TotalPriceSelector } from '../Cart/CartSlice/selectors/TotalPriceSelector';
import SummaryItem from '../Cart/SummaryItem.tsx/SummaryItem';

import {
  SummaryContainer,
  SummaryContent,
  Summary,
} from './OrderSummary.component';
import SummaryToggleButton from '../SummaryToggleButton/SummaryToggleButton';
import { useWindowWidth } from '../../helpers/useWindowWidth';
import TotalPriceCalculator from '../TotalPriceCalculator/TotalPriceCalculator';

const OrderSummary: React.FC = () => {
  const isSmallScreen = useWindowWidth() < 1200;
  console.log(isSmallScreen);
  const [show, setShow] = useState(false);
  const CartTotalPrice = useSelector(TotalPriceSelector);
  const Items = useSelector(CartitemsSelector);
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
        <Summary show={show}>
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
