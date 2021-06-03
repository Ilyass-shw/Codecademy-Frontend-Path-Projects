import { PayloadAction } from '@reduxjs/toolkit';
import { CartState, items } from '../CartSlice';

export const itemAddedReducer = (
  state: CartState,
  action: PayloadAction<items>,
): void => {
    state.items.push(action.payload);
};
