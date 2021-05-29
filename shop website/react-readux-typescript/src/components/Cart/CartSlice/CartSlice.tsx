import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../App/store';

interface CartState {
  isBarOpen: boolean;
}
const initialState: CartState = { isBarOpen: false };

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    toggleBar: (state) => {
      state.isBarOpen = !state.isBarOpen;
    },
  },
});

export const isBarOpenSelector = (state: RootState): boolean =>
  state.Cart.isBarOpen;

export const { toggleBar } = CartSlice.actions;

export default CartSlice.reducer;
