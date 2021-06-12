import { createSlice } from '@reduxjs/toolkit';
import { Item } from '../../../helpers/types';
import { itemAddedReducer } from './reducers/itemAdded';
import { itemDeletedReducer } from './reducers/itemDeleted';
import { toggleBarReducer } from './reducers/togglrBar';
import { ItemQuantityUpdatedReducer } from './reducers/ItemQuantityUpdated';

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
    ItemQuantityUpdated: ItemQuantityUpdatedReducer,
  },
});

export const {
  toggleBar,
  itemAddedToCart,
  itemDeletedFromCart,
  ItemQuantityUpdated,
} = CartSlice.actions;

export default CartSlice.reducer;
