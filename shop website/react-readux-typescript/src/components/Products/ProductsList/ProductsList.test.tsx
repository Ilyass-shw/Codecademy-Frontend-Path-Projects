import React from 'react';
import userEvent from '@testing-library/user-event';
import store from '../../../App/store';
import { getProductsData } from '../ProductsSlice/ProductsSlice';
import ProductsList from './ProductsList';
import {
  renderWithStore,
  screen,
  waitFor,
  within,
} from '../../../test-utils/testUtils';

describe('ProductsList', () => {
  it('should render ', async () => {
    renderWithStore(<ProductsList />, store, 'withRouter');
    const filterInput = await screen.findByLabelText('Filter');
    const filters = within(filterInput).getAllByRole('option');

    expect(filterInput).toHaveValue('All Jewelry');
    expect(filters).toHaveLength(1);
    expect(store.getState().Items.filter).toBe('All Jewelry');
  });

  it('should allow to change the filter ', async () => {
    store.dispatch(getProductsData());

    renderWithStore(<ProductsList />, store, 'withRouter');

    const filterInput = await screen.findByLabelText('Filter');
    const filters = within(filterInput).getAllByRole('option');

    expect(filters.length > 1).toBeTruthy();
    expect(store.getState().Items.filter).toBe('All Jewelry');
    expect(filterInput).toHaveValue('All Jewelry');

    const filterOne = store.getState().Items.categories[1];

    const option = within(filterInput).getByRole('option', { name: filterOne });

    userEvent.selectOptions(filterInput, option);

    await waitFor(() => {
      expect(filterInput).toHaveValue(filterOne);
      expect(store.getState().Items.filter).toBe(filterOne);
    });
  });
});
