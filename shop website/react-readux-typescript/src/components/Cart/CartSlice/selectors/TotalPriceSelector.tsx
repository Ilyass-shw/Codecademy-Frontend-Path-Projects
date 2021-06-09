import { RootState } from '../../../../App/store';

export const TotalPriceSelector = (state: RootState): string => {
  let total = 0;
  state.Cart.items.forEach(
    (product) => (total = total + product.item.price * product.quantity),
  );
  return total.toFixed(2);
};
