import React from 'react';
import { GrFormClose } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { toggleCartSlideBar } from '../../../helpers/toggleCartSlideBar';
import { isBarOpenSelector } from '../CartSlice/CartSlice';

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

const CartBar: React.FC = () => {
  const isBarOpen = useSelector(isBarOpenSelector);

  const items = [
    { name: 'item one', id: 1 },
    { name: 'item two', id: 2 },
  ];
  const emptyitem = [];

  const fullPage = false;
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
            items.map((item) => {
              return <ItemCard key={item.id}>{item.name}</ItemCard>;
            })}

          {emptyitem.length > 0 && <p>Your cart is currently empty.</p>}
        </Items>
        <CheckoutFotter>
          <Total>
            <h5>Total</h5>
            <Price>35$</Price>
          </Total>
          <CheckoutButton>Check Out</CheckoutButton>
        </CheckoutFotter>
      </Content>
    </>
  );
};

export default CartBar;
