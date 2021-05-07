import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../components/CartSlice/CartSlice';
import ItemReducer from '../components/Items/ItemsSlice';

export default configureStore({
  reducer: {
    Cart: CartReducer,
    Items: ItemReducer,
  },
});
