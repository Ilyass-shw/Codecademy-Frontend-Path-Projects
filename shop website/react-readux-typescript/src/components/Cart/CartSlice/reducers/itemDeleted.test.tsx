import store from '../../../../App/store';
import { itemAddedToCart, itemDeletedFromCart } from '../CartSlice';

describe('itemDeletedReducer', () => {
  it('should handle deleting item', async () => {
    const ItemOne = {
      item: {
        name: 'itemOne',
        id: 1,
        description: 'rand',
        imgs: ['src'],
        price: 45,
      },
      quantity: 5,
      size: 'M',
    };
    const ItemTwo = {
      item: {
        name: 'itemOne',
        id: 2,
        description: 'rand',
        imgs: ['src'],
        price: 45,
      },
      quantity: 2,
      size: 'L',
    };
    const ItemThree = {
      item: {
        name: 'itemOne',
        id: 3,
        description: 'rand',
        imgs: ['src'],
        price: 45,
      },
      quantity: 7,
      size: 'XL',
    };
    expect(store.getState().Cart.items).toHaveLength(0);
    expect(store.getState().Cart.howManyItems).toEqual(0);

    store.dispatch(itemAddedToCart(ItemOne));
    store.dispatch(itemAddedToCart(ItemTwo));
    store.dispatch(itemAddedToCart(ItemThree));
    expect(store.getState().Cart.items).toHaveLength(3);
    expect(store.getState().Cart.howManyItems).toEqual(3);
    expect(store.getState().Cart.items).toContain(ItemTwo);
    store.dispatch(itemDeletedFromCart(ItemTwo.item.id));
    expect(store.getState().Cart.items).toHaveLength(2);
    expect(store.getState().Cart.items).not.toContain(ItemTwo);
  });
});
