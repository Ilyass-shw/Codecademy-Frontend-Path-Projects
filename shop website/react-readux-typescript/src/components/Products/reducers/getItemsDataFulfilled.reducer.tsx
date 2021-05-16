import { PayloadAction } from '@reduxjs/toolkit';
import { DataItem } from '../../../helpers/types';
import { filterWithCategory } from '../helpers';
import { ProductsState } from '../ProductsSlice';

export const getProductsDataFulfilledReducer = (
  state: ProductsState,
  action: PayloadAction<DataItem[]>,
): void => {
  state.FetchStatus = 'succeeded';

  state.Products.jewelry.AllJewelry = action.payload;

  state.Products.jewelry.Ring = filterWithCategory(action.payload, 'RING');

  state.Products.jewelry.Armcuff = filterWithCategory(
    action.payload,
    'ARMCUFF',
  );
  state.Products.jewelry.Necklage = filterWithCategory(
    action.payload,
    'NECKLACE',
  );
  state.Products.jewelry.Earrings = filterWithCategory(
    action.payload,
    'EARRINGS',
  );
  state.Products.jewelry.Bracelet = filterWithCategory(
    action.payload,
    'BRACELET',
  );
};
