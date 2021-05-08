import store from '../App/store';
import { toggleBar } from '../components/CartSlice/CartSlice';

export const toggleCartSideBar = (): void => {
  store.dispatch(toggleBar());
};
