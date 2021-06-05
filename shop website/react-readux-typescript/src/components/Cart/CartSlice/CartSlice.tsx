import { createSlice } from '@reduxjs/toolkit';
import { Item } from '../../../helpers/types';
import { itemAddedReducer } from './reducers/itemAdded';
import { itemDeletedReducer } from './reducers/itemDeleted';
import { toggleBarReducer } from './reducers/togglrBar';

export type items = {
  item: Item;
  quantity: number;
  size: string;
};
export interface CartState {
  isBarOpen: boolean;
  items: items[];
  howManyItems: number;
}
const initialState: CartState = {
  isBarOpen: false,
  items: [],
  howManyItems: 0,
};

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    toggleBar: toggleBarReducer,
    itemAddedToCart: itemAddedReducer,
    itemDeletedFromCart: itemDeletedReducer,
  },
});

export const {
  toggleBar,
  itemAddedToCart,
  itemDeletedFromCart,
} = CartSlice.actions;

export default CartSlice.reducer;
