import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../CartSlice/CartSlice';

export default configureStore({
  reducer: {
    Cart: CartReducer,
  },
});
