import { createSlice } from '@reduxjs/toolkit';

interface CartState {
  isBarOpen: boolean;
}
const initialState: CartState = { isBarOpen: false };

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {},
});

export default CartSlice.reducer;
