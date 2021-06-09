import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CartitemsSelector } from '../Cart/CartSlice/selectors/cartItemsSelector';
import { TotalPriceSelector } from '../Cart/CartSlice/selectors/TotalPriceSelector';
import SummaryItem from '../Cart/SummaryItem.tsx/SummaryItem';
import {
  SummaryContainer,
  ToggleButton,
  ButtonHeader,
  TotalPrice,
  SummaryItems,
} from './OrderSummary.component';

const OrderSummary: React.FC = () => {
  const [show, setShow] = useState(false);
  const total = useSelector(TotalPriceSelector);
  const Items = useSelector(CartitemsSelector);
  return (
    <SummaryContainer>
      <ToggleButton onClick={() => setShow(!show)}>
        <ButtonHeader>
          {show ? 'Show Order summray' : 'Hide Order summray'}
        </ButtonHeader>
        <TotalPrice> {'$' + total}</TotalPrice>
      </ToggleButton>
      <SummaryItems show={show}>
        {Items.map((items) => (
          <SummaryItem
            item={items.item}
            quantity={items.quantity}
            key={items.item.id}
          />
        ))}
      </SummaryItems>
    </SummaryContainer>
  );
};

export default OrderSummary;
