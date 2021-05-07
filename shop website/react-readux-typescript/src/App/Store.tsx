import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../components/CartSlice/CartSlice';
import ItemReducer from '../components/Items/ItemsSlice';

const store = configureStore({
  reducer: {
    Cart: CartReducer,
    Items: ItemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
