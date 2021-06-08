import React from 'react';
import { GrFormClose } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { CustomButton } from '../../../App/App.component';
import { toggleCartSlideBar } from '../../../helpers/toggleCartSlideBar';
import { CartitemsSelector } from '../CartSlice/selectors/cartItemsSelector';
import { isCartBarOpenSelector } from '../CartSlice/selectors/isCartBarOpenSelector';

import {
  Content,
  CloseButton,
  CartBarWrapper,
  ItemCard,
  Items,
  CheckoutButton,
  CheckoutFotter,
  Price,
  Total,
} from './CartSlideBar.component';
import { DeleteItem } from './helpers';

const CartBar: React.FC = () => {
  const isBarOpen = useSelector(isCartBarOpenSelector);

  const items = useSelector(CartitemsSelector);
  const emptyitem = [];

  const fullPage = items.length > 2;
  return (
    <>
      <CartBarWrapper
        data-testid="dark-background"
        onClick={() => {
          toggleCartSlideBar();
        }}
        open={isBarOpen}
      />

      <Content fullPage={fullPage} open={isBarOpen} data-testid="CartBar">
        <CloseButton
          data-testid="closeButton"
          onClick={() => {
            toggleCartSlideBar();
          }}
        >
          <GrFormClose size={30} />
        </CloseButton>

        <Items>
          {items.length > 0 &&
            items.map(({ item }) => {
              return (
                <>
                  <ItemCard key={item.id}>{item.name}</ItemCard>
                  <CustomButton onClick={() => DeleteItem(item.id)}>
                    Delete
                  </CustomButton>
                </>
              );
            })}

          {emptyitem.length > 0 && <p>Your cart is currently empty.</p>}
        </Items>
        <CheckoutFotter>
          <Total>
            <h5>Total</h5>
            <Price>35$</Price>
          </Total>
          <CheckoutButton to="/checkout">Check Out</CheckoutButton>
        </CheckoutFotter>
      </Content>
    </>
  );
};

export default CartBar;
