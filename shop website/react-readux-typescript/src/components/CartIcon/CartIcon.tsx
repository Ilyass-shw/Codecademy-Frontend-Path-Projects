import React from 'react';
import { CartWrapper, NumberOfItemsIndicator } from './CartIcon.component';
import { FaShoppingCart } from 'react-icons/fa';
import { useWindowWidth } from '../../helpers/getWindowWidth';

const CartIcon: React.FC = () => {
  const iconSize = useWindowWidth() > 700 ? '27' : '20';

  return (
    <>
      <CartWrapper>
        <FaShoppingCart size={iconSize} data-testid='cartIcon'/>
        <NumberOfItemsIndicator>
          0
        </NumberOfItemsIndicator>
      </CartWrapper>
    </>
  );
};

export default CartIcon;
