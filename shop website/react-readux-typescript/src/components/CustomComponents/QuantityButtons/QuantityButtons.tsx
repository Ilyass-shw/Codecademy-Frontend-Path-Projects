import React from 'react';
import {
  QuantityBlock,
  QuantityButton,
  Quantity,
} from './QuantityButtons.component';

interface QuantityButtonsProps {
  productID: number;
  productQuantity: number;
  UpdateItemQuantity: (productID: number, productQuantity: number) => void;
}
const QuantityButtons: React.FC<QuantityButtonsProps> = ({
  productID,
  productQuantity,
  UpdateItemQuantity,
}) => {
  return (
    <QuantityBlock>
      <QuantityButton
        onClick={() =>
          UpdateItemQuantity(
            productID,
            productQuantity > 1 ? productQuantity - 1 : 1,
          )
        }
      >
        -
      </QuantityButton>
      <Quantity>{productQuantity}</Quantity>
      <QuantityButton
        onClick={() => UpdateItemQuantity(productID, productQuantity + 1)}
      >
        +
      </QuantityButton>
    </QuantityBlock>
  );
};

export default QuantityButtons;
