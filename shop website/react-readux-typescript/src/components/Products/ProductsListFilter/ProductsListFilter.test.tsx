import React from 'react';
import userEvent from '@testing-library/user-event';
import store from '../../../App/store';
import { getProductsData } from '../ProductsSlice/ProductsSlice';
import ProductsListFilter from './ProductsListFilter';
import {
  renderWithStore,
  screen,
  waitFor,
  within,
} from '../../../test-utils/testUtils';

describe('ProductsListFilter', () => {
  it('should render ', async () => {
    const { asFragment } = renderWithStore(
      <ProductsListFilter />,
      store,
      'withRouter',
    );
    const filterInput = await screen.findByLabelText('Filter');
    const filters = within(filterInput).getAllByRole('option');

    expect(asFragment).toMatchSnapshot();
    expect(filterInput).toHaveValue('All Jewelry');
    expect(filters).toHaveLength(1);
    expect(store.getState().Items.filter).toBe('All Jewelry');
  });

  it('should allow to change the filter ', async () => {
    store.dispatch(getProductsData());

    renderWithStore(<ProductsListFilter />, store, 'withRouter');

    const filterInput = await screen.findByLabelText('Filter');
    const filters = within(filterInput).getAllByRole('option');

    // make sure additional filter options are added.
    expect(filters.length > 1).toBeTruthy();

    //make sure changing filter option is possible.
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
