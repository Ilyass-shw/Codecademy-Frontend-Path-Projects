import { PayloadAction } from '@reduxjs/toolkit';
import { CartState, items } from '../CartSlice';

export const itemAddedReducer = (
  state: CartState,
  action: PayloadAction<items>,
): void => {
  //'includes' method is not working fo some reason
  // const bi = state.items
  const isInListAlready = state.items.find(
    (item) => item.item.id === action.payload.item.id,
  );
  // console.log(action.payload)
  // console.log(bi)
  console.log(!isInListAlready);
  if (!isInListAlready) {
    state.items.push(action.payload);
    state.howManyItems++;
  }
};
