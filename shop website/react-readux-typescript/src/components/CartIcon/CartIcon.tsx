import React from 'react';
import { CartWrapper, NumberOfItemsIndicator } from './CartIcon.component';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IconContext } from 'react-icons';

import { useWindowWidth } from '../../helpers/useWindowWidth';

const CartIcon: React.FC = () => {
  const iconSize = useWindowWidth() > 700 ? '37' : '27';

  return (
    <>
      <CartWrapper>
        <IconContext.Provider
          value={{
            color: 'white',
            style: { transform: 'translateX(-2px)' },
            size: iconSize,
          }}
        >
          <AiOutlineShoppingCart data-testid="cartIcon" />
        </IconContext.Provider>
        <NumberOfItemsIndicator>0</NumberOfItemsIndicator>
      </CartWrapper>
    </>
  );
};

export default CartIcon;
