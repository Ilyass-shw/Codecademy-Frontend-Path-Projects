import { RootState } from '../../../../App/store';
import { items } from '../CartSlice';

export const CartitemsSelector = (state: RootState): items[] =>
  state.Cart.items;
