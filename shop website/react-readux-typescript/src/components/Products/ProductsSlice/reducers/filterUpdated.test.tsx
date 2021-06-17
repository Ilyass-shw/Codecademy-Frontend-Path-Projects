import store from '../../../../App/store';
import { filterUpdated } from '../ProductsSlice';

describe('filterUpdated', () => {
  it('should update filter', () => {
    expect(store.getState().Items.filter).toBe('All Jewelry');
    store.dispatch(filterUpdated('Bracelet'));
    expect(store.getState().Items.filter).toBe('Bracelet');
    store.dispatch(filterUpdated('Earrings'));
    expect(store.getState().Items.filter).toBe('Earrings');
    store.dispatch(filterUpdated('Armcuff'));
    expect(store.getState().Items.filter).toBe('Armcuff');
    store.dispatch(filterUpdated('Necklage'));
    expect(store.getState().Items.filter).toBe('Necklage');
    store.dispatch(filterUpdated('Ring'));
    expect(store.getState().Items.filter).toBe('Ring');
    store.dispatch(filterUpdated('All Jewelry'));
    expect(store.getState().Items.filter).toBe('All Jewelry');
  });
});
