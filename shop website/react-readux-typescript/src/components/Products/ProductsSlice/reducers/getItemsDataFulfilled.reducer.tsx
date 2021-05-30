import { PayloadAction } from '@reduxjs/toolkit';
import { categories, DataItem  } from '../../../../helpers/types';
import { filterWithCategory } from '../helpers';
import { ProductsState } from '../ProductsSlice';

interface payload {
  data: DataItem[];
  categories: categories[];
}
export const getProductsDataFulfilledReducer = (
  state: ProductsState,
  action: PayloadAction<payload>,
): void => {
  state.FetchStatus = 'succeeded';

  state.categories = action.payload.categories;
  state.Products.jewelry.AllJewelry = action.payload.data;

  action.payload.categories.forEach((cat) => {
    state.Products.jewelry[cat] = filterWithCategory(
      action.payload.data,
      cat,
    );
  });
  // state.Products.jewelry.Ring = filterWithCategory(action.payload, 'RING');

  // state.Products.jewelry.Armcuff = filterWithCategory(
  //   action.payload,
  //   'ARMCUFF',
  // );
  // state.Products.jewelry.Necklage = filterWithCategory(
  //   action.payload,
  //   'NECKLACE',
  // );
  // state.Products.jewelry.Earrings = filterWithCategory(
  //   action.payload,
  //   'EARRINGS',
  // );
  // state.Products.jewelry.Bracelet = filterWithCategory(
  //   action.payload,
  //   'BRACELET',
  // );
};
