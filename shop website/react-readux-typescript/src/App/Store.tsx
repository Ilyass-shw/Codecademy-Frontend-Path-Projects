import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../components/CartSlice/CartSlice';

export default configureStore({
  reducer: {
    Cart: CartReducer,
  },
});
