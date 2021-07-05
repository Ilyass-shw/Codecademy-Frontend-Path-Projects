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

  it('should allow to update list using filter ', async () => {
    store.dispatch(getProductsData());

    const { debug } = renderWithStore(<ProductsList />, store, 'withRouter');

    // test correct products are represented for the first filter.
    const filterInput = await screen.findByLabelText('Filter');
    const filters = within(filterInput).getAllByRole('option');
    const filterOne = filters[0].innerHTML;
    const filterTwo = filters[1].innerHTML;
    const productsList = screen.getByLabelText('products List');
    console.log(filterOne);
    let correctProducts = store.getState().Items.filteredList;
    let correctProductsNames = correctProducts.map((product) => product.name);

    correctProductsNames.forEach(async (name) => {
      expect(
        await within(productsList).findByRole('heading', { name }),
      ).toBeInTheDocument();
    });
    debug();

    // test correct products are represented for another filter.

    // const anotherFilter = within(filterInput).getByRole('option', {
    //   name: filterTwo,
    // });

    // userEvent.selectOptions(filterInput, anotherFilter);

    // await waitFor(() => {
    //   expect(filterInput).toHaveValue(filterOne);
    //   expect(store.getState().Items.filter).toBe(filterOne);
    // });

    // correctProducts = getProductsByFilter(filterOne);
    // correctProductsNames = correctProducts.map((product) => product.name);

    // correctProductsNames.forEach((name) => {
    //   expect(screen.getByText(name)).toBeInTheDocument();
    // });
  });
});
