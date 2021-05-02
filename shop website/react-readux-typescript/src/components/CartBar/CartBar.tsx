import React from 'react';
import { CloseButton, CartBarWrapper, ItemCard } from './CartBar.component';
interface props {
  openCartBar: boolean;
  setOpenCartBar: (opening:boolean) => void;
}

const CartBar: React.FC<props> = ({ openCartBar, setOpenCartBar }) => {
  const items = [
    { name: 'item one', id : 1 },
    { name: 'item two', id : 2 },
    { name: 'item three', id : 3 },
  ];
  const emptyitem = [];


  return (
    <CartBarWrapper opend={openCartBar}>
      {items.length &&
        items.map((item) => {
          return <ItemCard key={item.id}>{item.name}</ItemCard>;
        })}

      {emptyitem.length && <p>Your cart is currently empty.</p>}

      <CloseButton
        onClick={() => {
          setOpenCartBar(!openCartBar);
        }}
      />
    </CartBarWrapper>
  );
};

export default CartBar;
