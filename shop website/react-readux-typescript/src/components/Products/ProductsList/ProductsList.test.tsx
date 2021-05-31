import userEvent from '@testing-library/user-event';
import React from 'react';
import store from '../../../App/store';
import {
  renderWithStore,
  screen,
  waitFor,
  within,
} from '../../../test-utils/testUtils';
import { getProductsData } from '../ProductsSlice/ProductsSlice';
import ProductsList from './ProductsList';

describe('ProductsList', () => {
  it('should render ', async () => {
    renderWithStore(<ProductsList />, store, 'withRouter');
    const filterInput = await screen.findByLabelText('Filter');
    const filters = within(filterInput).getAllByRole('option');

    expect(filterInput).toHaveValue('AllJewelry');
    expect(filters).toHaveLength(1);
    expect(store.getState().Items.filter).toBe('AllJewelry');
  });

  it('should allow to change the filter ', async () => {
    store.dispatch(getProductsData());

    renderWithStore(<ProductsList />, store, 'withRouter');

    const filterInput = await screen.findByLabelText('Filter');
    const filters = within(filterInput).getAllByRole('option');
    expect(filters.length > 1).toBeTruthy();
    console.log(filters.length);
    // console.log(filters);
    expect(store.getState().Items.filter).toBe('AllJewelry');
    expect(filterInput).toHaveValue('AllJewelry');

    const filterOne = store.getState().Items.categories[1];
    console.log(filterOne);

    const el = within(filterInput).getByRole('option', { name: filterOne });
    console.log(el);

    userEvent.click(el);

    // const newFilter = filterInput.lastElementChild?.nodeValue;
    await waitFor(() => {
      expect(filterInput).toHaveValue(filterOne);
      expect(store.getState().Items.filter).toBe(filterOne);
    });
  });
});
