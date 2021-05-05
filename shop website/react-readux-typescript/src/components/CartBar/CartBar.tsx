import React from 'react';
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
} from './CartBar.component';
import { GrFormClose } from 'react-icons/gr';

interface props {
  openCartBar: boolean;
  setOpenCartBar: (opening: boolean) => void;
}

const CartBar: React.FC<props> = ({ openCartBar, setOpenCartBar }) => {
  const items = [
    { name: 'item one', id: 1 },
    { name: 'item two', id: 2 },
    { name: 'item three', id: 3 },
  ];
  const emptyitem = [];

  const fullPage = false;
  return (
    <>
      <CartBarWrapper
        data-testid="dark-background"
        onClick={() => {
          setOpenCartBar(!openCartBar);
        }}
        opend={openCartBar}
      />

      <Content fullPage={fullPage} opend={openCartBar} data-testid="CartBar">
        <CloseButton
          data-testid="closeButton"
          onClick={() => {
            setOpenCartBar(!openCartBar);
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
