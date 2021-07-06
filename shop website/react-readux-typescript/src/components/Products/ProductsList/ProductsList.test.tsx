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
  });

  it('should render ', async () => {
    const { asFragment } = renderWithStore(
      <ProductsList />,
      store,
      'withRouter',
    );
    expect(asFragment).toMatchSnapshot();
  });

  it('should correctly render products of all categories by the default.', async () => {
    // Usually the api call should be mocked here
    // but since data use in this project is fake
    // and no real api call is performed, the mocking is skipped.
    store.dispatch(getProductsData());
    renderWithStore(<ProductsList />, store, 'withRouter');

    // Get the available filters.
    const filterInput = await screen.findByLabelText('Filter');
    const filters = within(filterInput)
      .getAllByRole('option')
      .map((op) => op.innerHTML);

    let categories: string[];
    [filters[0], ...categories] = filters; // filter[0]==='All Jewelry'

    // Get the actual correct products names that should be rendered
    // on the screen.
    const correctProducts = store.getState().Items.filteredList;
    const correctProductsNames = correctProducts
      .map((product) => product.name)
      .sort();

    // Get the products names of from all categories
    // that are rendered on the screen.
    const productsList = screen.getByLabelText('products List');
    const screenProductsNumber = within(productsList).getAllByRole('listitem')
      .length;
    let screenProductsNames: string[] = [];
    await waitFor(() => {
      categories.forEach((category) => {
        const regex = new RegExp('(^|\\s)' + category + '(\\s|$)', 'i');

        screenProductsNames = screenProductsNames.concat(
          within(productsList)
            .getAllByText(regex)
            .map((item) => item.innerHTML),
        );
      });
    });

    // Test correct products are represented.
    expect(screenProductsNames.sort()).toStrictEqual(
      correctProductsNames.sort(),
    );
    expect(screenProductsNumber).toStrictEqual(correctProductsNames.length);
  }, 30000);

  it('should handle changing filter', async () => {
    // Usually the api call should be mocked here
    // but since data use in this project is fake
    // and no real api call is performed, the mocking is skipped.
    store.dispatch(getProductsData());
    renderWithStore(<ProductsList />, store, 'withRouter');

    // Get the available filters.
    const filterInput = await screen.findByLabelText('Filter');
    const filters = within(filterInput)
      .getAllByRole('option')
      .map((op) => op.innerHTML);

    let categories: string[];
    [filters[0], ...categories] = filters; // Because filter[0]==='All Jewelry'
    // Get the actual correct products names that should be rendered
    // on the screen.
    const correctProducts = store.getState().Items.filteredList;
    const correctProductsNames = correctProducts
      .map((product) => product.name)
      .sort();

    // choose filter.
    const firstFilter = within(filterInput).getByRole('option', {
      name: categories[0],
    });
    userEvent.selectOptions(filterInput, firstFilter);
    await waitFor(() => {
      expect(filterInput).toHaveValue(filters[1]);
      expect(store.getState().Items.filter).toBe(filters[1]);
    });

    // Get the products names that are rendered on the screen.
    const productsList = screen.getByLabelText('products List');
    const screenProductsNumber = within(productsList).getAllByRole('listitem')
      .length;

    let screenProductsNames: string[] = [];
    await waitFor(() => {

      const regex = new RegExp('(^|\\s)' + categories[1] + '(\\s|$)', 'i');

      screenProductsNames = within(productsList)
        .getAllByText(regex)
        .map((item) => item.innerHTML);
    });
    // Test correct products are represented.
    expect(screenProductsNames.sort()).toStrictEqual(
      correctProductsNames.sort(),
    );
    expect(screenProductsNumber).toStrictEqual(correctProductsNames.length);

    // change filter one more time.
    const secondFilter = within(filterInput).getByRole('option', {
      name: categories[1],
    });
    userEvent.selectOptions(filterInput, secondFilter);
    await waitFor(() => {
      expect(filterInput).toHaveValue(filters[2]);
      expect(store.getState().Items.filter).toBe(filters[2]);
    });
    // Get the actual correct products names that should be rendered
    // on the screen again.
    const secondCorrectProducts = store.getState().Items.filteredList;
    const secondCorrectProductsNames = secondCorrectProducts
      .map((product) => product.name)
      .sort();

    // Get the products names that are rendered on the screen.
    const secondProductsList = screen.getByLabelText('products List');
    const secondScreenProductsNumber = within(secondProductsList).getAllByRole(
      'listitem',
    ).length;

    let secondScreenProductsNames: string[] = [];
    await waitFor(() => {
      const regex = new RegExp('(^|\\s)' + categories[1] + '(\\s|$)', 'i');

      secondScreenProductsNames = within(secondProductsList)
        .getAllByText(regex)
        .map((item) => item.innerHTML);
    });
    // Test correct products are represented.
    expect(secondScreenProductsNames.sort()).toStrictEqual(
      secondCorrectProductsNames.sort(),
    );
    expect(secondScreenProductsNumber).toStrictEqual(
      secondCorrectProductsNames.length,
    );
  });
});
