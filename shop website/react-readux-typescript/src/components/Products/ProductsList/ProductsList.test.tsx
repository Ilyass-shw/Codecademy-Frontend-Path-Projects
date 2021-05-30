import userEvent from '@testing-library/user-event';
import React from 'react';
import store from '../../../App/store';
import { renderWithStore, screen, within } from '../../../test-utils/testUtils';
import { getProductsData } from '../ProductsSlice/ProductsSlice';
import ProductsList from './ProductsList';

describe('ProductsList', () => {
  it('should render ', () => {
    renderWithStore(<ProductsList />, store, 'withRouter');
    const filterInput = screen.getByLabelText('Filter');
    const filters = within(filterInput).getAllByRole('option');

    expect(filterInput).toHaveValue('AllJewelry');
    expect(filters).toHaveLength(1);
    expect(store.getState().Items.filter).toBe('AllJewelry');
  });

  it('should allow to change the filter ', () => {
    store.dispatch(getProductsData());

    renderWithStore(<ProductsList />, store, 'withRouter');

    const filterInput = screen.getByLabelText('Filter');
    const filters = within(filterInput).getAllByRole('option');

    expect(filters.length >= 1).toBeTruthy();

    expect(store.getState().Items.filter).toBe('AllJewelry');
    expect(filterInput).toHaveValue('AllJewelry');

    const lastOption = filterInput?.lastElementChild as HTMLElement;
    userEvent.click(lastOption);

    const newFilter = filterInput.lastElementChild?.nodeValue;
    console.log(newFilter);

    expect(filterInput).toHaveValue(newFilter);
    expect(store.getState().Items.filter).toBe(newFilter);
  });
});
